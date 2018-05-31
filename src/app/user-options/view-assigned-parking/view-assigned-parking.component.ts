import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-view-assigned-parking',
  templateUrl: './view-assigned-parking.component.html',
  styleUrls: ['./view-assigned-parking.component.scss']
})
export class ViewAssignedParkingComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ViewAssignedParkingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  // Closes the dialog
  closeDialog(): void {
    this.dialogRef.close();
  }

  // Captures keyboard events
  @HostListener('window:keydown', ['$event'])
    enterKeyEvent(event: any) {
      switch (event.keyCode) {
        case 13:
          this.closeDialog();
        break;
        case 27:
          this.closeDialog();
        break;
      }
    }
}
