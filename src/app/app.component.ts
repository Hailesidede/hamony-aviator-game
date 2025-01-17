import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,GameComponent,WalletComponent,LeaderboardComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aviator-game';

  players = [
    { balance: 500.25 },
    { balance: 1200.75 },
    { balance: 300.00 },
    { balance: 900.50 },
  ];
}
