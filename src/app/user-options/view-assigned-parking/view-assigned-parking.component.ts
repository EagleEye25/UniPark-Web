import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-view-assigned-parking',
  templateUrl: './view-assigned-parking.component.html',
  styleUrls: ['./view-assigned-parking.component.scss']
})
export class ViewAssignedParkingComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ViewAssignedParkingComponent>) { }

  ngOnInit() {
  }

  // Closes the dialog
  close(): void {
    this.dialogRef.close();
  }
}
