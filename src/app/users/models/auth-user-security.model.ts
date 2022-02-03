import { UserSecurityModel } from './user-security.model';


export class AuthUserSecurityModel extends UserSecurityModel {
    constructor(data?: AuthUserSecurityModel) {
        super(data); // console.log('AuthUserSecurityModel', this);
    }

    public hasPassword?: boolean;
}
