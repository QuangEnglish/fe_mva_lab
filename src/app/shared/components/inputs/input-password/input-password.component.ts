import {Component, Input, OnInit, Optional, Self} from '@angular/core';
import {NzFormControlComponent, NzFormItemComponent} from "ng-zorro-antd/form";
import {LabelVerticalComponent} from "../../labels/label-vertical/label-vertical.component";
import {LabelHorizontalComponent} from "../../labels/label-horizontal/label-horizontal.component";
import {NgIf} from "@angular/common";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {ReactiveFormsModule, ControlValueAccessor, NgControl, FormControl} from "@angular/forms";
import {NzColDirective} from "ng-zorro-antd/grid";

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [
    NzFormItemComponent,
    LabelVerticalComponent,
    LabelHorizontalComponent,
    NgIf,
    NzFormControlComponent,
    NzInputGroupComponent,
    NzInputDirective,
    ReactiveFormsModule,
    NzColDirective
  ],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.scss'
})
export class InputPasswordComponent implements ControlValueAccessor, OnInit{
  @Input() type = 'password';
  @Input() labelContent: any;
  @Input() errorTip: any;
  @Input() disabled = false;
  @Input() required = false;
  @Input() span = 16;
  @Input() labelHorizontal = true;
  @Input() hideLabel = false;
  @Input() placeHolder = '';
  @Input() isInputGroup = false;
  @Input() errorTipRequired = '';
  @Input() errorTipNotMatch = '';

  passwordVisible = false;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
  ) {
    this.ngControl.valueAccessor = this;
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

  get control(): FormControl {
    return this.ngControl.control as FormControl;
  }

  protected readonly String = String;
}
