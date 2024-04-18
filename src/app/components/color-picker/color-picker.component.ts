import { Component, EventEmitter, Output } from '@angular/core';
import { Colors } from '../../models/color';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {

  colors = Object.values(Colors);
  selectedColor: Colors | null = null;

  @Output() colorSelect = new EventEmitter<Colors>();

  onColorClick(color: string) {
    this.selectedColor = color as Colors;
    this.colorSelect.emit(color as Colors);
  }
}
