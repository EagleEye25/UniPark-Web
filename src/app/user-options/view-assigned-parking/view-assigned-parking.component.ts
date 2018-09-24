import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService, BASE_URL } from '../../app.service';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-view-assigned-parking',
  templateUrl: './view-assigned-parking.component.html',
  styleUrls: ['./view-assigned-parking.component.scss']
})
export class ViewAssignedParkingComponent implements OnInit {

  ParkingName: any;
  ParkingAccessLevel: any;
  Location: any;
  requestOptions: any;
  drawingCo: any;
  longitude: any;
  latitude: any;
  markerEmpty: any;
  valid: boolean;
  resp: boolean;

  constructor(
    private http: HttpClient,
    private appService: AppService) { }

  ngOnInit() {
    this.resp = true;
    // Gets user parking info from backend
    /* Polling
        Computer Science
        Polling, or polled operation, in computer science, refers to actively sampling the status of an
        external device by a client program as a synchronous activity. Polling is most often used in
        terms of input/output, and is also referred to as polled or software-driven.
    */
   /*
    const pollData = () => {
      const facilityID = this.appService.getState('FacilityID');
      if (facilityID) {
        this.http.get(`${BASE_URL}/parking/assigned/` + facilityID)
          .subscribe((response: any) => {
            this.ParkingName = response.ParkingName;
            this.ParkingAccessLevel = response.ParkingAccessLevel;
            this.Location = response.Location;
          });
      } else {
        setTimeout(pollData, 1000);
      }
    };
    pollData();*/
    this.http.get(`${BASE_URL}/parking/assigned/` + this.appService.getState('FacilityID'))
      .subscribe((response: any) => {
        if (response) {
          this.resp = false;
          this.valid = true;
          this.ParkingName = response.ParkingName;
          this.ParkingAccessLevel = response.ParkingAccessLevel;
          this.Location = response.Location;
          this.http.get(`${BASE_URL}/parking/request/info/` + this.appService.getState('FacilityID'))
          .subscribe((resp: any) => { this.requestOptions = resp;
            const req = this.requestOptions;
            // Gets spots for selected area
            const coordinates = req.find(data => data.ParkingArea === this.ParkingName);
            this.drawingCo = coordinates.AreaLocation;
            if (this.drawingCo) {
              this.drawingCo = this.drawingCo.split(',');
              this.longitude = this.drawingCo[1];
              this.latitude = this.drawingCo[0];
              console.log(this.drawingCo);
              console.log(this.longitude);
              console.log(this.latitude);
            } else {
              this.markerEmpty = true;
            }
          });
        } else {
          this.valid = false;
        }
      });
  }
}
