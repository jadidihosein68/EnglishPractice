import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { StudyService } from "../services/study.service"
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

  flascardset: any;
  cardId: any;
  currentFlashCardIndex = 0;
  flip: string = 'inactive';
  showFrontSide: boolean = true;


  get currentFlashCard() {
    if (this.flascardset && this.flascardset.flashcards)
      return this.flascardset.flashcards[this.currentFlashCardIndex];
    return [];
  }

  constructor(

    private router: ActivatedRoute,
    private studyService: StudyService) { }

  ngOnInit() {

    this.cardId = this.router.snapshot.paramMap.get('id');
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
    if (this.currentFlashCardIndex >= this.flascardset.flashcards.length) {
      this.currentFlashCardIndex = 0; 
    }
  }

  goToPrevCard() {
    this.currentFlashCardIndex--;
    if (this.currentFlashCardIndex < 0) {
      this.currentFlashCardIndex = this.flascardset.flashcards.length - 1; 
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
