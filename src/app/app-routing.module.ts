import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PteComponent } from './pte/pte.component';
import { IeltsComponent } from './ielts/ielts.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from './profile/profile.component';

import { ProductsComponent } from './products/products.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/guard/auth.guard';


const routes: Routes = [
  
  { path: 'pte', component: PteComponent },
  { path: 'ielts', component: PageNotFoundComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'profile', component: ProfileComponent,  canActivate: [AuthGuard]  },  
  { path: 'checkout', component: CheckoutComponent },
  { path: '', component : LandingComponent },
  { path: '**',  component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
