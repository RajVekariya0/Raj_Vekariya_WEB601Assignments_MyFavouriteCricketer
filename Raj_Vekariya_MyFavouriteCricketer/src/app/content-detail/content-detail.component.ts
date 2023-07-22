import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CricketService } from '../services/cricket.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  contentId: number;
  singleContentItem: any;
  requestedContentId: number;

  constructor(private route: ActivatedRoute, private cricketService: CricketService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.contentId = +params['id']; // Get the content ID from the URL
      this.cricketService.getContentItemById(this.contentId).subscribe((data) => {
        this.singleContentItem = data;
      });
    });
  }
  
}
