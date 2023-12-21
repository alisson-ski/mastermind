import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastermindComponent } from './mastermind.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { AttemptComponent } from './attempt/attempt.component';



@NgModule({
  declarations: [
    MastermindComponent,
    ColorPickerComponent,
    AttemptComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MastermindComponent
  ]
})
export class MastermindModule { }
