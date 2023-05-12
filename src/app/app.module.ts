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
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { GoogleLoginComponent } from './register/google-login/google-login.component';
import { CoursesComponent } from './courses/courses.component';
import { FilterComponent } from './filter/filter.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductPlanService } from '../app/services/product-plan.service';
import { UserService } from '../app/services/user.service';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider,FacebookLoginProvider } from '@abacritt/angularx-social-login';
import {  GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import {  LocalStorageService } from './services/localstorage.service';



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
    HomeComponent
    
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
    GoogleSigninButtonModule
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
