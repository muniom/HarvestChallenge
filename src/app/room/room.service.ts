import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { HttpService } from '../_shared/services/http.service';
import { HttpError } from '../_shared/models/http-error';
import { RoomForApi, RoomModel } from './models/room.model';
import { DeviceService } from '../device/device.service';


@Injectable({
    providedIn: 'root'
})
export class RoomService {
    constructor(
        private storageService: Storage,
        private httpService: HttpService,
        private deviceService: DeviceService
    ) {}

    // 
    private getRoomsFromDB = async () => {
        const devices = await this.deviceService.list({});
        return (await this.storageService.get('Rooms')) || [
            new RoomModel({
                roomId: 1,
                name: 'All Devices',
                icon: 'groups',
                devices: devices.filter(device => device.deviceId === 1)
            })
       ];
    } // LocalStored or none

    public async list(data: any): Promise<RoomModel[]> {
        return this.httpService.get<RoomModel[]>({
            url: '/api/room',
            body: data
        }).toPromise().catch(async (error: HttpErrorResponse) => {
            // MockDB
            if (data)
                return (await this.getRoomsFromDB())
                .map(room => new RoomModel(room));
            throw new HttpError(error, 'There was an issue listing Rooms');
        });
    }

    public async get(roomId: number): Promise<RoomModel> {
        return this.httpService.get({
            url: '/api/room/' + roomId
        }).toPromise().catch(async (error: HttpErrorResponse) => {
            // MockDB
            if (roomId) {
                const room = (await this.getRoomsFromDB())
                .find((room) => room.roomId === roomId);
                if (room) return new RoomModel(room);
            }
            throw new HttpError(new HttpErrorResponse({ status: 404 }), 'Room does not exist');
        });
    }

    public async save(data: RoomModel): Promise<RoomModel>  {
        return this.httpService.post({
            url: '/api/room',
            body: data // Usually convert this to a 'ForApi' model which re-maps enums
        }).toPromise().catch(async (error: HttpErrorResponse) => {
            // MockDB
            if (data) {
                const storedRooms = await this.getRoomsFromDB();
                if (data.roomId) { // Edit
                    const existingExample = storedRooms.find(example => example.roomId === data.roomId);
                    if (existingExample) Object.assign(existingExample, data); // Update instance
                    else throw new HttpError(new HttpErrorResponse({ status: 404 }), 'Room does not exist');
                } else { // Add
                    data.roomId = storedRooms.reduce((mem, example) => {
                       return example.roomId > mem ? example.roomId : mem; // Auto-Increment ID
                    }, 0) + 1;
                    storedRooms.push(data);
                }

                // Update MockDB
                var roomsForApi = storedRooms.map(room => new RoomForApi(room));
                this.storageService.set('Rooms', roomsForApi);

                const response = new RoomModel(data);
                return response;
            }
            throw new HttpError(error, 'There was an issue saving the Room');
        });
    }

    public async delete(roomId: number): Promise<void> {
        return this.httpService.delete({
            url: '/api/room/' + roomId
        }).toPromise().catch(async (error: HttpErrorResponse) => {
            // MockDB
            if (roomId) {
                let storedRooms: RoomModel[] = await this.getRoomsFromDB();
                const room = storedRooms.find((room) => room.roomId === roomId);
                if (room) {
                    storedRooms = storedRooms.filter((room) => room.roomId !== roomId);

                    // Update MockDB
                    this.storageService.set('Rooms', storedRooms);
                    return;
                }
            }
            throw new HttpError(new HttpErrorResponse({ status: 404 }), 'Room does not exist');
        });
    }
}
