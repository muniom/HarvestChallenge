import { UserModel } from './user.model';
import { AuthUserSecurityModel } from './auth-user-security.model';


export class AuthUserModel extends UserModel {
    constructor(data?: AuthUserModel) {
        super(data); // console.log('AuthUserModel', this);
    }

    public security?: AuthUserSecurityModel;
}
