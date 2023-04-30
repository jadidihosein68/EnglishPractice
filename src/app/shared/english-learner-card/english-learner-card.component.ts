import { Component, Input, OnInit,Output,EventEmitter  } from '@angular/core';
import {Vocabulary} from "../../model/vocabulary.model"
@Component({
  selector: 'app-english-learner-card',
  templateUrl: './english-learner-card.component.html',
  styleUrls: ['./english-learner-card.component.scss']
})
export class EnglishLearnerCardComponent implements OnInit {
  
  
  
  @Input() term?: string;
  @Input() meaning?: string;
  @Input() pronounce?: string;
  @Input() vocabularyItem?: Vocabulary;

  currentObjectIndex = 0;
  currentObject: any;

  constructor() { }

  ngOnInit(): void {

    

  }

  @Output() next = new EventEmitter<void>();

  nextCard(): void {
    this.next.emit();
  }
  


}
