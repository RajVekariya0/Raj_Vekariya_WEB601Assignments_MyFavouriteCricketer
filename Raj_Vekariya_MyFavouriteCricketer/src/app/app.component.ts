import { Component, OnInit } from '@angular/core';
import { CricketService } from './services/cricket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Raj_Vekariya_MyFavouriteCricketer';

  singleContentItem:any;
  requestedContentId: any;
  constructor(private cricketService:CricketService){

  }
  ngOnInit(): void {
    const idNumber = 3;
    this.cricketService.getContentItemById(idNumber).subscribe((data)=>{
        this.singleContentItem = data;
        console.log('singleContentItem', this.singleContentItem);
    });
  }

  getRequestedContent() {
    console.log('this.requestedContentId',this.requestedContentId);
    this.cricketService.getContentItemById(this.requestedContentId).subscribe(item => {
      console.log('item',item);
      this.singleContentItem = item;
      console.log('singleContentItem click',this.singleContentItem);
    });
  }

  
}
