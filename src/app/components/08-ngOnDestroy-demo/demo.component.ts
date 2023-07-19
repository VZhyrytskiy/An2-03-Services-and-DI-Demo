import { Component, inject, type OnInit } from '@angular/core';
import { NgOnDestroyService } from '../../services/ng-on-destroy.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  template: '{{content}}',
  providers: [NgOnDestroyService]
})
export class DemoComponent implements OnInit {
  content = '';

  private ngOnDestroyService = inject(NgOnDestroyService);

  ngOnInit(): void {
    this.content = this.ngOnDestroyService.getData();
  }
}
