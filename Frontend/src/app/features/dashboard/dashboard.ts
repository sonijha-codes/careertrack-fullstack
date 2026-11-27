import { Component } from '@angular/core';
import { StatCard } from '../../shared/components/stat-card/stat-card';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { ContentCard } from '../../shared/components/content-card/content-card';

@Component({
  imports: [StatCard, PageHeader, ContentCard],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  readonly metrics = [
    {
      label: 'Total applications',
      icon: 'TA',
      background: '#eeefff',
    },
    { label: 'Applied', icon: 'AP', background: '#eaf3ff' },
    { label: 'Interview', icon: 'IN', background: '#fff3d6' },
    { label: 'Offered', icon: 'OF', background: '#daf7e5' },
    { label: 'Rejected', icon: 'RJ', background: '#fdeaea' },
  ];
}
