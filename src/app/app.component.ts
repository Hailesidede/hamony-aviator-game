import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,GameComponent,WalletComponent,LeaderboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aviator-game';
}
