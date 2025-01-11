import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-about',
    imports: [RouterModule],
    template: `
  
  <div class="about">
    <h4>Version: 1.0.1</h4>
    <a [routerLink]="'/'">Go Back</a>
  </div>
 
 `,
    styles: `
  
  .about {
    margin: 30px;
    text-align: center;
  }
 
 `
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
