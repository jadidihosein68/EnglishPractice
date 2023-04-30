import { Component, Input, OnInit,Output,EventEmitter,ViewChild,ElementRef  } from '@angular/core';
import {Vocabulary} from "../../model/vocabulary.model"
import { trigger, transition, style, animate, AnimationEvent } from '@angular/animations';
@Component({
  selector: 'app-english-learner-card',
  templateUrl: './english-learner-card.component.html',
  styleUrls: ['./english-learner-card.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class EnglishLearnerCardComponent implements OnInit {
  
  
  
  @Input() term?: string;
  @Input() meaning?: string;
  @Input() pronounce?: string;
  @Input() vocabularyItem?: Vocabulary;
  @Output() next = new EventEmitter<void>();

  isVisible = true;
  currentObjectIndex = 0;
  currentObject: any;
  @ViewChild('card') card: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {

    

  }


  nextCard(): void {
    if (this.card) {
      this.isVisible = false;
      this.card.nativeElement.animate(
        [
          { transform: 'translateY(0)' },
          { transform: 'translateY(-50px)' },
          { transform: 'translateY(0)' }
        ],
        {
          duration: 500,
          easing: 'ease-out'
        }
      ).addEventListener('finish', () => {
        this.isVisible = true;
        this.next.emit();
      });
    }
  }



  speak(): void {
    if ('speechSynthesis' in window) {
      const msg = new SpeechSynthesisUtterance();
      msg.text = this.vocabularyItem?.pronounce || '';
      window.speechSynthesis.speak(msg);
    }
  }


  onAnimationStart(event: AnimationEvent): void {
    console.log(`Animation started: ${event.toState}`);
  }

  onAnimationDone(event: AnimationEvent): void {
    console.log(`Animation finished: ${event.toState}`);
  }


}
