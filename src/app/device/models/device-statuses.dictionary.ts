import { Dictionary, DictionaryDefinition } from '../../_shared/models/_dictionary.model';


export class DeviceStatus extends DictionaryDefinition {
    constructor(data?: any) {
        super(data, DeviceStatuses);
    }
}

export const DeviceStatuses: Dictionary<DeviceStatus> = {
    offline: {
        key: 'offline',
        label: 'Offline',
        index: 0,
        color: 'dark'
    },
    unstable: {
        key: 'unstable',
        label: 'Unstable',
        index: 1,
        color: 'warning'
    },
    online: {
        key: 'online',
        label: 'Online',
        index: 2,
        color: 'success'
    }
};
