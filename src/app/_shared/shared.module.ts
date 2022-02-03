/*** ANGULAR ***/
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const ANGULAR_MODULES = [
    FormsModule, ReactiveFormsModule,
    FlexLayoutModule
];

/*** MATERIAL-DESIGN ***/
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
const MATERIAL_MODULES = [
    MatProgressBarModule, MatProgressSpinnerModule, MatIconModule, MatTooltipModule,
    MatButtonModule, MatTabsModule, MatExpansionModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule, MatSliderModule, MatSlideToggleModule, MatDatepickerModule,
    MatCardModule, MatListModule, MatStepperModule, MatSnackBarModule
];

//
import './helpers/dates';
import { AlertsModule } from '../_shared/components/alerts/alerts.module';
import { DirectivesModule } from '../_shared/directives/directives.module';
import { ProfilePicModule } from './components/profile-pic/profile-pic.module';
import { DialogModule } from './components/dialog/dialog.module';
import { PipeModule } from './pipes/pipe.module';


@NgModule({
    exports: [
        ...ANGULAR_MODULES,
        ...MATERIAL_MODULES,

        AlertsModule,
        DirectivesModule,
        DialogModule,
        PipeModule,
        ProfilePicModule,
    ]
})
export class SharedModule { }
