import {Component, OnInit} from '@angular/core';
import {CourseCardComponent} from "../../../courses/components/course-card/course-card.component";
import {LoadingComponent} from "../../../../shared/components/loading/loading.component";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CourseCardComponent,
    LoadingComponent,
    NzRowDirective,
    NzColDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  loading = false;

  ngOnInit(): void {
    this.loading = true;

  }


}
