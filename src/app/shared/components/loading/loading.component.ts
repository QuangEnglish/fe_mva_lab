import {Component, Input, OnInit} from '@angular/core';
import {NgxLoadingModule} from "ngx-loading";

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    NgxLoadingModule
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit {
  @Input() loading: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
