import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-request-parking',
  templateUrl: './request-parking.component.html',
  styleUrls: ['./request-parking.component.scss']
})
export class RequestParkingComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<RequestParkingComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
