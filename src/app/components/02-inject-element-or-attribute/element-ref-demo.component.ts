import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-element-ref-demo',
  standalone: true,
  templateUrl: './element-ref-demo.component.html',
  styleUrls: ['./element-ref-demo.component.css'],
  imports: [HighlightDirective]
})
export class ElementRefDemoComponent {
  content = 'ElementRefDemo Component. Move mouse to this text.';
}
