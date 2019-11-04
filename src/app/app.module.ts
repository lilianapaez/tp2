import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatRadioModule} from '@angular/material';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';
import {FormsModule}from '@angular/forms';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewsModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatRadioModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
