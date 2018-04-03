import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiRequestsService } from './api-requests.service';
import { DatePickerModule} from 'angular-io-datepicker'
import {MatAutocompleteModule} from '@angular/material';
import { WebCamComponent } from 'ack-angular-webcam';
import { HttpModule } from '@angular/http';


3

@NgModule({
  declarations: [
    AppComponent,
    WebCamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DatePickerModule,
    MatAutocompleteModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    ApiRequestsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
