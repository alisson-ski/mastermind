import { Component, Input } from '@angular/core';
import { Colors } from '../color';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.scss']
})
export class AttemptComponent {

  @Input() colorBeingHeld: Colors | null = null;
  @Input() isCurrentAttempt: boolean = false;
  colors: Array<Colors | null> = [null, null, null, null];
}
