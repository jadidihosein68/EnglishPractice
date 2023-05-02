import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { PteComponent } from './pte/pte.component';
import { IeltsComponent } from './ielts/ielts.component';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { CoursesComponent } from './courses/courses.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    PteComponent,
    IeltsComponent,
    PageNotFoundComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    RegisterComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
