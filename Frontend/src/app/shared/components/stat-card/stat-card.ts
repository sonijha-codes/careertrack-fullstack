import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss',
})
export class StatCard {
  readonly label = input('');
  readonly value = input('—');
  readonly icon = input('');
  readonly accent = input('#eef0ff');
}
