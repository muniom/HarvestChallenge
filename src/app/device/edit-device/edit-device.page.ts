import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { get } from 'lodash-es';

import { BaseComponent } from '../../_shared/components/base.component';
import { AuthService } from '../../auth/auth.service';
import { DeviceService } from '../device.service';
import { DeviceForm, DeviceModel } from '../models/device.model';
import { validateForm } from '../../_shared/helpers/forms';
import { ConfirmDialogComponent } from '../../_shared/components/dialog/confirmation-dialog.component';
import { RoomService } from '../../room/room.service';
import { RoomModel } from '../../room/models/room.model';


@Component({
    selector: 'app-edit-device',
    templateUrl: 'edit-device.page.html',
    styleUrls: ['edit-device.page.scss'],
})
export class EditDevicePage extends BaseComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private snackBar: MatSnackBar,
        private dialog: MatDialog,
        public authService: AuthService,
        private deviceService: DeviceService,
        private roomService: RoomService
    ) { super(); }

    public form = new DeviceForm;

    public formOptions: {
        rooms?: RoomModel[]
    } = {};

    async ngOnInit() {
        await this.startLoading();
        this.formOptions.rooms = await this.roomService.list({})
            .catch(error => this.alerts.set('error', error));
        await this.stopLoading();

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

    async delete() {
        this.alerts.reset();

        this.dialog.open(ConfirmDialogComponent, {
            data: {
                title: 'Confirm Delete',
                msg: `Are you sure you want to Delete "${ this.form.value.name }"?`,
                onClose: async (response: boolean) => {
                    if (!response) return;
     
                    // Go
                    await this.deviceService.delete(this.form.value.deviceId)
                    .then(() => this.router.navigate(['/']))
            
                    // Notify
                    this.snackBar.open('Device Deleted', 'Close', { duration: 3000 });
               }
            }
        });
    }

    async save() {
        this.alerts.reset();
        if (!validateForm(this.form)) return;

        // Go
        await this.startLoading();
        await this.deviceService.save(this.form.value)
            .then((device) => {
                // this.form.patchValue(device);
                this.router.navigate(['/device', this.route.snapshot.params.deviceId]);
            
                // Notify
                this.snackBar.open('Device Saved', 'Close', { duration: 3000 });
            })
            .catch(error => this.alerts.set('error', error));
        await this.stopLoading();
    }
    
    // TODO: Make generic
    public compareFn(a, b) {
        const property = 'roomId'; // Usually an Input within wrapping component
        if (!a || !b || !get(a, property) || !get(b, property)) return false;
        return get(a, property) === get(b, property);
    }
}
