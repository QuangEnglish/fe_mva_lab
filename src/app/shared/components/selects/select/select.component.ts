import {AfterViewChecked, ChangeDetectorRef, Component, Input, OnInit, Optional, Output, Self} from '@angular/core';
import {ControlValueAccessor, NgControl, ReactiveFormsModule} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {TEXT_NO_RESULTS} from "../../../utils/constant";
import {NzFormControlComponent, NzFormItemComponent} from "ng-zorro-antd/form";
import {LabelVerticalComponent} from "../../labels/label-vertical/label-vertical.component";
import {LabelHorizontalComponent} from "../../labels/label-horizontal/label-horizontal.component";
import {NzOptionComponent, NzSelectComponent, NzSelectModeType, NzSelectSizeType} from "ng-zorro-antd/select";
import {NzColDirective} from "ng-zorro-antd/grid";
import {NzTooltipDirective} from "ng-zorro-antd/tooltip";
import {NzIconDirective} from "ng-zorro-antd/icon";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    NzFormItemComponent,
    LabelVerticalComponent,
    LabelHorizontalComponent,
    NzFormControlComponent,
    NzSelectComponent,
    NzColDirective,
    NzTooltipDirective,
    ReactiveFormsModule,
    NzOptionComponent,
    NzIconDirective
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent implements ControlValueAccessor, OnInit, AfterViewChecked{

  @Input() labelContent!: string;
  @Input() getObjectValue = false;
  @Input() errorTip!: string;
  @Input() placeHolder!: string;
  @Input() disabled = false;
  @Input() required = false;
  @Input() data!: any[];
  @Input() valueField = 'id';
  @Input() labelField = 'name';
  @Input() customLabelField = '';
  @Input() openSearchModal = true;
  @Input() name = 'select';
  @Input() span = 16;
  @Input() labelHorizontal = true;
  @Input() hideLabel = false;
  @Input() nzMode: NzSelectModeType = 'default';
  @Input() nzSize: NzSelectSizeType = 'large';
  @Input() isCreateReport = false;
  @Input() statusError!: string;
  @Input() isOpenCreateModal = false;
  @Input() staticLabelField = true;
  @Input() isVisibilityLabel = false;
  @Input() isCustomLabel = false;
  @Input() isShowClear: any = true;
  @Input() isShowError = true;
  @Input() valueFieldId = true;
  @Input() lstTextDisable: any[] = [];
  @Input() isLabelOption = false;
  @Input() isShow = false;
  @Input() isShowTag = false;
  @Input() isCentered = false;
  @Input() isTooltip = true;
  @Input() isToolTipUser = false;

  @Output() clickSearch = new EventEmitter();
  @Output() clickOpenSearch = new EventEmitter();
  @Output() clickClear = new EventEmitter();
  @Output() selectChange = new EventEmitter<any>();

  spanLabel = 24 - this.span;
  value: any;
  selectedLabel: string = '';
  notFoundContent = TEXT_NO_RESULTS;
  @Input() maxSelectDisplay: any = 2;
  @Input() isSearch: any = true;

  private emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private translateService: TranslateService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    if (!this.errorTip && this.isShowError) {
      this.errorTip = 'Vui lòng nhập ' + this.labelContent;
    }
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  handleSearch(value: any) {
    this.clickSearch.emit(value);
  }

  handleOpenSearch() {
    this.clickOpenSearch.emit();
  }

  handleSelectChange(event: any, value: any, isShowTag: boolean, isToolTipUser?: boolean) {
    if (this.value == null) {
      this.clickClear.emit()
    }else{
      if (isShowTag && !this.emailPattern.test(this.value.at(-1))) {
        this.value.pop();
        return;
      }
    }

    if (Array.isArray(this.data) && this.data.length > 0) {
      if (this.getObjectValue) {
        const result = Array.isArray(this.value) ?
          this.value.map(x => this.data.find(y => y[this.valueField] === x)) :
          this.data.find(x => x[this.valueField] === this.value);
        this.selectChange.emit(result);
      } else {
        this.selectChange.emit(this.value);
      }
    }
    if(isToolTipUser){
      this.selectedLabel = value;
    }else{
      if(value === -1){
        this.selectedLabel = "--Tất cả--";
      }else {
        this.selectedLabel = value === "" ? "--Tất cả--" : this.getLabelForValue(value);
      }
    }
  }

  getLabelForValue(value: any): string {
    if(!value || value.length === 0){
      return " ";
    }
    if(Array.isArray(value)){
      const selectedItems = this.data ? this.data.filter(item => value.includes(item[this.valueField])) : [];
      return selectedItems.length > 0 ? selectedItems.map(item => item[this.labelField]).join(', ') : '';
    }else{
      const selectedItem = this.data ? this.data.find(item => item[this.valueField] === value) : null;
      return selectedItem ? selectedItem[this.labelField] : '';
    }
  }
  isStringInList(list: any, str: any) {
    if(str === null || str === '') return false;
    if(list.length === 0) return false;
    return list.includes(str);
  }

}
