import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-english-learner-card',
  templateUrl: './english-learner-card.component.html',
  styleUrls: ['./english-learner-card.component.scss']
})
export class EnglishLearnerCardComponent implements OnInit {
  
  
  
  @Input() term?: string;
  @Input() meaning?: string;
  @Input() pronounce?: string;
  currentObjectIndex = 0;
  currentObject: any;

  constructor() { }

  ngOnInit(): void {

    

  }


  onNext(): void {
   // this.currentObjectIndex++;
   // this.currentObject = data[this.currentObjectIndex];
  }


}
