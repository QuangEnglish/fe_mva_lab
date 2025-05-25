import {Component, ElementRef, Input, OnInit, Optional, Output, Self, ViewChild} from '@angular/core';
import {NzFormControlComponent, NzFormItemComponent, NzFormLabelComponent} from "ng-zorro-antd/form";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {
  NzAutocompleteComponent,
  NzAutocompleteOptionComponent,
  NzAutocompleteTriggerDirective
} from "ng-zorro-antd/auto-complete";
import EventEmitter from "node:events";
import {ControlValueAccessor, NgControl, ReactiveFormsModule} from "@angular/forms";
import {NzSizeLDSType} from "ng-zorro-antd/core/types";
import {NgClass} from "@angular/common";
import {NoSpaceDirective} from "../../../directives/no-space.directive";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzTooltipDirective} from "ng-zorro-antd/tooltip";
import {InlineMessageComponent} from "../../inline-message/inline-message.component";

@Component({
  selector: 'app-input-text-v2',
  standalone: true,
  imports: [
    NzFormItemComponent,
    NzFormLabelComponent,
    NzFormControlComponent,
    NzInputGroupComponent,
    NzAutocompleteComponent,
    NzAutocompleteOptionComponent,
    ReactiveFormsModule,
    NzAutocompleteTriggerDirective,
    NgClass,
    NoSpaceDirective,
    NzIconDirective,
    NzInputDirective,
    NzTooltipDirective,
    InlineMessageComponent
  ],
  templateUrl: './input-text-v2.component.html',
  styleUrl: './input-text-v2.component.scss'
})
export class InputTextV2Component implements ControlValueAccessor, OnInit{
  @ViewChild('inputRef', { static: false }) inputRef!: ElementRef<HTMLInputElement>;
  @Input() nzSize: NzSizeLDSType = 'large';
  @Input() label = '';
  @Input() label2 = '';
  @Input() hiddenLabel = false;
  @Input() required = false;
  @Input() placeHolder = '';
  @Input() nzAllowClear = false;
  @Input() formController: any;
  @Input() ngClass: any;
  @Input() isNoSpecial = false;
  @Input() disabled = false;
  @Input() isUpperCase = false;
  @Input() typeInput = 'text';
  @Input() controlName = '';
  @Input() filteredOptions: string[] = [];
  @Input() options : string[] = [];
  @Input() isTooltip = true;

  @Input() itemNumberLength?:any;

  @Output() eventFocus = new EventEmitter<any>();
  @Output() eventBlur = new EventEmitter<any>();

  isFocused = false;
  inputLabel: string = '';

  //
  @Input() maxlength: string | undefined;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
  ) {
    if (this.ngControl) this.ngControl.valueAccessor = this;
    this.filteredOptions = this.options;
  }

  ngOnInit() {
  }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  focus() {
    this.inputRef.nativeElement.focus();
  }

  onFocus(event: any) {
    this.isFocused = true;
    this.eventFocus.emit(event);
  }

  onBlur(event: any) {
    this.isFocused = false;
    this.eventBlur.emit(event);
  }

  onClear() {
    if (this.formController) this.formController.setValue(null);
    else this.ngControl.control?.setValue(null);
    this.inputLabel = " ";
  }

  onChange(event: any) {
    if (this.isUpperCase && this.ngControl.control?.value) {
      this.ngControl.control.setValue(this.ngControl.control.value.toUpperCase());
    }
  }

  checkNgClassHasW100() {
    if (typeof this.ngClass === 'string') {
      return this.ngClass.includes('w-100');
    } else if (typeof this.ngClass === 'object') {
      return this.ngClass.hasOwnProperty('w-100');
    }
    return false;
  }

  onChangeValueSuggest(value: string): void {
    this.filteredOptions = this.options.filter(option => option && value && option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  protected readonly String = String;
}
