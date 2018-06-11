import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

import { UserInfoComponent } from '../../app/user-options/user-info/user-info.component';
import { UpdateUserInfoComponent } from '../../app/user-options/update-user-info/update-user-info.component';
import { ViewAssignedParkingComponent } from '../../app/user-options/view-assigned-parking/view-assigned-parking.component';
import { RequestParkingComponent } from '../../app/user-options/request-parking/request-parking.component';
import { HelpComponent } from '../user-options/help/help.component';

import {AppService, BASE_URL} from '../app.service';

@Component({
  selector: 'app-unipark-page',
  templateUrl: './unipark-page.component.html',
  styleUrls: ['./unipark-page.component.scss']
})
export class UniparkPageComponent implements OnInit {
  // Declaration for data of user 
  personelInfo: any;
  personelParkingInfo: any;
  updatePersonelInfo: any;
  requestParkingInfo: any;

  // Imports dialogs for use for modal
  userInfoDialogRef: MatDialogRef<UserInfoComponent>;
  UpdateUserDialog: MatDialogRef<UpdateUserInfoComponent>;
  AssignedParkingDialog: MatDialogRef<ViewAssignedParkingComponent>;
  RequestParkingDialog: MatDialogRef<RequestParkingComponent>;
  helpDialog: MatDialogRef<HelpComponent>;

  constructor(
    private router: Router,
    private dialog: MatDialog, 
    private http: HttpClient,
    private appService: AppService
  ) { } 
 
  // Implimentation for gathering data from database 
  // Currently getting data from an API 
  ngOnInit() {    
    if (!this.appService.getState("FacilityID")) {
      this.router.navigateByUrl('/');
    }

    // Gets user info api
    this.http.get(`${BASE_URL}/personnel/specified/` + this.appService.getState("FacilityID"))
    .subscribe((response: any) => this.personelInfo = response);
  }

  // Displays user-info modal
  openUserInfoDialog(): void {
    this.userInfoDialogRef = this.dialog.open(UserInfoComponent, {
      disableClose: true,
      // Sets data to appropriate variables
      data: {
        userName: this.personelInfo.PersonelName,
        userPhone: this.personelInfo.PhoneNumber,
        userEmail: this.personelInfo.Email,
        userType: this.personelInfo.Type,
        userLevel: this.personelInfo.PersonelLevel
      }
    });
  }

  // Displays update-user-info modal
  openUpdateUserInfoDialog(): void {
    this.UpdateUserDialog = this.dialog.open(UpdateUserInfoComponent, {
      disableClose: true
    });
  }

  // Displays assigned-parking modal
  openAssignedParkingDialog(): void {
    this.AssignedParkingDialog = this.dialog.open(ViewAssignedParkingComponent, {
      disableClose: true,
      // Sets data to appropriate variables
      data: {
        //parkingName: this.parkingName,
        //parkingAL: this.parkingAL,
        //parkingLocation: this.parkingLocation,
      }
    });
  }

  // Displays request-parking modal
  openRequestParkingDialog(): void {
    this.RequestParkingDialog = this.dialog.open(RequestParkingComponent, {
      disableClose: true
    });
  }

  // Displays user-info modal
  openHelpDialog(): void {
    this.helpDialog = this.dialog.open(HelpComponent, {
      disableClose: true,
    });
  }
}
