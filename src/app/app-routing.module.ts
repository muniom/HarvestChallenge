import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './auth/auth-guard.service';
import { LoginPage } from './auth/login/login.page';
import { LoggedInComponent } from './_shared/views/logged-in.component';
import { HomePage } from './home/home.page';


const routes: Routes = [
    {
        // pathMatch: 'full',
        path: 'login',
        component: LoginPage,
    }, {
        path: '',
        component: LoggedInComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '', pathMatch: 'full',
                component: HomePage,
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            }, {
                path: 'room',
                loadChildren: () => import('./room/room.module').then(m => m.RoomModule)
            }, {
                path: 'device',
                loadChildren: () => import('./device/device.module').then(m => m.DeviceModule)
            }
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            onSameUrlNavigation: 'reload'
            // preloadingStrategy: PreloadAllModules,
            // enableTracing: true
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
