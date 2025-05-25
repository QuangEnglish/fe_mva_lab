import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {Course} from "../../models/course.model";
import {CourseService} from "../../services/course.service";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    NgIf,
    TranslatePipe,
    NgOptimizedImage
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent implements OnInit {

  course?: Course;

  constructor(
    private courseService: CourseService,
  ) {
  }

  ngOnInit(): void {
    this.fetchDataAllCourseCard().then();
  }

  async fetchDataAllCourseCard() {
    this.courseService.getAllCourseCard().subscribe({
      next: (data) => {
        this.course = data;
      },
      error: (err) => {
      }
    });

    this.course = {
      id: '',
      imageUrl: './assets/logo/logo-off.png',
      title: 'Khóa PC Control',
      lessons: 'Học PC Control',
      description: '',
      thumbnail: '',
      price: 100,
      categoryId: '',
      instructorId: '',
      author: '',
      rating: 5,
      totalEnrollments: 100
    } as Course;
  }

}
