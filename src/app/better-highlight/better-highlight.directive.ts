import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // fourth argument is optional. we can set !important in that argument
  }

  @HostListener('mouseenter') mouseEnter() { // host listener decorator is added to a method we want to execute on an event
    // listening for mouseenter event on host
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseOut() { // host listener decorator is added to a method we want to execute on an event
    // listening for mouseenter event on host
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }

}
