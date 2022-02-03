import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { DateTime } from 'luxon';

import { HttpService } from '../_shared/services/http.service';
import { UserModel } from '../users/models/user.model';
import { HttpError } from '../_shared/models/http-error';
import { AuthUserModel } from '../users/models/auth-user.model';
import { UserStatuses } from '../users/models/user-statuses.dictionary';
import { RoomModel } from '../room/models/room.model';


@Injectable({
    providedIn: 'root'
})
export class AuthService { // extends BaseHubService {
    constructor(
        @Inject(DOCUMENT) private document: Document,
        private router: Router,
        private storageService: Storage,
        private httpService: HttpService
    ) { // super(document);
        console.log('AuthService', this.document.location);
        // this.facebookCode = this.document.location.search;
    }

    public user: AuthUserModel;
    public room: RoomModel;
    public redirectUrl: string;

    public async login(provider: string, body: string | {
        email: string,
        password: string,
        rememberMe: boolean
    }): Promise<boolean> {
        const exampleResponse = new HttpResponse({
            status: 200,
            headers: new HttpHeaders({
                Authorization: 'exampleAuthToken',
                ExpiresIn: (60 * 2).toString() // DateTime.now().plus({ days: 2 }).toJSON()
            }),
            body: {
                user: new UserModel({
                    userId: 1,
                    firstName: 'Test',
                    lastName: 'User',
                    email: 'test@email.com',
                    status: UserStatuses.online,
                    organisation: {
                        organisationId: 1,
                        name: 'TestOrg'
                    },
                }),
                // room: new RoomModel({
                //     roomId: 1,
                //     name: 'AU-370',
                //     users: []
                // })
            }
        });
        let authResponse;
        switch (provider) {
            case 'credentials':
                authResponse = await this.httpService.post({
                    url: '/api/auth/login',
                    body: {
                        provider: provider,
                        code: btoa(JSON.stringify(body))
                    },
                    observe: 'response'
                }).toPromise().catch((error: HttpErrorResponse) => {
                    if (typeof body === 'object') {
                        if (body.email === 'test@email.com'
                            && body.password === 'test')
                            return exampleResponse;
                    }
                    throw new HttpError(error, 'There was an issue logging in');
                }) as HttpResponse<AuthUserModel>;
                break;
            case 'token': // Auto-Login from stored token
                authResponse = exampleResponse; /* await this.httpService.get({
                    url: '/api/auth/currentUser',
                    headers: new HttpHeaders({ Authorization: 'Bearer ' + body }),
                    observe: 'response'
                }).toPromise().catch((error: HttpErrorResponse) => {
                    return exampleResponse;
                    if (error.status === 401) this.storageService.remove('Authorization');
                    throw new HttpError(error, 'Could not validate Token');
                }) as HttpResponse<AuthUserModel>; */
                break;
        }

        return await this.completeLogin(authResponse);
    }

    public async signUp(signUpForm: any) {
        const pass = btoa(signUpForm.pass);
        delete signUpForm.pass;
        const authResponse = await this.httpService.post({
            url: '/api/auth/signUp',
            body: {
                user: signUpForm,
                pass: pass
            },
            observe: 'response'
        }).toPromise().catch((error: HttpErrorResponse) => {
            throw new HttpError(error, error.message || 'There was an issue signing up');
        });
        return await this.completeLogin(authResponse);
    }

    private async completeLogin(authResponse) {
        if (!authResponse) return false;

        // Token
        this.storeToken({
            token: authResponse.headers.get('Authorization'),
            expiresIn: +authResponse.headers.get('ExpiresIn')
        });

        this.user = new AuthUserModel(authResponse.body.user); console.log(this.user);
        this.room = new RoomModel(authResponse.body.room); console.log(this.room);

        return !!this.user;
    }

    private storeToken(jwt) {
        if (!jwt.token) return; console.log('Token expires in', jwt.expiresIn / 60, 'minutes');
        this.storageService.set('Authorization', jwt.token);
        this.httpService.headers = this.httpService.headers.set('Authorization', 'Bearer ' + jwt.token);
    }

    public async signOut() {
        delete this.user;
        this.storageService.remove('Authorization');
        this.router.navigate(['/login']);
    }
}
