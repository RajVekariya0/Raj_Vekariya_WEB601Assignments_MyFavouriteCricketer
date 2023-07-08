import { Component } from '@angular/core';
import { MessageService } from '../services/messages.service';


@Component({
  selector: 'app-messages',
  templateUrl: './app-messages.component.html',
  styleUrls: ['./app-messages.component.scss']
})
export class AppMessagesComponent {
  constructor(public messagesService: MessageService){}


}