import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTreeModule} from '@angular/material/tree';
@NgModule({
  imports: [ 
    MatButtonModule, 
    MatIconModule, 
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatProgressBarModule,
    MatSelectModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    MatTreeModule,

  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatProgressBarModule,
    MatSelectModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    MatTreeModule,
  ]    
})

export class MaterialModule {}