import { NgModule } from '@angular/core';

import {MatCardModule, } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider'
import { MatSelectModule } from '@angular/material/select'
import { MatTabsModule } from '@angular/material/tabs'
import { MatIconModule } from "@angular/material/icon"
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatChipsModule} from '@angular/material/chips'
import { MatToolbarModule } from "@angular/material/toolbar"
import {MatStepperModule} from '@angular/material/stepper'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDialogModule } from '@angular/material/dialog'
import { MatTooltipModule} from '@angular/material/tooltip'
import { MatExpansionModule } from "@angular/material/expansion"

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatDividerModule,
  MatToolbarModule,
  MatSelectModule,
  MatDialogModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatIconModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatExpansionModule
];

@NgModule({
  imports: modules,
  exports: modules,
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,  useValue: {floatLabel: 'always'}}
  ],
})

export class Material {}
