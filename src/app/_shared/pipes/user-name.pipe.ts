import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserModel } from 'src/app/users/models/user.model';


@Pipe({ name: 'name' })
export class UserNamePipe implements PipeTransform {
    constructor(
        private authService: AuthService
    ) {}

    transform(user: UserModel, youString: string = 'you', prop: string = 'firstName'): string {
        if (user)
            return user.userId === this.authService.user.userId ? youString : user[prop] || user.name;
        else
            console.warn('No user provided', youString);
    }
}
