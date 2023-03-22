import { Component, type OnInit } from '@angular/core';
import { NgOnDestroyService } from '../../services/ng-on-destroy.service';

@Component({
  selector: 'app-demo',
  template: '{{content}}',
  providers: [NgOnDestroyService]
})
export class DemoComponent implements OnInit {
  content = '';
  constructor(private ngOnDestroyService: NgOnDestroyService) {}

  ngOnInit(): void {
    this.content = this.ngOnDestroyService.getData();
  }
}
