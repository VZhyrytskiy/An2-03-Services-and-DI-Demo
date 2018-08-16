import { Component, OnInit } from '@angular/core';
import { NgOnDestroyService } from '../../services/ng-on-destroy.service';

@Component({
  selector: 'app-demo',
  template: '{{content}}',
  providers: [NgOnDestroyService]
})
export class DemoComponent implements OnInit {
  content: string;
  constructor(private ngOnDestroyService: NgOnDestroyService) {}

  ngOnInit() {
    this.content = this.ngOnDestroyService.getData();
  }
}
