import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { RoomModel } from '../../room/models/room.model';

import { BaseModel } from '../../_shared/models/_base.model';
import { DeviceStatus, DeviceStatuses } from './device-statuses.dictionary';
import { DeviceType } from './device-types.dictionary';

// DB
export class DeviceForApi extends BaseModel<DeviceForApi> {
    constructor(data?: DeviceModel | DeviceForApi | any, dictionary: any = {}) {
        super(data, Object.assign({
            roomId: () => data.room?.roomId,
            type: (val: DeviceType) => val?.index || val,
        }, dictionary), {
            // Defaults (a bit hacky :/)
            deviceId: undefined, 
            serialNo: undefined, 
            name: undefined,
            description: undefined, 
            type: undefined,
            url: undefined,
            // status: undefined, 
            orgId: undefined,
            roomId: undefined,
        }, true); // console.log('DeviceForApi', this);
    }

    public deviceId?: number;
    public serialNo?: number;
    public name?: string;
    public description?: string;
    public type?: number;
    public url?: string;
    // public status?: number;
    public orgId?: number;
    public roomId?: number;
}

// UI
export class DeviceModel extends BaseModel {
    constructor(data?: DeviceModel | any, dictionary: any = {}) {
        super(data, Object.assign({
            type: DeviceType,
            status: DeviceStatus,
            // room: RoomModel // BUG: Must be circular
        }, dictionary), {
            deviceId: undefined, 
            serialNo: undefined, 
            name: undefined,
            description: undefined, 
            type: undefined,
            url: undefined,
            // status: undefined, 
            room: undefined,
        }); // console.log('DeviceModel', this);

        // UI Calculated
        if (!this.status) {
            const statuses = Object.values(DeviceStatuses);
            this.status = new DeviceStatus(statuses[Math.ceil((Math.random() * (statuses.length - 1)))]);
        }

        if (dictionary.room) this.room = new dictionary.room({
            roomId: 1,
            name: 'All Devices',
            icon: 'groups',
            // devices: devices.filter(device => device.deviceId === 1)
        });
    }

    public deviceId?: number;
    public serialNo?: number;
    public name?: string;
    public description?: string;
    public type?: DeviceType;
    public url?: string;
    public status?: DeviceStatus;
    public orgId?: number;
    public room?: RoomModel;
};

// Reactive Form
export class DeviceForm extends FormGroup {
    constructor(data: DeviceModel = {
        deviceId: undefined, 
        serialNo: undefined, 
        name: undefined,
        description: undefined, 
        type: undefined,
        url: undefined,
        status: undefined, 
        room: undefined
    }) {
        super(Object.entries(data).reduce((mem, [key, val]) => {
            mem[key] = (() => {
                switch(key) {
                    case 'name':
                    case 'type':
                        return new FormControl(val, Validators.required);
                    case 'url':
                        return new FormControl(val, (control): ValidationErrors | null => {
                            if (control.value) {
                                if (control.value.match(/^https?:/))
                                    control.setValue(control.value.replace(/^https?:/, ''));
                                if (!control.value.match(/^\/\//))
                                    return { hint: 'Url must begin with //' };
                            } 
                            return null;
                        });
                    default:
                        return new FormControl(val)
                }
            })();
            return mem;
        }, {}));

       // this.addControl('room', new FormControl())
    }
}
