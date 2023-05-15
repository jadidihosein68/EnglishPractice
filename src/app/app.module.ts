import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
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
import { MaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LearnComponent } from './learn/learn.component';
import { RegisterComponent } from './register/register.component';
import { GoogleLoginComponent } from './register/google-login/google-login.component';
import { CoursesComponent } from './courses/courses.component';
import { FilterComponent } from './filter/filter.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { FlashcardFormComponent } from './flash-card-form/flash-card-form.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductPlanService } from '../app/services/product-plan.service';
import { UserService } from '../app/services/user.service';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider,FacebookLoginProvider } from '@abacritt/angularx-social-login';
import {  GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import {  LocalStorageService } from './services/localstorage.service';
import { ReactiveFormsModule } from '@angular/forms'; // import ReactiveFormsModule
import { CreateFlashCardComponent } from './flash-card-form/create-flash-card/create-flash-card.component';
import { FlashCardTableComponent } from './flash-card-form/flash-card-table/flash-card-table.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
    GoogleLoginComponent,
    CoursesComponent,
    FilterComponent,
    CourseListItemComponent,
    ProfileComponent,
    PaymentComponent,
    CheckoutComponent,
    LearnComponent,
    FlashcardFormComponent,
    CreateFlashCardComponent,
    FlashCardTableComponent,
    WorkshopComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    ReactiveFormsModule // add ReactiveFormsModule to the NgModule imports
  ],
  providers: [
    ProductPlanService,
    UserService
  ,{
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '484860199419-k6m26l1ol971kbjhg2cr3f53hteljtlt.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }, LocalStorageService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
