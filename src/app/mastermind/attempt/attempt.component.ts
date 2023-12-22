import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Colors } from '../color';
import { AttemptResult, AttemptResultAndSequence } from './attempt';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.scss']
})
export class AttemptComponent implements OnInit {

  @Input() colorBeingHeld: Colors | null = null;
  @Input() isCurrentAttempt: boolean = false;
  @Input() isPreviousAttempt: boolean = false;
  @Input() secretSequence: Colors[] = [];
  @Input() gameEnded = false;

  @Output() onAttemptChanged = new EventEmitter<AttemptResultAndSequence>();

  attemptResults: AttemptResult[] = [AttemptResult.NONE, AttemptResult.NONE, AttemptResult.NONE, AttemptResult.NONE];

  colors: Array<Colors | null> = [null, null, null, null];
  displayedColors = [...this.colors];

  ngOnInit(): void {
    this.emitChanges();
  }

  onMouseEnterColor(index: number) {
    if (!this.isCurrentAttempt) return;
    if (this.colorBeingHeld == null) return;

    this.displayedColors[index] = this.colorBeingHeld;
  }

  onMouseLeaveColor(index: number) {
    if (!this.isCurrentAttempt) return;
    if (this.colorBeingHeld == null) return;

    this.displayedColors[index] = this.colors[index];
  }

  onColorClick(index: number) {
    if (this.gameEnded) return;
    if (!this.isCurrentAttempt) return;
    if (this.colorBeingHeld == null) return;
    
    if (this.colors.includes(this.colorBeingHeld)) {
      return window.alert('Você não pode repetir cores na sequência');
    }

    this.colors[index] = this.colorBeingHeld;
    this.displayedColors = [...this.colors];
    this.calculateAttemptResults();

    this.emitChanges();
  }

  calculateAttemptResults() {
    const sequence: number[] = [];
    while (sequence.length < 4) {
      const randomNumber = Math.floor(Math.random() * 4);
      if (!sequence.includes(randomNumber)) {
        sequence.push(randomNumber);
      }
    }

    sequence.forEach((number, index) => {
      const color = this.colors[number];

      if (color == null) {
        this.attemptResults[index] = AttemptResult.NONE;
        return;
      }

      if (color === this.secretSequence[number]) {
        this.attemptResults[index] = AttemptResult.BLACK;
        return;
      }

      if (this.secretSequence.includes(color)) {
        this.attemptResults[index] = AttemptResult.WHITE;
        return;
      }

      this.attemptResults[index] = AttemptResult.NONE;
    });
  }

  emitChanges() {
    this.onAttemptChanged.emit({
      result: this.attemptResults,
      sequence: this.colors
    });
  }  
}
