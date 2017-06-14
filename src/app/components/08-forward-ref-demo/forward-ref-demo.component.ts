import { Component, OnInit } from '@angular/core';

import { DoorService } from './../../services';

@Component({
  selector: 'app-forward-ref-demo',
  templateUrl: './forward-ref-demo.component.html',
  styleUrls: ['./forward-ref-demo.component.css']
})
export class ForwardRefDemoComponent implements OnInit {
  content: string;

  constructor(
    private door: DoorService
  ) { }

  ngOnInit() {
    this.content = this.door.lock.type;
  }

}
