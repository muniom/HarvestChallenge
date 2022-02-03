import { Dictionary, DictionaryDefinition } from '../../_shared/models/_dictionary.model';


export class UserStatus extends DictionaryDefinition {
    constructor(data?: string) {
        super(data, UserStatuses);
    }
}

export const UserStatuses: Dictionary<UserStatus> = {
    offline: {
        key: 'offline',
        label: 'Offline',
        index: 0,
        color: 'danger'
        // icon: 'fa-icon'
    },
    away: {
        key: 'away',
        label: 'Away',
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
