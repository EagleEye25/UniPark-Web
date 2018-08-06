import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService, BASE_URL } from '../../app.service';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-view-assigned-parking',
  templateUrl: './view-assigned-parking.component.html',
  styleUrls: ['./view-assigned-parking.component.scss']
})
export class ViewAssignedParkingComponent implements OnInit {

  ParkingName: any;
  ParkingAccessLevel: any;
  Location: any;

  constructor(
    private http: HttpClient,
    private appService: AppService) { }

  ngOnInit() {
    // Gets user parking info from backend
    /* Polling
        Computer Science
        Polling, or polled operation, in computer science, refers to actively sampling the status of an
        external device by a client program as a synchronous activity. Polling is most often used in
        terms of input/output, and is also referred to as polled or software-driven.
    */
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
    pollData();
  }
}
