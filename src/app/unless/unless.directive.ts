import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {
 @Input() set unless(condition: boolean) {
  // implements setter to turn a property into a method
  // it is still a poperty but just a setter of that property.

  if(!condition){
    // display something here
    this.vcRef.createEmbeddedView(this.templateRef); // create a new view in the view container. Display templateRef content in this new view
  } else {
    // display nothing here
    this.vcRef.clear(); // clear everything from this container
  }
 };
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { } //templateRef = what, vcRef = where

}
