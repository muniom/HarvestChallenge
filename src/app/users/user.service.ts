import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { HttpService } from '../_shared/services/http.service';
import { UserModel } from './models/user.model';
import { UserCriteriaModel } from './models/user-criteria.model';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(
        private httpService: HttpService
    ) {}

    async getUser(userId: number, force?: boolean) {
        return this.httpService.get<UserModel>('/api/user/' + userId, force).toPromise();
    }

    async getUsers(criteria: UserCriteriaModel) {
        return this.httpService.get<UserModel[]>({
            url: '/api/user/list',
            query: criteria
        })
        .pipe(map(response => { // console.log('gotUsers', response);
            return response.map(val => new UserModel(val));
        }));
    }
}
