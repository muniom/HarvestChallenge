import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { HttpService } from '../_shared/services/http.service';
import { HttpError } from '../_shared/models/http-error';
import { DeviceForApi, DeviceModel } from './models/device.model';
import { RoomModel } from '../room/models/room.model';


@Injectable({
    providedIn: 'root'
})
export class DeviceService {
    constructor(
        private storageService: Storage,
        private httpService: HttpService
    ) {}

    // 
    private getDevicesFromDB = async (): Promise<DeviceForApi[]> => (await this.storageService.get('Devices')) || []; // LocalStored or example

    public async list(data: DeviceForApi): Promise<DeviceModel[]> {
        return this.httpService.get<DeviceModel[]>({
            url: '/api/device',
            query: data
        }).toPromise().catch(async (error: HttpErrorResponse) => {
            // MockDB
            if (data)
                return (await this.getDevicesFromDB())
                .filter(device => {
                    // if (data.roomId && device.roomId !== +data.roomId)
                    //     return false;
                    return true;
                })
                .map(device => new DeviceModel(device, {
                    // Circular-mapping
                    room: RoomModel
                }));
            throw new HttpError(error, 'There was an issue listing Devices');
        });
    }

    public async get(deviceId: number): Promise<DeviceModel> {
        return this.httpService.get({
            url: '/api/device/' + deviceId
        }).toPromise().catch(async (error: HttpErrorResponse) => {
            // MockDB
            if (deviceId) {
                const device = (await this.getDevicesFromDB())
                .find((device) => device.deviceId === deviceId);
                if (device) return new DeviceModel(device, {
                    // Circular-mapping
                    room: RoomModel
                });
            }
            throw new HttpError(new HttpErrorResponse({ status: 404 }), 'Device does not exist');
        });
    }

    public async save(data: DeviceModel): Promise<DeviceModel>  {
        return this.httpService.post({
            url: '/api/device',
            body: data // Usually convert this to a 'ForApi' model which re-maps enums
        }).toPromise().catch(async (error: HttpErrorResponse) => {
            // MockDB
            if (data) {
                const storedDevices = await this.getDevicesFromDB();
                if (data.deviceId) { // Edit
                    const existingExample = storedDevices.find(example => example.deviceId === data.deviceId);
                    if (existingExample) Object.assign(existingExample, data); // Update instance
                    else throw new HttpError(new HttpErrorResponse({ status: 404 }), 'Device does not exist');
                } else { // Add
                    data.deviceId = storedDevices.reduce((mem, example) => {
                       return example.deviceId > mem ? example.deviceId : mem; // Auto-Increment ID
                    }, 0) + 1;
                    storedDevices.push(data as any);
                }

                // Update MockDB
                var devicesForApi = storedDevices.map(device => new DeviceForApi(device));
                this.storageService.set('Devices', devicesForApi);

                const response = new DeviceModel(data);
                return response;
            }
            throw new HttpError(error, 'There was an issue saving the Device');
        });
    }

    public async delete(deviceId: number): Promise<void> {
        return this.httpService.delete({
            url: '/api/device/' + deviceId
        }).toPromise().catch(async (error: HttpErrorResponse) => {
            // MockDB
            if (deviceId) {
                let storedDevices = await this.getDevicesFromDB();
                const device = storedDevices.find((device) => device.deviceId === deviceId);
                if (device) {
                    storedDevices = storedDevices.filter((device) => device.deviceId !== deviceId);

                    // Update MockDB
                    this.storageService.set('Devices', storedDevices);
                    return;
                }
            }
            throw new HttpError(new HttpErrorResponse({ status: 404 }), 'Device does not exist');
        });
    }
}
