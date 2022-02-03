/*** ANGULAR ***/
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
const ANGULAR_MODULES = [
    CommonModule,
    RouterModule, HttpClientModule,
    BrowserModule, BrowserAnimationsModule,
];


/*** MISC 3RD-PARTY ***/
import { IonicStorageModule } from '@ionic/storage';
import { BlockUIModule } from 'ng-block-ui';
const MISC_MODULES = [
    BlockUIModule.forRoot(),
    IonicStorageModule.forRoot(),
];


//
import './_shared/helpers/dates';
// import { environment } from '../environments/environment';

import { SharedModule } from './_shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

import { AppConfig } from './_shared/models/app-config.model';
import { HttpService } from './_shared/services/http.service';

import { AppComponent } from './app.component';
import { LoggedInComponent } from './_shared/views/logged-in.component';


@NgModule({
    declarations: [
        AppComponent,
        LoggedInComponent
    ],
    entryComponents: [],
    imports: [
        ...MISC_MODULES,
        ...ANGULAR_MODULES,
        SharedModule,
        AppRoutingModule,
        AuthModule,
        // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [
        { provide: APP_INITIALIZER, useFactory: (
            document: Document,
            appConfig: AppConfig,
            httpService: HttpService
            ) => {
            return async () => {
                await httpService.request({
                    url: 'app-config.json',
                    isExternal: true
                }).toPromise()
                .then((response: AppConfig) => {
                    Object.assign(appConfig, response);
                    // httpService.api = response.api;
                })
                .catch((error) => { console.error('AppConfig Error', error);
                    // debugger;
                });
            };
        }, deps: [ DOCUMENT, AppConfig, HttpService ], multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
