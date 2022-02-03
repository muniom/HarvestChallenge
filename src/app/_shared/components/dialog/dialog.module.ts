import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
const ANGULAR_MODULES = [
    CommonModule, FlexLayoutModule
];

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
const MATERIAL_MODULES = [
    MatDialogModule,
    MatButtonModule
];

import { AlertsModule } from '../alerts/alerts.module';
import { ConfirmDialogComponent } from './confirmation-dialog.component';


@NgModule({
    imports: [
        ...ANGULAR_MODULES,
        ...MATERIAL_MODULES,
        AlertsModule
    ],
    declarations: [
        ConfirmDialogComponent
    ],
    exports: [
        ConfirmDialogComponent
    ]
})
export class DialogModule {}
