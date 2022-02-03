import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../_shared/shared.module';
import { ViewRoomPage } from './view-room/view-room.page';


@NgModule({
    imports: [
        SharedModule, CommonModule,
        RouterModule.forChild([
            {
                path: ':roomId',
                component: ViewRoomPage
            }
        ])
    ],
    declarations: [ViewRoomPage]
})
export class RoomModule {}
