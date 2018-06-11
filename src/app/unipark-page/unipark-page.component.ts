import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

import { UserInfoComponent } from '../../app/user-options/user-info/user-info.component';
import { UpdateUserInfoComponent } from '../../app/user-options/update-user-info/update-user-info.component';
import { ViewAssignedParkingComponent } from '../../app/user-options/view-assigned-parking/view-assigned-parking.component';
import { RequestParkingComponent } from '../../app/user-options/request-parking/request-parking.component';
import { HelpComponent } from '../user-options/help/help.component';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-unipark-page',
  templateUrl: './unipark-page.component.html',
  styleUrls: ['./unipark-page.component.scss']
})
export class UniparkPageComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private login: LoginDialogComponent
  ) { }

  urlStart = "localhost:9000";
  
  // Decliration of objects for api calls
  myDatas: any;
  personelInfo: any;
  personelParkingInfo: any;
  updatePersonelInfo: any;
  requestParkingInfo: any;
  facilityNo = this.login.facilityNo;

  // Implimentation for gathering data from database
  // Currently getting data from an API
  ngOnInit() {
    // Test of implimentation
    this.http.get('https://api.coinmarketcap.com/v2/ticker/?limit=2')
      .subscribe((response: any) => this.myDatas = response);
    // personel info according to facilityNoDB
    this.http.get('http://' + this.urlStart + '/personnel/specified/' + this.facilityNo)
      .subscribe((response: any) => this.personelInfo = response);
    // Gets personel parking info
    this.http.get('http://' + this.urlStart + '/assigned-parking/' + this.facilityNo)
      .subscribe((response: any) => this.personelParkingInfo = response);
    /*// Update personel info
    this.http.put('http://' + this.urlStart + '/personnel/update')
      .subscribe((response: any) => this.updatePersonelInfo = response);
    // Request parking
    this.http.post('http://' + this.urlStart + '/request-parking')
      .subscribe((response: any) => this.requestParkingInfo = response);*/
    //this.http.put("http://localhost:9000/personnel/update/"
  }

  // User info variables
  userName = this.personelInfo.PersonelName;
  userPhone = this.personelInfo.PhoneNumber;
  userEmail = this.personelInfo.Email;
  userType = this.personelInfo.Type;
  userLevel = this.personelInfo.PersonelLevel;

  // Update user info variables
  updatePhone: string;
  updateEmail: string;
  newPass: string;
  confirmNewPass: string;

  // Assign parking variables
  parkingName = this.personelParkingInfo.ParkingName;
  parkingAL = this.personelParkingInfo.ParkingAccessLevel;
  parkingLocation = this.personelParkingInfo.Location;

  // Request parking variables
  parkingArea: string;
  parkingSpot: string;

  // Imports dialogs for use for modal
  userInfoDialogRef: MatDialogRef<UserInfoComponent>;
  UpdateUserDialog: MatDialogRef<UpdateUserInfoComponent>;
  AssignedParkingDialog: MatDialogRef<ViewAssignedParkingComponent>;
  RequestParkingDialog: MatDialogRef<RequestParkingComponent>;
  helpDialog: MatDialogRef<HelpComponent>;

  // Displays user-info modal
  openUserInfoDialog(): void {
    this.userInfoDialogRef = this.dialog.open(UserInfoComponent, {
      disableClose: true,
      // Sets data to appropriate variables
      data: {
        userName: this.userName,
        userPhone: this.userPhone,
        userEmail: this.userEmail,
        userType: this.userType,
        userLevel: this.userLevel
      }
    });
  }

  // Displays update-user-info modal
  openUpdateUserInfoDialog(): void {
    this.UpdateUserDialog = this.dialog.open(UpdateUserInfoComponent, {
      disableClose: true
    });

    // Sets data to appropriate variables
    this.UpdateUserDialog.afterClosed().subscribe(
        updateInfo => {
        console.log('Dialog output:', updateInfo);
        this.updatePhone = updateInfo.cellNo;
        this.updateEmail = updateInfo.email;
        this.newPass = updateInfo.newPass;
        this.confirmNewPass = updateInfo.confirmNewPass;
      }
    );
  }

  // Displays assigned-parking modal
  openAssignedParkingDialog(): void {
    this.AssignedParkingDialog = this.dialog.open(ViewAssignedParkingComponent, {
      disableClose: true,
      // Sets data to appropriate variables
      data: {
        parkingName: this.parkingName,
        parkingAL: this.parkingAL,
        parkingLocation: this.parkingLocation,
      }
    });
  }

  // Displays request-parking modal
  openRequestParkingDialog(): void {
    this.RequestParkingDialog = this.dialog.open(RequestParkingComponent, {
      disableClose: true
    });

    // Sets data to appropriate variables
    this.RequestParkingDialog.afterClosed().subscribe(
      requestParking => {
        console.log('Dialog output:', requestParking);
        this.parkingArea = requestParking.parkingArea;
        this.parkingSpot = requestParking.parkingSpot;
      }
    );
  }

  // Displays user-info modal
  openHelpDialog(): void {
    this.helpDialog = this.dialog.open(HelpComponent, {
      disableClose: true,
    });
  }
}
