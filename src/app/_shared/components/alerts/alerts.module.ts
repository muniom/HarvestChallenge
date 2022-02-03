/*** ANGULAR ***/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
const ANGULAR_MODULES = [
    CommonModule
];

/*** MATERIAL-DESIGN ***/
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
const MATERIAL_MODULES = [
    MatProgressSpinnerModule
];

//
import { AlertsComponent } from './alerts.component';

@NgModule({
    imports: [
        ...ANGULAR_MODULES,
        ...MATERIAL_MODULES
    ],
    declarations: [
        AlertsComponent
    ],
    exports: [
        AlertsComponent
    ]
})
export class AlertsModule {}
