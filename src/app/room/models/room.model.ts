import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeviceForApi, DeviceModel } from '../../device/models/device.model';

import { BaseModel } from '../../_shared/models/_base.model';

// DB
export class RoomForApi extends BaseModel<RoomForApi> {
    constructor(data?: RoomModel, dictionary: any = {}) {
        super(data, Object.assign({
        }, dictionary), {
            // Defaults (a bit hacky :/)
            roomId: undefined, 
            name: undefined,
            description: undefined, 
            icon: undefined, 
            devices: undefined, 
        }, true); // console.log('RoomForApi', this);
    }

    public roomId?: number;
    public name?: string;
    public description?: string;
    public icon?: string;
    public devices?: DeviceForApi[];
}

// UI
export class RoomModel extends BaseModel {
    constructor(data?: RoomModel | any, dictionary: any = {}) {
        super(data, Object.assign({
            status: [DeviceModel]
        }, dictionary), {
            roomId: undefined, 
            name: undefined,
            description: undefined, 
            icon: undefined, 
            devices: undefined, 
        }); // console.log('RoomModel', this);

        // UI Calculated
    }

    public roomId?: number;
    public name?: string;
    public description?: string;
    public icon?: string;
    public devices?: DeviceModel[];
};

// Reactive Form
export class RoomForm extends FormGroup {
    constructor(data: RoomModel = {
        roomId: undefined, 
        name: undefined,
        description: undefined, 
        icon: undefined, 
        devices: undefined, 
    }) {
        super(Object.entries(data).reduce((mem, [key, val]) => {
            mem[key] = (() => {
                switch(key) {
                    case 'name':
                        return new FormControl(val, Validators.required);
                    default:
                        return new FormControl(val)
                }
            })();
            return mem;
        }, {}));
    }
}
