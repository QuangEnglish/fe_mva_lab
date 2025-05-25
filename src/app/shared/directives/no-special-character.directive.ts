import {Directive, ElementRef, HostListener, Input,} from '@angular/core';
import {NgControl} from "@angular/forms";

@Directive({
  standalone: true,
  selector: '[no-special-character]'
})
export class NoSpecialCharacterDirective {

  @Input('no-special-character') isSpecial: boolean | undefined;
  constructor(private _el: ElementRef,private ngControl: NgControl) { }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    if(this.isSpecial && this.isSpecial){
      const initialValue = this._el.nativeElement.value;
      this._el.nativeElement.value = initialValue.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .replace(/[^a-zA-Z0-9_]+$/, '');
    }
  }
}
