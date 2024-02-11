import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-button',
  imports: [CommonModule],
  template: `
  
  <button [ngStyle]="{'background-color': color}" class="btn" (click)="onClick()">
    {{text}}
  </button>
  
  `,
  styles: ``
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void { }

  onClick() {
    this.btnClick.emit();
  }
}
