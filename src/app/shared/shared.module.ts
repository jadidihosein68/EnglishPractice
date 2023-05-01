import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnglishLearnerCardComponent } from './english-learner-card/english-learner-card.component';




@NgModule({
  declarations: [    
    EnglishLearnerCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [    
    EnglishLearnerCardComponent]
})
export class SharedModule { }
