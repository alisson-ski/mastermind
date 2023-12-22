import { Component, OnInit } from '@angular/core';
import { Colors } from './color';
import { AttemptResult, AttemptResultAndSequence } from './attempt/attempt';

@Component({
  selector: 'app-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.scss']
})
export class MastermindComponent implements OnInit {

  secretSequence: Colors[] = [];
  gameEnded = false;

  colorBeingHeld: Colors | null = null;

  numberOfAttempts = 8;
  currentAttempt = 0;

  allColors = Object.values(Colors);

  allAttempts: AttemptResultAndSequence[] = [];

  ngOnInit(): void {
    this.generateSecretSequence();
  }

  generateSecretSequence() {
    const sequence: number[] = [];
    while (sequence.length < 4) {
      const randomNumber = Math.floor(Math.random() * 7);
      if (!sequence.includes(randomNumber)) {
        sequence.push(randomNumber);
      }
    }

    this.secretSequence = sequence.map((number) => this.allColors[number]);
  }

  onVerifySequenceClick() {
    const currentAttemptData = this.allAttempts[this.currentAttempt];

    if (currentAttemptData.sequence.includes(null)) {
      return  window.alert('Preencha toda a sequência antes de verificar');
    }

    if (currentAttemptData.result.every(result => result == AttemptResult.BLACK)) {
      this.gameEnded = true;

      return setTimeout(() => {
        window.alert('Parabéns, você acertou a sequência!');
      }, 200)
    }

    this.currentAttempt++;

    console.log(currentAttemptData);
    
  }

  restartGame() {
    location.reload();
  }

  onColorSelect(color: Colors) {
    this.colorBeingHeld = color;
  }
}
