import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') color: string;

  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    // возвращает все атрибуты компонента
    console.log(this.el.nativeElement.getAttributeNames());
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.color || 'lightgreen');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
