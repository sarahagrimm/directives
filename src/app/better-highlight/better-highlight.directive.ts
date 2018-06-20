import { Directive, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[betterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  // ngOnInit() {
  //   // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  //   // fourth argument is optional. we can set !important in that argument
  // }

  /* Binding to directive property example */
  @Input() defaultColor: string = 'transparent'; // parent to child is input, child to parent is output
  @Input('betterHighlight') highlightColor: string = 'blue';

@HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

 ngOnInit() {
   this.backgroundColor = this.defaultColor;
 }


@HostListener('mouseenter') mouseEnter() {
  this.backgroundColor = this.highlightColor;
}

@HostListener('mouseleave') mouseOut() {
  this.backgroundColor = this.defaultColor;
}
/* End Binding to directive property example */
}

  /* Host binding Example */
// @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
// //bind to host property using HostBinding 
// //define in string
// //camelCase property name because we are accessing DOM property not CSS


// @HostListener('mouseenter') mouseEnter() {
//   this.backgroundColor = 'blue';
// }

// @HostListener('mouseleave') mouseOut() {
//   this.backgroundColor = 'transparent';
// }

/* end HostBinding example */ 

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