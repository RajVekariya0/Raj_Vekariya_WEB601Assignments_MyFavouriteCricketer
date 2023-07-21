import { Component, OnInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';



@Component({
  selector: 'app-content-card',
  templateUrl:'./content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  contentList: any = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.contentList.add ({
      id: 1,
      title: 'Captian',
      imgURL: 'assets/image/virat.jpeg',
      description: 'Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team',
      creator: 'By self',
      type: 'All rounder',
      tags: ['Bating', 'Balling']
    }); 

    this.contentList.add({
      id: 2,
      title: 'Stadium',
      imgURL: 'assets/image/stadium.webp',
      description: 'It is governed by the Board of Control for Cricket in India, and is a Full Member of the International Cricket Council with Test, One Day International ',
      creator: 'BCC COUNCIL',
      type: '',
      tags: ['Tag3', 'Tag4']
    });

    this.contentList.add({
      id: 3,
      title: 'Bowler',
      imgURL: '',
      description: 'the name of the first delivery of any innings in a cricket match from the bowler to the batsman,',
      creator: 'Redleaf Hill in Penshurst, Kent. In 1775,',
      type: '',

      tags: ['Tag3', 'Tag4']
    });

    }
    openUpdateContentDialog(contentItem: any): void {
      const dialogRef = this.dialog.open(AddContentDialogComponent, {
        data: {
          contentType: 'Content',
          contentItem: contentItem
        }
      });
  
      dialogRef.afterClosed().subscribe((result: any) => {
        if (result) {
          // Handle the content update logic here
          console.log(result); // You can check the result in the console
          // Implement the logic to update the content item on the server or wherever it's stored
          // Display a success message using the message service
        }
      });
    }
  
  }