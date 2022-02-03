import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../_shared/shared.module';
import { AuthGuardService } from '../auth/auth-guard.service';

const UserDeclarations = [
];


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
        ])
    ],
    declarations: [
        UserDeclarations
    ],
    exports: [
        // UserDeclarations
    ]
})
export class UserModule { }
