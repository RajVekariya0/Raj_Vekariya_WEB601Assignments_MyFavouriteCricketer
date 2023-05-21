import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component'; // Add this line

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent // Add this line
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
