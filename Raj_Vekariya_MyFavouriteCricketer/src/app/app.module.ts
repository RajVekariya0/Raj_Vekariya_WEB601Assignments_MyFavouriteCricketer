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
import { AddContentDialogComponent } from './add-content-dialog/add-content-dialog.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentClearPipe, // Add this line
    HoverAffectDirective, 
    AppMessagesComponent, 
    ModifyContentComponentComponent, 
    AddContentDialogComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 1000,
    }),
    BrowserAnimationsModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
