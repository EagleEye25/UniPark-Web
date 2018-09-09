import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

import { UserInfoComponent } from '../../app/user-options/user-info/user-info.component';
import { UpdateUserInfoComponent } from '../../app/user-options/update-user-info/update-user-info.component';
import { ViewAssignedParkingComponent } from '../../app/user-options/view-assigned-parking/view-assigned-parking.component';
import { RequestParkingComponent } from '../../app/user-options/request-parking/request-parking.component';
import { InfringementsComponent } from '../user-options/infringements/infringements.component';
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
  requestParkingInfo: any;

  // Imports dialogs for use for modal
  userInfoDialogRef: MatDialogRef<UserInfoComponent>;
  UpdateUserDialog: MatDialogRef<UpdateUserInfoComponent>;
  AssignedParkingDialog: MatDialogRef<ViewAssignedParkingComponent>;
  RequestParkingDialog: MatDialogRef<RequestParkingComponent>;
  InfringementsDialog: MatDialogRef<InfringementsComponent>;
  helpDialog: MatDialogRef<HelpComponent>;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private http: HttpClient,
    private appService: AppService
  ) { }

  // Initializes on load
  ngOnInit() {
    // Checks if user is "logged in"
    if (!this.appService.getState('FacilityID')) {
      this.router.navigateByUrl('/');
    }
  }

  logoutUser() {
    this.appService.setState('FacilityID', null);
  }
  /*
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
  */

  /*
  // Displays update-user-info modal
  openUpdateUserInfoDialog(): void {
    this.UpdateUserDialog = this.dialog.open(UpdateUserInfoComponent, {
      disableClose: true,
      // Sets data to appropriate variables
      data: {
        userPhone: this.personelInfo.PhoneNumber,
        userEmail: this.personelInfo.Email
      }
    });
  }
  */
 /*
  // Displays assigned-parking modal
  openAssignedParkingDialog(): void {
    this.AssignedParkingDialog = this.dialog.open(ViewAssignedParkingComponent, {
      disableClose: true,
      // Sets data to appropriate variables
      data: {
        parkingName: this.personelParkingInfo.ParkingName,
        parkingAL: this.personelParkingInfo.ParkingAccessLevel,
        parkingLocation: this.personelParkingInfo.Location
      }
    });
  }
  */
 /*
  // Displays request-parking modal
  openRequestParkingDialog(): void {
    this.RequestParkingDialog = this.dialog.open(RequestParkingComponent, {
      disableClose: true
    });
  }
*/
  // Displays user-info modal
  openHelpDialog(): void {
    this.helpDialog = this.dialog.open(HelpComponent, {
      disableClose: true,
    });
  }
  /*
  // Displays infringements modal
  openInfringements(): void {
    this.InfringementsDialog = this.dialog.open(InfringementsComponent, {
      disableClose: true,
      // Sets data to appropriate variables
      data: {
        reportDate: this.personelInfo.PersonelName,
        reportDesc: this.personelInfo.PhoneNumber,
        reportType: this.personelInfo.Email,
        reportStatus: this.personelInfo.Type,
      }
    });
  }
  */
}
