import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-inline-message',
  standalone: true,
  imports: [],
  templateUrl: './inline-message.component.html',
  styleUrl: './inline-message.component.scss'
})
export class InlineMessageComponent implements OnInit {

  @Input() formController: any;
  @Input() field?: any;
  @Input() field2?: any;
  @Input() type?: any;
  @Input() message?:any;
  @Input() message2?:any;
  @Input() itemNumberLength?:any;

  constructor() {
  }

  ngOnInit() {
    if (this.message !== null && this.message !== '' && this.message !== undefined){
      this.field = this.message
    }
    if (this.message2 !== null && this.message2 !== '' && this.message2 !== undefined){
      this.field2 = this.message2
    }
    if (this.field !== null && this.field !== '' && this.field !== undefined){
      this.message = this.field
    }
    if (this.field2 !== null && this.field2 !== '' && this.field2 !== undefined){
      this.message2 = this.field2
    }
  }

}
