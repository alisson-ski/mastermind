import { Component } from '@angular/core';
import { Colors } from './color';

@Component({
  selector: 'app-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.scss']
})
export class MastermindComponent {

  secretSequence: Colors[] = [Colors.RED, Colors.BLUE, Colors.GREEN, Colors.YELLOW];

  colorBeingHeld: Colors | null = null;

  numberOfAttempts = 8;
  currentAttempt = 0;

  onColorSelect(color: Colors) {
    this.colorBeingHeld = color;
  }
}
