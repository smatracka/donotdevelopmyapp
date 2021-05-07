import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SummaryComponent } from './components/summary/summary.component';
import { SummaryThumbnailComponent } from './components/summary-thumbnail/summary-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SummaryComponent,
    SummaryThumbnailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
