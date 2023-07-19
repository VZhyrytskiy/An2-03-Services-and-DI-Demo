import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { DemoComponent } from './demo.component';

@Component({
  selector: 'app-ng-on-destroy',
  standalone: true,
  template: `
    <button (click)="toggle()">Click and see console</button>
    <br>
    <app-demo *ngIf="show"></app-demo>
  `,
  imports: [NgIf, DemoComponent]
})
export class NgOnDestroyComponent {
  show = true;

  toggle(): void {
    this.show = !this.show;
  }
}
