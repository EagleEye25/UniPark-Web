import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { mapboxgl } from 'mapbox-gl';

import {AppService, BASE_URL} from '../../app.service';

@Component({
  selector: 'app-request-parking',
  templateUrl: './request-parking.component.html',
  styleUrls: ['./request-parking.component.scss']
})
export class RequestParkingComponent implements OnInit {

  requestOptions: any;
  form: FormGroup;
  parkingArea: any;
  parkingSpot: string;
  selectedArea: string;
  selectedSpot: any;
  disableSelect = new FormControl(true);

  distinctArea: any;
  areaObj: {[param: string]: any} = {};

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RequestParkingComponent>,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private appService: AppService
    // private uniparkPage: UniparkPageComponent
  ) { }

  // Mock data for dialog, implimentations for database
  areasU = [
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

  areas: any;

  ngOnInit() {
    this.form = this.fb.group({
      parkingArea: [this.parkingArea, []],
      parkingSpot: [this.parkingSpot, []]
    });
    this.http.get(`${BASE_URL}/parking/request/info/` + this.appService.getState('FacilityID'))
    .subscribe((response: any) => { this.requestOptions = response;
      // Gets distinct parking areas for displaying in select
      this.distinctArea = Array.from(new Set(this.requestOptions
        .map(area => area.ParkingArea)
      ));

      this.areaObj.Area = <ParkingRequest>(this.requestOptions);
      // this.distinctArea = <ParkingRequest>(this.distinctArea);
      /*
      for (let k = 0; k < this.distinctArea.length; k++) {
        this.objTest.Area = this.distinctArea[k];
      }*/

      /*
        for (let k = 0; k < this.requestOptions.length; k++) {
      }
      */
     /*for (let k = 0; k < this.distinctArea.length; k++) {
      const createObject = {
        id: k.toString(),
        name: this.distinctArea[k]
      };
      this.areas.push(createObject);
     }*/
      console.log('working? ' + this.areas);
      console.log(this.areaObj);
      console.log('distinct: ' + this.distinctArea);
      console.log(this.requestOptions);
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

  getAreaFromSelect(index: number) {
    // this.selectedArea = this.form.value.parkingArea;
    console.log('selected: ' + this.parkingArea.ParkingArea);
    console.log('test: ' + index);
    this.disableSelect = new FormControl(false);
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

export interface ParkingRequest {
  ParkingArea: string;
  ParkingSpace: number;
}
export interface Test {
  value: string;
  viewValue: string;
}
