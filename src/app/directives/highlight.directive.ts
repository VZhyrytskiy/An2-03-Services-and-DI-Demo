import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('appHighlight') color: string;

  constructor(private el: ElementRef, private render: Renderer2) {}

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
