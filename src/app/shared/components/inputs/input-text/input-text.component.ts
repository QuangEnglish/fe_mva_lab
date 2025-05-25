import {Component, ElementRef, Input, OnInit, Optional, Output, Self, ViewChild} from '@angular/core';
import {NzFormControlComponent, NzFormItemComponent} from "ng-zorro-antd/form";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {NgClass, NgIf} from "@angular/common";
import {ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule} from "@angular/forms";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {LabelVerticalComponent} from "../../labels/label-vertical/label-vertical.component";
import EventEmitter from "node:events";
import {NzSizeLDSType} from "ng-zorro-antd/core/types";
import {NoSpaceDirective} from "../../../directives/no-space.directive";
import {NoSpecialCharacterDirective} from "../../../directives/no-special-character.directive";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [
    NzFormItemComponent,
    NzFormControlComponent,
    NzInputGroupComponent,
    NgClass,
    ReactiveFormsModule,
    NzInputDirective,
    NzIconDirective,
    NgIf,
    LabelVerticalComponent,
    NoSpaceDirective,
    NoSpecialCharacterDirective
  ],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent implements ControlValueAccessor, OnInit {

  @ViewChild('inputRef', {static: false}) inputRef: ElementRef<HTMLInputElement> | undefined;
  @Input() type = 'text';
  @Input() labelContent: string | undefined;
  @Input() errorTip: string | undefined;
  @Input() disabled = false;
  @Input() required = false;
  @Input() span = 16;
  @Input() hideLabel = false;
  @Input() placeHolder = '';
  @Input() nzSizeCus : NzSizeLDSType = 'large';
  @Input() maxLength = 1024;
  @Input() hiddenClear = false;
  @Input() isNoSpace = false;
  @Input() isNumber = false;
  @Input() max = 30;
  @Input() isSpecialDisable = false;
  @Input() indexCheck = 1;
  @Output() eventFocus = new EventEmitter<any>();
  @Output() eventBlur = new EventEmitter<any>();
  @Output() onChange = new EventEmitter<any>();
  @Input() isNgModel: any;
  @Input() isUpperCase = false;
  model: any;


  //
  @Input() fieldYear = false
  @Input() isUppercase  = false;


  isFocused = false;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private translateService: TranslateService,
  ) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit() {
    if (!this.errorTip) {
      this.errorTip = 'Vui lòng nhập ' + this.labelContent;
    }
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
    if (this.inputRef) {
      this.inputRef.nativeElement.focus();
    }
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
    if (this.ngControl?.control) {
      this.ngControl.control.setValue(null);
    }
  }

  get control(): FormControl {
    return this.ngControl.control as FormControl;
  }


}
