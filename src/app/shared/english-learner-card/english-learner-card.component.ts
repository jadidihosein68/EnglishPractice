import { Component, Input, OnInit,Output,EventEmitter,ViewChild,ElementRef  } from '@angular/core';
import {Vocabulary} from "../../model/vocabulary.model"
import { trigger, transition, style, animate, AnimationEvent,  state } from '@angular/animations';
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


    trigger('flipAnimation', [
      state(
        'default',
        style({
          transform: 'rotateY(0)',
        })
      ),
      state(
        'flipped',
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      transition('default <=> flipped', [animate('500ms ease-out')]),
    ]),

  ],
})
export class EnglishLearnerCardComponent implements OnInit {
  
  
  
  @Input() term?: string;
  @Input() meaning?: string;
  @Input() pronounce?: string;
  @Input() vocabularyItem?: Vocabulary;
  @Output() next = new EventEmitter<void>();
  @Input() totalRecords: number = 0;
  @Input() currentObjectIndex: number = 0;

  isVisible = true;
  currentObject: any;
  isFlipped = false;
  @ViewChild('card') card: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {

    

  }

  flipCard(): void {

    this.isFlipped = !this.isFlipped;

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
        this.isFlipped = false ;
        this.next.emit();
      });
    }
  }



  speak(): void {
    if ('speechSynthesis' in window) {
      const msg = new SpeechSynthesisUtterance();
      msg.text = this.vocabularyItem?.term || '';
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
