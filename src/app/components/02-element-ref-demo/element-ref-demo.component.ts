import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-ref-demo',
  templateUrl: './element-ref-demo.component.html',
  styleUrls: ['./element-ref-demo.component.css']
})
export class ElementRefDemoComponent implements OnInit {
  content = 'ElementRefDemo Component. Move mouse to this text.';

  constructor() { }

  ngOnInit() {
  }

}
