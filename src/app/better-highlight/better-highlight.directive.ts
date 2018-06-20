import { Directive, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // fourth argument is optional. we can set !important in that argument
  }
  /* Host binding Example */
@HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
//bind to host property using HostBinding 
//define in string
//camelCase property name because we are accessing DOM property not CSS


@HostListener('mouseenter') mouseEnter() {
  this.backgroundColor = 'blue';
}

@HostListener('mouseleave') mouseOut() {
  this.backgroundColor = 'transparent';
}
}


/* host listener example */
// ngOnInit() {
//   // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
//   // fourth argument is optional. we can set !important in that argument
// }

// @HostListener('mouseenter') mouseEnter() { // host listener decorator is added to a method we want to execute on an event
//   // listening for mouseenter event on host
//   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
// }

// @HostListener('mouseleave') mouseOut() { // host listener decorator is added to a method we want to execute on an event
//   // listening for mouseleave event on host
//   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
// }