import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { BaseComponent } from '../_shared/components/base.component';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../users/user.service';
import { DeviceService } from '../device/device.service';
import { DeviceModel } from '../device/models/device.model';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage extends BaseComponent {
    constructor(
        // @Inject(DOCUMENT) public document: Document,
        public authService: AuthService,
        public userService: UserService,
        private deviceService: DeviceService
    ) { super(); }

    async ngOnInit() {
        super.ngOnInit();
        // this.inProgress.refresh();
    }

    public inProgress = new class InProgress {
        constructor(private parent: HomePage) { }

        public devices: DeviceModel[];

        public async refresh() {
            await this.parent.startLoading('partial');
            this.parent.deviceService.list({
                /* filter: new DeviceFilterModel({
                    statuses: [DeviceStatuses.online],
                }),
                order: [{
                    key: 'Name',
                    descending: true
                }],
                take: 1 */
            })
            .then(response => { console.log(response);
                this.devices = response;
            });
            this.parent.stopLoading();
        }
    }(this);
}
