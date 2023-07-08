import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HoverAffectDirective } from 'src/hover-affect.directive';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ContentListComponent } from './content-list/content-list.component';
import { ContentClearPipe } from './content-clear.pipe'; // Add this line
import { FormsModule } from '@angular/forms';
import { ContentCardComponent } from './content-card/content-card.component';
import { AppMessagesComponent } from './app-messages/app-messages.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentClearPipe, // Add this line
    HoverAffectDirective, 
    AppMessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
