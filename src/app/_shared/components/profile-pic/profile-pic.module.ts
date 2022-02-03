import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProfilePicComponent } from './profile-pic.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ProfilePicComponent
    ],
    exports: [
        ProfilePicComponent
    ]
})
export class ProfilePicModule {}
