import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImp]'
})
export class ImpDirective {

  constructor(private _elementRef:ElementRef) { 

    _elementRef.nativeElement.style.color='red',
    _elementRef.nativeElement.style.backgroundColor='green'
  }

}
