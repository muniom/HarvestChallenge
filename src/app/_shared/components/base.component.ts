import { OnDestroy, ViewChild, ContentChild, ViewChildren, QueryList, ElementRef, OnInit } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { get } from 'lodash-es';

import { AlertsComponent } from './alerts/alerts.component';
import { Alerts } from './alerts/alerts';
import { BlockUI, BlockUIComponent, BlockUIService, NgBlockUI } from 'ng-block-ui';
import { BlockUIInstanceService } from 'ng-block-ui/services/block-ui-instance.service';


export class BaseComponent implements OnInit, OnDestroy {
    constructor(
    ) { }

    public alerts: Alerts = new Alerts();

    public _onDestroy: Subject<void>; // = new ReplaySubject();

    ngOnInit() { console.log('ngOnInit', this.constructor.name);
        this._onDestroy = new ReplaySubject();
    }
    ngOnDestroy() { console.log('ngOnDestroy', this.constructor.name);
        if (this._onDestroy) {
            this._onDestroy.next();
            this._onDestroy.complete();
        }
    }

    public loading: {
        [key: string]: {
            count: number,
            element?: BlockUIComponent
        }
    } = {};

    @ViewChildren(BlockUIComponent) blockUIs: QueryList<BlockUIComponent>;

    public async startLoading(type: 'full' | 'partial' | string = 'partial') {
        this.loading[type] = {
            count: (+get(this.loading[type], 'count') || 0) + 1
        };
        if (type === 'full') {
            console.log('LoadingFull');
            // Blocks entire page
            // this.renderer.addClass(this.document.body, 'blurred');
            // if (!get(this.loading.full, 'element'))
            //     this.loading.full.element = await this.loadingController.create({
            //     cssClass: 'transparent'
            // }); // console.log(this.loading);
            // if (get(this.loading.full, 'element')) // magic
            //    await (this.loading.full.element as HTMLIonLoadingElement).present();
        } else if (type === 'partial') {
            // Toggles header progress-bar
        } else {
            const blockUI: BlockUIInstanceService = get(this.blockUIs.find(blockUI => blockUI.name === type), 'blockUI');
            if (!blockUI.blockUIInstances[type]) blockUI.decorate(type);
            blockUI.blockUIInstances[type].start(); // console.log(blockUI);
        }
        return this.loading;
    }

    public async stopLoading(type: 'full' | 'partial' | string = 'partial') { // loadingElement: HTMLIonLoadingElement = this.loading.element) {
        const loading = this.loading[type];
        if (!loading || !loading.count) return;
        loading.count = (+get(this.loading[type], 'count') || 1) - 1;

        if (type === 'full') {
            // await (this.loading.full.element as HTMLIonLoadingElement).dismiss();
        } else if (type !== 'partial') {
            const blockUI = get(this.blockUIs.find(blockUI => blockUI.name === type), 'blockUI');
            blockUI.blockUIInstances[type].stop();
        }
        if (!loading.count) {
            delete this.loading[type];
        }
        // this.renderer.removeClass(this.document.body, 'blurred');
    }

    public trackByFn(index, item) { // console.log('trackByFn', arguments);
        return index;
    }

    public compareFn(a, b) {
        const property = 'key'; // Usually an Input within wrapping component
        if (!a || !b || !get(a, property) || !get(b, property)) return false;
        return get(a, property) === get(b, property);
    }

    public log($event) { console.log($event); }

    public todo(message: string) { alert(message); }
}
