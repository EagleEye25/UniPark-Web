import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
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
      disableClose: true
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
      disableClose: true
    });
  }

  // Displays request-parking modal
  openRequestParkingDialog(): void {
    this.RequestParkingDialog = this.dialog.open(RequestParkingComponent, {
      disableClose: true
    });
  }
}
