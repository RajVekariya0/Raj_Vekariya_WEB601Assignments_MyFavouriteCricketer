import { Component, EventEmitter, Output } from '@angular/core';
import { MessageService } from '../services/messages.service';
import { CricketService } from '../services/cricket.service';
import { Content } from '../helper-files/ content-interface';
import { InMemoryDataService } from '../services/in-memory-data.service';
import { MatDialog } from '@angular/material/dialog';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';


@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent {

  newContent: Content = { id: null, title: '', description: '', creator: '', type: '' };
  buttonText = 'Add Content';
  @Output() contentAdded: EventEmitter<Content> = new EventEmitter<Content>();

  constructor(private cricketService: CricketService, private messageService: MessageService, private dialog: MatDialog) { }

  openAddContentDialog(): void {
    const dialogRef = this.dialog.open(AddContentDialogComponent, {
      data: {
        contentType: 'Content' // Provide the appropriate content type here
      }
    });
    

    dialogRef.afterClosed().subscribe((result: Content) => {
      if (result) {
        if (!result.id) {
          this.addContent(result);
        } else {
          this.updateContent(result);
        }
      }
    });
  }

  addContent(content: Content): void {
    this.cricketService.addContent(content).subscribe((addedContent) => {
      this.contentAdded.emit(addedContent);
      this.clearInputs();
      this.messageService.addMessage('Content added successfully.');
    });
  }

  updateContent(content: Content): void {
    this.cricketService.updateContent(content).subscribe(() => {
      this.contentAdded.emit(content);
      this.clearInputs();
      this.messageService.addMessage('Content updated successfully.');
      this.buttonText = 'Add Content';
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

  clearInputs(): void {
    this.newContent = { id: null, title: '', description: '', creator: '', type: '' };
  }
}