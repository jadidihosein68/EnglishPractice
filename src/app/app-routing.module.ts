import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PteComponent } from './pte/pte.component';
import { IeltsComponent } from './ielts/ielts.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  
  { path: 'pte', component: PteComponent },
  { path: 'ielts', component: IeltsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component : LandingComponent },
  { path: '**',  component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
