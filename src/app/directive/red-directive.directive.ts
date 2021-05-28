import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedDirective]'
})
export class RedDirectiveDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b'
   }

}
