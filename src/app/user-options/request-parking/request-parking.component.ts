import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

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
  disableSpot: boolean;

  longitude: any;
  latitude: any;

  markerEmpty = false;

  distinctArea: any;
  drawingCo: any;
  spotsAssociated = [];

  areaSelected = false;
  spotSelected = false;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private appService: AppService
    // private uniparkPage: UniparkPageComponent
  ) { }

  // Initializes on load
  ngOnInit() {
    this.disableSpot = true;
    this.form = this.fb.group({
      parkingArea: [this.parkingArea, []],
      parkingSpot: new FormControl({ value: '', disabled: this.disableSpot}),
    });
    // Gets request data fromn backend
    this.http.get(`${BASE_URL}/parking/request/info/` + this.appService.getState('FacilityID'))
    .subscribe((response: any) => { this.requestOptions = response;
      // Gets distinct parking areas for displaying in select
      this.distinctArea = Array.from(new Set(
        this.requestOptions
        .map((area: any) => area.ParkingArea)));
    });
  }

  // opens the snackBar with error
  openSnackBarFail() {
    this.snackBar.open('Request Failed', 'OK', {
      duration: 2000,
    });
  }

  // opens the snackBar with success
  openSnackBarPass() {
    // opens the snackBar with error
    this.snackBar.open('Successfully Requested!', 'OK', {
      duration: 2000,
    });
  }

  // Closes dialog
  cancle(): void {
    this.areaSelected = false;
    this.spotSelected = false;
    this.selectedArea = null;
    this.selectedSpot = null;
    this.form.controls.parkingSpot.disable();
    this.form.controls.parkingArea.reset();
    this.form.controls.parkingSpot.reset();
  }

  // Gets selected area
  getAreaFromSelect() {
    this.selectedArea = this.form.value.parkingArea;
    if (this.selectedArea) {
      this.form.controls.parkingSpot.enable();
      this.setSpotData(this.selectedArea);
      this.areaSelected = true;
      const req = this.requestOptions;
      // Gets spots for selected area
      const coordinates = req.find(data => data.ParkingArea === this.selectedArea);
      this.drawingCo = coordinates.AreaLocation;
      if (this.drawingCo) {
        this.drawingCo = this.drawingCo.split(',');
        this.longitude = this.drawingCo[1];
        this.latitude = this.drawingCo[0];
        console.log(this.drawingCo);
      } else {
        this.markerEmpty = true;
      }
    }
  }

  // Sets spot data to be used in control
  setSpotData(selectedArea: any) {
    const req = this.requestOptions;
    this.spotsAssociated = [];
    this.parkingSpot = null;
    this.spotSelected = null;
    // Gets spots for selected area
    for (const key of req) {
      if (key.ParkingArea === selectedArea) {
        this.spotsAssociated.push(key);
      }
    }
  }

  // Gets spot from select
  getSpotFormSelect() {
    this.selectedSpot = this.form.value.parkingSpot;
    if (this.selectedSpot) {
      this.spotSelected = true;
    }
  }

  // Submits the request data to backend
  async submitRequestParking() {
    Number(this.selectedSpot);
    if (this.selectedArea === undefined || this.selectedSpot === undefined) {
      this.openSnackBarFail();
    } else {
        // sends request info to backend
        const reqResponse: any = await this.http.post(`${BASE_URL}/request-parking`,
      {PersonnelID: this.appService.getState('FacilityID'), ParkingSpaceID: this.selectedSpot})
      .toPromise()
      .catch(console.error);
      if (reqResponse && reqResponse.data.trim() === 'SUCCESS') {
        this.openSnackBarPass();
        this.cancle();
      } else {
        this.openSnackBarFail();
      }
    }
  }

  // Captures keyboard events
  @HostListener('window:keydown', ['$event'])
    enterKeyEvent(event: any) {
      switch (event.keyCode) {
        case 13:
          this.submitRequestParking();
        break;
        case 27:
          this.cancle();
        break;
      }
    }
}
