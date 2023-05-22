import { Component, Input } from '@angular/core';
import { FlashCardSet } from '../../model/flashcardset';


@Component({
  selector: 'app-course-card-minimal',
  templateUrl: './course-card-minimal.component.html',
  styleUrls: ['./course-card-minimal.component.scss']
})
export class CourseCardMinimalComponent {
  @Input() cardInfo: FlashCardSet;

  constructor() {
  }

  ngOnChanges() {

  }

}
