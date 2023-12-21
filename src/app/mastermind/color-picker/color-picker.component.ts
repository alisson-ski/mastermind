import { Component, EventEmitter, Output } from '@angular/core';
import { Colors } from '../color';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {

  colors = Object.values(Colors);
  selectedColor: Colors | null = Colors.BLUE;

  @Output() colorSelect = new EventEmitter<string>();

  onColorClick(color: string) {
    this.selectedColor = color as Colors;
    this.colorSelect.emit(color);
  }
}
