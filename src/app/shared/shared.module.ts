import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnglishLearnerCardComponent } from './english-learner-card/english-learner-card.component';
import { CourseCardComponent } from './course-card/course-card.component';

import { CourseCardMinimalComponent } from './course-card-minimal/course-card-minimal.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [    
    EnglishLearnerCardComponent, CourseCardComponent, CourseCardMinimalComponent
  ],
  imports: [
    CommonModule , MaterialModule
  ],
  exports: [    
    EnglishLearnerCardComponent, CourseCardComponent, CourseCardMinimalComponent]
})
export class SharedModule { }
