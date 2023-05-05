import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnglishLearnerCardComponent } from './english-learner-card/english-learner-card.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { EnglishLearnerCardHeaderComponent } from './english-learner-card-header/english-learner-card-header.component';




@NgModule({
  declarations: [    
    EnglishLearnerCardComponent, CourseCardComponent, EnglishLearnerCardHeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [    
    EnglishLearnerCardComponent, CourseCardComponent, EnglishLearnerCardHeaderComponent]
})
export class SharedModule { }
