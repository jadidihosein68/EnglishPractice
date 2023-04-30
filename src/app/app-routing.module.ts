import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PteComponent } from './pte/pte.component';
import { IeltsComponent } from './ielts/ielts.component';


const routes: Routes = [
  { path: 'pte', component: PteComponent },
  { path: 'ielts', component: IeltsComponent },
  { path: '', redirectTo: '/pte', pathMatch: 'full' }
  //,{ path: '**',  component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
