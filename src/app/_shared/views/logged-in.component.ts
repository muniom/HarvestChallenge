import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { get } from 'lodash-es';

import { BaseComponent } from '../components/base.component';
import { AuthService } from '../../auth/auth.service';
import { DeviceService } from '../../device/device.service';
import { DeviceModel } from '../../device/models/device.model';
import { RoomModel } from '../../room/models/room.model';
import { RoomService } from '../../room/room.service';


@Component({
    selector: 'logged-in',
    templateUrl: 'logged-in.component.html',
    styleUrls: ['logged-in.component.scss'],
    // animations: [routeAnimation(), expandInOut()]
})
export class LoggedInComponent extends BaseComponent implements OnInit {
    constructor(
        public router: Router,
        public authService: AuthService,
        private deviceService: DeviceService,
        private roomService: RoomService
        // private socketService: SocketService
    ) { super(); }

    // public currentPage: Component;

    public devices: DeviceModel[];

    public rooms: RoomModel[];

    ngOnInit() { console.log('LoggedInComponent');
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        )
        .subscribe((event) => { console.log(event);
            // this.currentPage = $event.url;
            this.refresh();
        });

        this.refresh();
    }

    async refresh() {
        await this.startLoading();

        await Promise.all([
            // Devices
            this.devices = await this.deviceService.list({})
            .catch(error => this.alerts.set('error', error)),
            // if (!this.devices.length) this.alerts.set('info', 'No Devices Added')

            // Rooms
            this.rooms = await this.roomService.list({})
            .catch(error => this.alerts.set('error', error)),
        ]);

        await this.stopLoading();
    }

    onActivate($event: Component) {
        // this.currentPage = $event;
        // this.refresh();
    }
}
