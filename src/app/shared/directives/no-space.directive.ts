import {booleanAttribute, Directive, Input,} from '@angular/core';

@Directive({
  selector: '[no-space]',
  standalone: true,
  host: {
    '(keydown)': 'onKeyUp($event)'
  }
})
export class NoSpaceDirective {
  @Input({transform: booleanAttribute, alias: "no-space"}) noSpace: boolean | undefined;

  onKeyUp($event: { keyCode: number; preventDefault: () => void; }) {
    if (this.noSpace && this.noSpace && $event.keyCode === 32) {
      $event.preventDefault();
    }
  }
}
