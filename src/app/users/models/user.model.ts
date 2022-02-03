import { BaseModel } from '../../_shared/models/_base.model';
import { UserStatus } from './user-statuses.dictionary';
import { UserSecurityModel } from './user-security.model';


export class UserModel extends BaseModel {
    constructor(data?: UserModel, dictionary: any = {}) {
        super(data, Object.assign({
            status: UserStatus,
            security: UserSecurityModel,
        }, dictionary)); // console.log('UserModel', this);
    }

    public userId?: number;
    public name?: string;
    public firstName?: string;
    public lastName?: string;
    public email?: string;
    public pictureUrl?: string;
    public status?: UserStatus;
    public organisation?: any; // TODO
    public security?: UserSecurityModel;
}
