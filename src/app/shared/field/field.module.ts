import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field.component';
import { ErrorDirective } from './error.directive';
import { LabelDirective } from './label.directive';



@NgModule({
  declarations: [
    FieldComponent,
    ErrorDirective,
    LabelDirective
  ],
  exports:[
    FieldComponent,
    ErrorDirective,
    LabelDirective
  ]
})
export class FieldModule { }
