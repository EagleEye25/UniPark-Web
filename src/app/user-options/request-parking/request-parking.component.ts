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
  spotsAssociated: any;
  areaObj: {[param: string]: any} = {};

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RequestParkingComponent>,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private appService: AppService
    // private uniparkPage: UniparkPageComponent
  ) { }

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
      /*
      this.requestOptions.forEach(element => {
        if (!isDefined(this.spotsAssociated[element['ParkingArea']])) {
          this.spotsAssociated[element['ParkingSpace']] = element;
        }
      });*/
      console.log('trying: ' + this.spotsAssociated);
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

  // Gets selected area
  getAreaFromSelect() {
    this.selectedArea = this.form.value.parkingArea;
    if (this.selectedArea) {
      this.disableSelect = new FormControl(false);
    }
   // this.setSpotData(this.selectedArea);
  }

  // TODO: add data to array according to parking area
  /*
  setSpotData(selectedArea: any) {
    const req = this.requestOptions;
    for (const key in req) {
      if ((req.hasOwnProperty(key)) && (req.ParkingArea === selectedArea)) {
        this.spotsAssociated.push(req[key]);
      }
    }

    for (let index = 0; index < req.length; index++) {
      if (req.ParkingArea === this.selectedArea) {
        this.spotsAssociated2.push(this.spotsAssociated[index]);
      }
    }
    console.log('TESTING: ' + this.requestOptions[0].ParkingSpace);
    this.areaObj[0] = this.requestOptions[0].ParkingSpace;
    console.log('area: ' + selectedArea);
    console.log('TESTING 22: ' + this.areaObj[0]);
    console.log(this.spotsAssociated);
  }
  */

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
