import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'app-header',
    imports: [CommonModule, ButtonComponent],
    template: `
  
  <header>
    <h1>{{title}}</h1>
    <app-button color="{{showAddTask ? 'red' : 'green'}}"
                text="{{showAddTask ? 'Close' : 'Add'}}"
                (btnClick)="toggleAddTask()"
                *ngIf="hasRoute('/')">
    </app-button>
  </header>

  `,
    styles: `
  
  header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

  `
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Planer';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void { }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
