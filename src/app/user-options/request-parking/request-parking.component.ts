import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-request-parking',
  templateUrl: './request-parking.component.html',
  styleUrls: ['./request-parking.component.scss']
})
export class RequestParkingComponent implements OnInit {

  form: FormGroup;
  parkingArea: string;
  parkingSpot: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RequestParkingComponent>) { }

  ngOnInit() {
    this.form = this.fb.group({
      parkingArea: [this.parkingArea, []],
      parkingSpot: [this.parkingSpot, []]
    });
  }

  requestParking() {
    this.dialogRef.close(this.form.value);
  }

  close(): void {
    this.dialogRef.close();
  }
}
