import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
  imports:[CommonModule]
})


export class GameComponent implements OnInit{
  ngOnInit(): void {
    
  }

  multiplier: number = 1.0;
  betPlaced: boolean = false;
  result: string | null = null;
  private gameInterval: any;

  constructor() {
   
  }

  startGame() {
    this.resetGame();
    this.gameInterval = setInterval(() => {
        this.multiplier += 0.1;
        if (this.multiplier > this.getCrashPoint() || this.multiplier > 100) { // Add a maximum multiplier limit
            this.endGame(false); 
        }
    }, 1000);
}

  placeBet() {
    this.betPlaced = true;
    this.result = null;
  }

  cashOut() {
    if (this.betPlaced) {
      this.result = `You cashed out at ${this.multiplier.toFixed(2)}x!`;
      this.endGame(true);
    }
  }

  resetGame() {
    this.multiplier = 1.0;
    this.betPlaced = false;
    this.result = null;
    clearInterval(this.gameInterval);
  }

  endGame(win: boolean) {
    clearInterval(this.gameInterval);
    if (!win && this.betPlaced) {
      this.result = `You lost! The multiplier crashed at ${this.multiplier.toFixed(2)}x.`;
    }
    setTimeout(() => this.startGame(), 3000);
  }

  getCrashPoint(): number {
    try {
        return Math.random() * (10 - 1) + 1; 
    } catch (error) {
        console.error("Error generating crash point:", error);
        return 1; // Default to a safe value
    }
}

}
