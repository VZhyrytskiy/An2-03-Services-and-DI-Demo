import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-on-destroy',
  template: `
    <button (click)="toggle()">Click and see console</button>
    <br>
    <app-demo *ngIf="show"></app-demo>
  `
})
export class NgOnDestroyComponent {
  show = true;

  toggle() {
    this.show = !this.show;
  }
}
