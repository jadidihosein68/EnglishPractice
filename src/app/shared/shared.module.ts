import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { EnglishLearnerCardComponent } from './english-learner-card/english-learner-card.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    EnglishLearnerCardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    EnglishLearnerCardComponent]
})
export class SharedModule { }
