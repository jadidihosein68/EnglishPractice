import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card-minimal',
  templateUrl: './course-card-minimal.component.html',
  styleUrls: ['./course-card-minimal.component.scss']
})
export class CourseCardMinimalComponent {
  @Input() cardInfo: any;

  constructor() {
  }

  ngOnChanges() {

  }

}
