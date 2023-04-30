import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { EnglishLearnerCardComponent } from './english-learner-card/english-learner-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    EnglishLearnerCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent,
    EnglishLearnerCardComponent]
})
export class SharedModule { }
