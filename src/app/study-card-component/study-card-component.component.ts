import { Component,OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {StudyService} from "../services/study.service"
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-study-card-component',
  templateUrl: './study-card-component.component.html',
  styleUrls: ['./study-card-component.component.scss'],


  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateX(180deg)'
      })),
      state('inactive', style({
        transform: 'rotateX(0)'
      })),
      transition('active => inactive', animate('300ms ease-out')),
      transition('inactive => active', animate('300ms ease-in'))
    ])
  ]

})
export class StudyCardComponentComponent implements OnInit {

  flashcards = [];
  flascardset : any;
  cardId: any;
  currentFlashCardIndex = 0;
  flip: string = 'inactive';
  showFrontSide: boolean = true;

  get currentFlashCard() {
    return this.flashcards[this.currentFlashCardIndex];
  }

  constructor( 
    
    private router: ActivatedRoute,
    private studyService: StudyService) 
  {}

  ngOnInit() {

    this.cardId = this.router.snapshot.paramMap.get('id');
    console.log(this.cardId);



    if (this.cardId) {
      this.studyService.getFlashCardbyID(this.cardId).subscribe(response => {
        console.log("Card Retrieved successfully", response);
        this.flascardset = response;
      }, error => {
        console.error("Failed to retrieve card", error);
      });
    } else {
      console.log("No cardId provided. Proceeding with creation.");
    }




  }


  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  goToNextCard() {
    this.currentFlashCardIndex++;
    if (this.currentFlashCardIndex >= this.flashcards.length) {
      this.currentFlashCardIndex = 0; // If you want to loop back to the start when you reach the end
    }
  }

  animationDone(event: any) {
    if (event.toState === 'active') {
      this.showFrontSide = false;
    } else {
      this.showFrontSide = true;
    }
  }

}
