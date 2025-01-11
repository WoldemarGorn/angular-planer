import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from '../app/components/footer/footer.component';
import { TasksComponent } from './components/tasks/tasks.component'; 

@Component({
    selector: 'app-root',
    imports: [RouterModule, HeaderComponent, FooterComponent, TasksComponent],
    template: `
  
  <div class="container">
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-tasks></app-tasks>
    <app-footer></app-footer>
  </div>

  `,
    styles: ``
})
export class AppComponent { }
