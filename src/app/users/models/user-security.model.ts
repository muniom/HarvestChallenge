import { BaseModel } from '../../_shared/models/_base.model';
import { UserStatus } from './user-statuses.dictionary';


export class UserSecurityModel extends BaseModel {
    constructor(data?: UserSecurityModel) {
        super(data); // console.log('UserSecurityModel', this);
    }

    public isFollowing?: boolean;
    public isFollowed?: boolean;
    public isFriend?: boolean;
    public canFollow?: boolean;
    public canEdit?: boolean;
}
