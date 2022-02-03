import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from '../../_shared/components/base.component';
import { AuthService } from '../../auth/auth.service';
import { DeviceService } from '../device.service';
import { DeviceForm, DeviceModel } from '../models/device.model';


@Component({
    selector: 'app-view-device',
    templateUrl: 'view-device.page.html',
    styleUrls: ['view-device.page.scss'],
})
export class ViewDevicePage extends BaseComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        public authService: AuthService,
        private deviceService: DeviceService
    ) { super(); }

    public form = new DeviceForm;

    async ngOnInit() {
        this.route.params.subscribe(() => {
            this.refresh();
        });
    }

    async refresh() {
        this.alerts.reset();

        // Go
        await this.startLoading();
        const device = await this.deviceService.get(+this.route.snapshot.params.deviceId)
            .catch(error => this.alerts.set('error', error));
        if (device) { console.log(device);
            this.form.reset(device);
        }
        await this.stopLoading();
    }
}
