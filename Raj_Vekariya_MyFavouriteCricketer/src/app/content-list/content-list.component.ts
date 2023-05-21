import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentItemsArray = [
    {
      id: 1,
      title: 'Captian',
      image: 'assets/image/virat.jpeg',
      description: 'Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team',
      creator: 'By self',
      type: 'all rounder',
      tags: ['Bating', 'Balling']
    },
    {
      id: 2,
      title: 'Stadium',
      image: 'assets/image/stadium.webp',
      description: 'It is governed by the Board of Control for Cricket in India, and is a Full Member of the International Cricket Council with Test, One Day International ',
      creator: 'BCC COUNCIL',
      type: 'Stadium',
      tags: ['Tag3', 'Tag4']
    },
    {
      id: 3,
      title: 'First ball',
      image: 'assets/image/firstball.webp',
      description: 'the name of the first delivery of any innings in a cricket match from the bowler to the batsman,',
      creator: 'Redleaf Hill in Penshurst, Kent. In 1775,',
      type: 'Hard wood',
      tags: ['Tag3', 'Tag4']
    },
    {
      id: 4,
      title: 'Stump',
      image: 'assets/image/stump.jpeg',
      description: 'the ICC wasted no time in introducing them to the international stage as well ',
      creator: 'ICC introduceL',
      type: 'expensive stumps',
      tags: ['$40,000', '$50,000']
    },
    {
      id: 5,
      title: 'M.S Dhoni',
      image: 'assets/image/dhoni.jpeg',
      description: 'Mahendra Singh Dhoni, commonly known as MS Dhoni, ',
      creator: 'Second captain',
      type: 'All rounder',
      tags: ['Wicket Kipper', 'Strategy']
    },
    {
      id: 6,
      title: 'Hardik Pandiya',
      image: 'assets/image/hardik.jpeg',
      description: 'current vice-captain of the Indian cricket team ',
      creator: 'vadodara',
      type: 'all rounder',
      tags: ['Gujju', 'rock']
    }
  ];

  showContentDetails(content: any) {
    console.log('ID:', content.id);
    console.log('Title:', content.title);
  }
}
