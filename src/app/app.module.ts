import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { DataComponent } from './data/data.component';
import { DataCardComponent } from './data/data-card/data-card.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { HeaderComponent } from './header/header.component'
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule, } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider'
import { MatSelectModule } from '@angular/material/select'
import { MatTabsModule } from '@angular/material/tabs'
import { MatIconModule } from "@angular/material/icon"
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import {  MatSidenavModule } from '@angular/material/sidenav'
import {MatChipsModule} from '@angular/material/chips'
import { MatToolbarModule } from "@angular/material/toolbar"
import {MatStepperModule} from '@angular/material/stepper'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDialogModule } from '@angular/material/dialog'
import { MatTooltipModule} from '@angular/material/tooltip'
import { MatMenuModule } from '@angular/material/menu'
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { CustomLoaderComponent } from './custom-loader/custom-loader.component';
@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    DataCardComponent,
    HeaderComponent,
    FooterComponent,
    CustomLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSidenavModule,
    MatListModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
