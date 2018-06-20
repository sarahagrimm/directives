import { Directive, ElementRef } from "@angular/core";

@Directive({ 
    selector: '[basicHighlight]' //camelCase always
 })

export class BasicHighlightDirective {
    constructor(private elementRef: ElementRef) {} // to access the element this directive sits on

    // doesn't have other lifecycle hooks because there is no template associated with a directive
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

    ngOnDestroy() {

    }
}