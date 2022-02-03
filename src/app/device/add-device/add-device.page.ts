import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { BaseComponent } from '../../_shared/components/base.component';
import { validateForm } from '../../_shared/helpers/forms';
import { AuthService } from '../../auth/auth.service';
import { DeviceService } from '../device.service';
import { DeviceForm, DeviceModel } from '../models/device.model';
import { DeviceStatuses } from '../models/device-statuses.dictionary';
import { DeviceTypes } from '../models/device-types.dictionary';


@Component({
    selector: 'app-add-device',
    templateUrl: 'add-device.page.html',
    styleUrls: ['add-device.page.scss'],
})
export class AddDevicePage extends BaseComponent implements OnInit {
    constructor(
        private router: Router,
        private snackBar: MatSnackBar,
        public authService: AuthService,
        private deviceService: DeviceService
    ) { super(); }

    public form = new DeviceForm();

    public formOptions = {
        deviceTypes: Object.values(DeviceTypes)
    };

    public discoveredDevices: DeviceModel[];

    async ngOnInit() {
        this.refresh();
    }

    async refresh() {
        this.alerts.reset();
        this.startLoading();
        const existingDevices = await this.deviceService.list({
            // Filters / Pagination
        }).catch(error => this.alerts.set('error', error));

        // Would normally be a service call
        this.discoveredDevices = [
            // Example devices - filtered by previously stored (IndexDB)
            new DeviceModel({
                serialNo: 'LHD-0000000001',
                name: 'Logitech HD Cam',
                type: DeviceTypes.webcam,
                status: DeviceStatuses.online,
                url: '//www.youtube.com/embed/bVk8XyjhTKo?autoplay=1'
            }),
            new DeviceModel({
                serialNo: 'YC5000-000000001',
                name: 'Yahama ClearMic 5000',
                type: DeviceTypes.microphone,
                status: DeviceStatuses.online,
                url: '//www.broadcastify.com/webPlayer/1432'
            }),
            new DeviceModel({
                serialNo: 'M-0000000001',
                name: 'Mic #1',
                type: DeviceTypes.microphone,
                // url: ''
            }),
            new DeviceModel({
                serialNo: 'C-0000000001',
                name: 'Cam #1',
                type: DeviceTypes.webcam,
                url: '//www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
            }),
            new DeviceModel({
                serialNo: 'H-000000001',
                name: 'Headset #1',
                type: DeviceTypes.headset,
                // url: ''
            })
        ].filter(device => {
            const existingDevice = existingDevices.find(existingDevice => device.name === existingDevice.name);
            console.log('existingDevice', existingDevice);
            return !existingDevice;
        })
        .map((device, i) => Object.assign(device, { // auto-assign id's
            // deviceId: i + existingDevices.length,
            orgId: this.authService.user.organisation.organisationId,
            roomId: this.authService.room.roomId
        }));

        if (!this.discoveredDevices.length) this.alerts.set('info', 'No devices discovered');
        this.stopLoading();
    }

    async save() {
        // Validate
        this.alerts.reset();
        if (!validateForm(this.form)) return;

        // Go
        await this.startLoading();
        await this.deviceService.save(this.form.value)
            .then((device) => {
                this.router.navigate(['device', device.deviceId]);
            
                // Notify
                this.snackBar.open('Device Added', 'Close', { duration: 3000 });
            })
            .catch(error => this.alerts.set('error', error));
        await this.stopLoading();
    }
}
