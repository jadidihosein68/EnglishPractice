import { Component , OnInit, Input  } from '@angular/core';
import{FlashCardSetService} from "../services/FlashCardSetService"


@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent {

  @Input() course: any;


constructor( private flashCardSetService: FlashCardSetService  ) {


}
  onSubscribe (){
this.flashCardSetService.subscribeToFlashCard(this.course._id).subscribe(
  data => {
    //this.cardinfo = data;
    console.log("204 !");
  },
  error => {
    console.error('Error:', error);
  });
  }


  onunSubscribe (){
    this.flashCardSetService.unsubscribeToFlashCard(this.course._id).subscribe(
      data => {
        //this.cardinfo = data;
        console.log("204 !");
      },
      error => {
        console.error('Error:', error);
      });
      }


}
