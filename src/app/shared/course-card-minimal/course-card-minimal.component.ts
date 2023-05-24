import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { FlashCardSet } from '../../model/flashcardset';
import { FlashCardSetService } from '../../services/FlashCardSetService';
import { Router } from '@angular/router';



@Component({
  selector: 'app-course-card-minimal',
  templateUrl: './course-card-minimal.component.html',
  styleUrls: ['./course-card-minimal.component.scss']
})
export class CourseCardMinimalComponent {
  @Input() cardInfo: FlashCardSet;
  @Output() onDelete: EventEmitter<string> = new EventEmitter();


  constructor(private router: Router , private flashCardSetService:FlashCardSetService) {
  }



  editCard() {
    console.log({id:this.cardInfo._id});
    this.router.navigate(['/createflashcard', this.cardInfo._id]);
  }


  deleteCard(){


    this.flashCardSetService.deleteFlashCardSet(this.cardInfo._id)  // Call the delete method from the service
    .subscribe(res => {
      console.log('Card deleted', res);
      //this.cardInfo;
      this.onDelete.emit(this.cardInfo._id);
      // You might want to refresh the card list or navigate to another page
    }, err => {
      console.log('Error deleting card', err);
      // Handle the error here
    });




  }



}
