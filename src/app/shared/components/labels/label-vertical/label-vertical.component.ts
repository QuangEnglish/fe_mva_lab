import {Component, Input, OnInit} from '@angular/core';
import {NzFormLabelComponent} from "ng-zorro-antd/form";

@Component({
  selector: 'app-label-vertical',
  standalone: true,
  imports: [
    NzFormLabelComponent
  ],
  templateUrl: './label-vertical.component.html',
  styleUrl: './label-vertical.component.scss'
})
export class LabelVerticalComponent implements OnInit {
  @Input() required = false;
  @Input() noColon = true;
  @Input() content: string | undefined;
  @Input() for: string | undefined;

  constructor() { }

  ngOnInit() {
  }
}
