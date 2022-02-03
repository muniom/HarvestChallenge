import { NgModule } from '@angular/core';
import { TimeAgoPipe } from 'time-ago-pipe';
import { PluralPipe } from './plural.pipe';
import { SafePipe } from './safe.pipe';
import { UserNamePipe } from './user-name.pipe';

const PipeDeclarations = [
    TimeAgoPipe, UserNamePipe, PluralPipe, SafePipe
];


@NgModule({
    declarations: PipeDeclarations,
    exports: PipeDeclarations
})
export class PipeModule { }
