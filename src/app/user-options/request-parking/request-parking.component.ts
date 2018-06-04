import { Component, OnInit, HostListener } from '@angular/core';
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

  // Mock data for dialog, implimentations for database
  areas = [
    {value: 'area01', viewValue: 'North'},
    {value: 'area02', viewValue: 'South'},
    {value: 'area03', viewValue: 'West'}
  ];
  // Mock data for dialog, implimentations for database
  spots = [
    {value: 'spots01', viewValue: 'A001'},
    {value: 'spots02', viewValue: 'A002'},
    {value: 'spots03', viewValue: 'A003'}
  ];

  ngOnInit() {
    this.form = this.fb.group({
      parkingArea: [this.parkingArea, []],
      parkingSpot: [this.parkingSpot, []]
    });
  }

  // Aquires the parking data from dialog
  aquireParkingDetails() {
    this.parkingArea = this.form.value.parkingArea;
    this.parkingSpot = this.form.value.parkingSpot;
    this.requestParking();
  }

  // Submits data
  requestParking() {
    this.dialogRef.close(this.form.value);
  }

  // Closes dialog
  closeDialog(): void {
    this.dialogRef.close();
  }

  // Captures keyboard events
  @HostListener('window:keydown', ['$event'])
    enterKeyEvent(event: any) {
      switch (event.keyCode) {
        case 13:
          this.requestParking();
        break;
        case 27:
          this.closeDialog();
        break;
      }
    }
}
