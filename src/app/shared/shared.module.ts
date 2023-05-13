import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnglishLearnerCardComponent } from './english-learner-card/english-learner-card.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { EnglishLearnerCardHeaderComponent } from './english-learner-card-header/english-learner-card-header.component';
import { CourseCardMinimalComponent } from './course-card-minimal/course-card-minimal.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [    
    EnglishLearnerCardComponent, CourseCardComponent, EnglishLearnerCardHeaderComponent,CourseCardMinimalComponent
  ],
  imports: [
    CommonModule , MaterialModule
  ],
  exports: [    
    EnglishLearnerCardComponent, CourseCardComponent, EnglishLearnerCardHeaderComponent,CourseCardMinimalComponent]
})
export class SharedModule { }
