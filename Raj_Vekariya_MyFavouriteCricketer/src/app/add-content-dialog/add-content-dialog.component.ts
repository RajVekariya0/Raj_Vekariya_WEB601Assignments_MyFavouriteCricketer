import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-content-dialog',
  templateUrl: './add-content-dialog.component.html',
  styleUrls: ['./add-content-dialog.component.scss']
})
export class AddContentDialogComponent {
  newContent: any = {};

  constructor(
    public dialogRef: MatDialogRef<AddContentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { contentType: string }
  ) {}

  addContent(): void {
    this.dialogRef.close(this.newContent);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
