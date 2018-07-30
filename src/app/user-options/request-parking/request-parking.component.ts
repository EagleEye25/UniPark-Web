import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

import {AppService, BASE_URL} from '../../app.service';
import { DomSanitizer } from '@angular/platform-browser';


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
  mapLink = 'https://www.google.com/';
  mapLinkSafe: any;

  distinctArea: any;
  spotsAssociated = [];

  areaSelected = false;
  spotSelected = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RequestParkingComponent>,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private appService: AppService,
    private sanitizer: DomSanitizer
    // private uniparkPage: UniparkPageComponent
  ) { }

  ngOnInit() {
    this.disableSpot = true;
    this.form = this.fb.group({
      parkingArea: [this.parkingArea, []],
      parkingSpot: new FormControl({ value: '', disabled: this.disableSpot}),
    });
    this.http.get(`${BASE_URL}/parking/request/info/` + this.appService.getState('FacilityID'))
    .subscribe((response: any) => { this.requestOptions = response;
      // Gets distinct parking areas for displaying in select
      this.distinctArea = Array.from(new Set(this.requestOptions
        .map(area => area.ParkingArea)
      ));
    });

    this.mapLinkSafe = `${this.sanitizer.bypassSecurityTrustUrl(this.mapLink)}`;
  }

  openSnackBarFail() {
    // opens the snackBar with error
    this.snackBar.open('Request Failed', 'OK', {
      duration: 2000,
    });
  }

  openSnackBarPass() {
    // opens the snackBar with error
    this.snackBar.open('Successfully Requested!', 'OK', {
      duration: 2000,
    });
  }

  // Closes dialog
  closeDialog(): void {
    this.dialogRef.close();
  }

  // Gets selected area
  getAreaFromSelect() {
    this.selectedArea = this.form.value.parkingArea;
    if (this.selectedArea) {
      this.form.controls.parkingSpot.enable();
    }
    this.setSpotData(this.selectedArea);
    this.areaSelected = true;
  }

  setSpotData(selectedArea: any) {
    const req = this.requestOptions;
    this.spotsAssociated = [];
    this.parkingSpot = null;
    // gets spots for selected area
    for (const key of req) {
      if (key.ParkingArea === selectedArea) {
        this.spotsAssociated.push(key);
      }
    }
  }

  // gets spot f
  getSpotFormSelect() {
    this.selectedSpot = this.form.value.parkingSpot;
    this.spotSelected = true;
  }

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
          this.closeDialog();
        break;
      }
    }
}
