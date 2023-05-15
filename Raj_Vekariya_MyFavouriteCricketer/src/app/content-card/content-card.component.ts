import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {

contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();

const content1 = {
  id: 1,
      title: 'My Favourite Cricketer MS. DHONI',
      description: 'He is captain of chennai super kings',
      creator: 'By Self',
      imgURL: 'assets/image/dhoni.jpeg',
      type: 'Game',
      tags: ['#number 7', 'Dhoni']
};

const content2 = {
  id: 2,
      title: 'This is My Second Favourite Cricketer',
      description: 'He is A Captain of Royal Challengers Bangalore',
      creator: 'Virat Kohli',
      imgURL: 'assets/image/virat.jpeg',
      type: 'Cricketer',
      tags: ['King', 'Kohli']
};

const content3 = {
  id: 3,
      title: 'Here is My Third Favourite Cricketer',
      description: 'He is A Captain of Gujarat Titans',
      creator: 'Hardik Pandiya',
      imgURL: 'assets/image/hardik.jpeg',
      type: 'Cricketer',
      tags: ['Heart', 'Gujarat']

};

this.contentList.addContent(content1);
this.contentList.addContent(content2);
this.contentList.addContent(content3);

    
  }
}
