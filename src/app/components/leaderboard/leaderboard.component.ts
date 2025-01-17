import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard1',
  imports: [CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  players = [
    { name: 'Alice', score: 500 },
    { name: 'Bob', score: 350 },
    { name: 'Charlie', score: 200 }
  ];

}
