import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  imports:[FormsModule,CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  playerId: string = '';
  opponentId: string = '';
  truths: string[] = ['', ''];
  lie: string = '';
  opponentData: any = null;
  resultMessage: string = '';
  hasSubmitted: boolean = false;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    const storedId = localStorage.getItem('playerId');
    this.playerId = this.generateRandomId();        
    if (!storedId) {
      localStorage.setItem('playerId', this.playerId);
    }
  }
  

  submitTruthsAndLie() {
    const payload = {
      playerId: this.playerId,
      truth1: this.truths[0],
      truth2: this.truths[1],
      lie: this.lie
    };
    this.gameService.submitStatements(payload).subscribe(() => {
      this.hasSubmitted = true;
      alert(`Submitted! Share your ID with a friend: ${this.playerId}`);
    });
  }

  generateRandomId(): string {
    return 'xxxxxx'.replace(/[x]/g, () => {
      const r = Math.random() * 16 | 0;
      return r.toString(16);
    });
  }
  playAgain() {
    // Reset game state to start over
    this.hasSubmitted = false;
    this.opponentData = null;
    this.truths = ['', ''];
    this.lie = '';
    this.resultMessage = '';
    this.opponentId = '';
  }

  loadOpponentData(id: string) {
    this.gameService.getOpponentData(id).subscribe(data => {
      this.opponentData = {
        id,
        allStatements: this.shuffle([...data.truths, data.lie]),
        correctLie: data.lie
      };
    });
  }

  guessLie(statement: string) {
    if (this.opponentData) {
      const isCorrect = statement === this.opponentData.correctLie;
      this.resultMessage = isCorrect ? '🎉 Correct! That was the lie.' : '❌ Nope! That was a truth.';
    }
  }

  shuffle(arr: string[]): string[] {
    return arr.sort(() => Math.random() - 0.5);
  }
  generatePlayerId(): string {
    return 'player-' + Math.random().toString(36).substring(2, 10);
  }
}
