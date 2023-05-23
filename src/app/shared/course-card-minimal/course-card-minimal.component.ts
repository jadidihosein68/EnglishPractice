import { Component, Input } from '@angular/core';
import { FlashCardSet } from '../../model/flashcardset';
import { Router } from '@angular/router';



@Component({
  selector: 'app-course-card-minimal',
  templateUrl: './course-card-minimal.component.html',
  styleUrls: ['./course-card-minimal.component.scss']
})
export class CourseCardMinimalComponent {
  @Input() cardInfo: FlashCardSet;

  constructor(private router: Router) {
  }



  editCard() {

    console.log({id:this.cardInfo._id});
    this.router.navigate(['/createflashcard', this.cardInfo._id]);
  }


}
