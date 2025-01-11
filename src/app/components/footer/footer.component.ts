import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
    selector: 'app-footer',
    imports: [RouterModule],
    template: `
  
  <footer>
    <p>Copyright &copy; {{currentYear}}</p>
    <a routerLink="/about">About</a>
  </footer>
  
  `,
    styles: `
  
  footer {
    margin-top: 30px;
    text-align: center;
  }
  
  `
})
export class FooterComponent {

  currentYear: number = new Date().getFullYear();

}
