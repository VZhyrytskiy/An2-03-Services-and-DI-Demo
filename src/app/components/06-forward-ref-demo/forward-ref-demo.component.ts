import { Component, inject, type OnInit } from '@angular/core';

import { DoorService } from '../../services';

@Component({
  selector: 'app-forward-ref-demo',
  standalone: true,
  templateUrl: './forward-ref-demo.component.html'
})
export class ForwardRefDemoComponent implements OnInit {
  content!: string;

  private door = inject(DoorService);

  ngOnInit(): void {
    this.content = this.door.lock.type;
  }

}
