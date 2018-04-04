import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { UserInfoComponent } from '../../app/user-options/user-info/user-info.component';
import { UpdateUserInfoComponent } from '../../app/user-options/update-user-info/update-user-info.component';
import { ViewAssignedParkingComponent } from '../../app/user-options/view-assigned-parking/view-assigned-parking.component';
import { RequestParkingComponent } from '../../app/user-options/request-parking/request-parking.component';

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

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  // Displays user-info modal
  openUserInfoDialog(): void {
    this.userInfoDialogRef = this.dialog.open(UserInfoComponent, {
      disableClose: true,
      data: {
        userName: this.userName,
        userSur: this.userSur,
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

    this.RequestParkingDialog.afterClosed().subscribe(
        requestParking => {
        console.log('Dialog output:', requestParking);
        this.parkingArea = requestParking.parkingArea;
        this.parkingSpot = requestParking.parkingSpot;
      }
    );
  }
}
