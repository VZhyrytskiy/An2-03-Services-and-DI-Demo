import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  type OnInit,
  Renderer2,
  Attribute
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') color!: string;

  constructor(
    private el: ElementRef,
    private render: Renderer2,
    @Attribute('a') private a: string
  ) {}

  ngOnInit(): void {
    // вернуть и вывести все атрибуты компонента
    console.log(this.el.nativeElement.getAttributeNames());

    // вывести внедренный атрибут хост-компонента
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
