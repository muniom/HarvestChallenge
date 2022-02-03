import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../_shared/shared.module';
import { AddDevicePage } from './add-device/add-device.page';
import { EditDevicePage } from './edit-device/edit-device.page';
import { ViewDevicePage } from './view-device/view-device.page';


@NgModule({
    imports: [
        SharedModule, CommonModule,
        RouterModule.forChild([
            {
                path: 'add',
                component: AddDevicePage
            },
            {
                path: ':deviceId',
                component: ViewDevicePage
            },
            {
                path: ':deviceId/edit',
                component: EditDevicePage
            }
        ])
    ],
    declarations: [
        AddDevicePage,
        EditDevicePage,
        ViewDevicePage
    ]
})
export class DeviceModule {}
