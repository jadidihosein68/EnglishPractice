import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnglishLearnerCardComponent } from './english-learner-card/english-learner-card.component';
import { CourseCardComponent } from './course-card/course-card.component';




@NgModule({
  declarations: [    
    EnglishLearnerCardComponent, CourseCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [    
    EnglishLearnerCardComponent, CourseCardComponent]
})
export class SharedModule { }
