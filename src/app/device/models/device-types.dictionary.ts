import { Dictionary, DictionaryDefinition } from '../../_shared/models/_dictionary.model';


export class DeviceType extends DictionaryDefinition {
    constructor(data?: any) {
        super(data, DeviceTypes);
    }
}

export const DeviceTypes: Dictionary<DeviceType> = {
    microphone: {
        key: 'microphone',
        label: 'Microphone',
        index: 1,
        icon: 'mic'
    },
    webcam: {
        key: 'webcam',
        label: 'Webcam',
        index: 2,
        icon: 'videocam'
    },
    headset: {
        key: 'headset',
        label: 'Headset',
        index: 3,
        icon: 'headset_mic'
    },
    speaker: {
        key: 'speaker',
        label: 'Speaker',
        index: 4,
        icon: 'speaker'
    }
};
