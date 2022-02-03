import { NgModule } from '@angular/core';

import { ValidationDirective } from './validation.directive';

@NgModule({
  declarations: [
    ValidationDirective
  ],
  exports: [
    ValidationDirective
  ]
})
export class DirectivesModule {}
