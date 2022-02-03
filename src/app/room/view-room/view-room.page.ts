import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { BaseComponent } from '../../_shared/components/base.component';
import { AuthService } from '../../auth/auth.service';
import { DeviceModel } from '../../device/models/device.model';
import { DeviceService } from '../../device/device.service';
import { ConfirmDialogComponent } from '../../_shared/components/dialog/confirmation-dialog.component';


@Component({
    selector: 'app-view-room',
    templateUrl: 'view-room.page.html',
    styleUrls: ['view-room.page.scss'],
})
export class ViewRoomPage extends BaseComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private dialog: MatDialog,
        public authService: AuthService,
        // private roomService: RoomService,
        private deviceService: DeviceService
    ) { super(); }

    public devices: DeviceModel[];

    async ngOnInit() {
        this.route.params.subscribe(() => {
            this.refresh();
        });
    }

    async refresh() {
        this.alerts.reset();

        // Go
        await this.startLoading();
        this.devices = await this.deviceService.list({
            roomId: this.route.snapshot.params.roomId
        })
        .catch(error => this.alerts.set('error', error));
        await this.stopLoading();
    }

    async addUser() {
        this.dialog.open(ConfirmDialogComponent, {
            data: {
                title: 'Add User',
                msg: `Coming Soon`
            }
        });
    }

    async assignDevice() {
        this.dialog.open(ConfirmDialogComponent, {
            data: {
                title: 'Assign Device',
                msg: `Coming Soon`
            }
        });
    }
}
