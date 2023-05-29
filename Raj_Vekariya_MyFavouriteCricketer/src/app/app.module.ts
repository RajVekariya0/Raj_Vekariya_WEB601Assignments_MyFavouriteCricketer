import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ContentListComponent } from './content-list/content-list.component';
import { ContentClearPipe } from './content-clear.pipe'; // Add this line
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentClearPipe // Add this line
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
