import { Directive, ElementRef, HostListener, Input, Renderer2, Attribute, type OnInit, inject } from '@angular/core';
@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {
  // optional input
  @Input('appHighlight') color!: string;

  // dependencies
  private el: ElementRef = inject(ElementRef);
  private render: Renderer2 = inject(Renderer2);

  // additional dependency
  constructor(
    @Attribute('a') private a: string
  ) {}

  ngOnInit(): void {
    // return and print all attributes of the component
    console.log(this.el.nativeElement.getAttributeNames());

    // print the injected attribute of the host component
    console.log(`Value of injected attribute 'a': ${this.a}`);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.highlight(this.color || 'lightgreen');
  }
  
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.highlight(null);
  }
  private highlight(color: string | null): void {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
