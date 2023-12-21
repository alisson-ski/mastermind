import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MastermindModule } from './mastermind/mastermind.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MastermindModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
