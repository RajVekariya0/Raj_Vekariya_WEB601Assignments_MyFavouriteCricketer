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
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { MessageService } from './services/messages.service';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentClearPipe, // Add this line
    HoverAffectDirective, 
    AppMessagesComponent, 
    ModifyContentComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 1000,
    }),
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
