import {Component, Input, OnInit} from '@angular/core';
import {NzFormLabelComponent} from "ng-zorro-antd/form";
import {NzColDirective} from "ng-zorro-antd/grid";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-label-horizontal',
  standalone: true,
  imports: [
    NzFormLabelComponent,
    NzColDirective,
    NgClass
  ],
  templateUrl: './label-horizontal.component.html',
  styleUrl: './label-horizontal.component.scss'
})
export class LabelHorizontalComponent implements OnInit{
  @Input() required = false;
  @Input() noColon = false;
  @Input() for: string | undefined;
  @Input() span: number = "8";
  @Input() classLabel: string | undefined;
  @Input() content: string = '';
  @Input() isFilterList = false;
  @Input() isVisibilityLabel = false;

  constructor() { }

  ngOnInit() {
  }
}
