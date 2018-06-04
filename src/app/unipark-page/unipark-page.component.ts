import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { UserInfoComponent } from '../../app/user-options/user-info/user-info.component';
import { UpdateUserInfoComponent } from '../../app/user-options/update-user-info/update-user-info.component';
import { ViewAssignedParkingComponent } from '../../app/user-options/view-assigned-parking/view-assigned-parking.component';
import { RequestParkingComponent } from '../../app/user-options/request-parking/request-parking.component';
import { HelpComponent } from '../user-options/help/help.component';

@Component({
  selector: 'app-unipark-page',
  templateUrl: './unipark-page.component.html',
  styleUrls: ['./unipark-page.component.scss']
})
export class UniparkPageComponent implements OnInit {

  // User info variables
  userName: string;
  userSur: string;
  password: string;
  personelType: string;
  personelLevel: string;

  // Update user info variables
  cellNo: string;
  email: string;
  newPass: string;
  confirmNewPass: string;

  // Assign parking variables
  parkingName: string;
  parkingAL: string;
  parkingLocation: string;

  // Request parking variables
  parkingArea: string;
  parkingSpot: string;

  // Imports dialogs for use for modal
  userInfoDialogRef: MatDialogRef<UserInfoComponent>;
  UpdateUserDialog: MatDialogRef<UpdateUserInfoComponent>;
  AssignedParkingDialog: MatDialogRef<ViewAssignedParkingComponent>;
  RequestParkingDialog: MatDialogRef<RequestParkingComponent>;
  helpDialog: MatDialogRef<HelpComponent>;

  // Decliration for data of user
  myDatas: any;
  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
  ) { }

  // Implimentation for gathering data from database
  // Currently getting data from an API
  ngOnInit() {
    this.http.get('https://api.coinmarketcap.com/v2/ticker/?limit=2')
      .subscribe((response: any) => this.myDatas = response);
  }

  // Displays user-info modal
  openUserInfoDialog(): void {
    this.userInfoDialogRef = this.dialog.open(UserInfoComponent, {
      disableClose: true,
      // Sets data to appropriate variables
      data: {
        userName: this.myDatas.data[1].name, // this.userName,
        userSur: this.myDatas.data[1].symbol,
        password: this.password,
        personelType: this.personelType,
        personelLevel: this.personelLevel
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
        this.cellNo = updateInfo.cellNo;
        this.email = updateInfo.email;
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
