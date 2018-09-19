import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';

import { HelpComponent } from '../user-options/help/help.component';

import { AppService } from '../app.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

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
  confirm: any;

  // Imports dialogs for use for modal
  helpDialog: MatDialogRef<HelpComponent>;
  confirmDialog: MatDialogRef<ConfirmationDialogComponent>;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private appService: AppService,
  ) { }

  // Initializes on load
  ngOnInit() {
    // Checks if user is "logged in"
    if (!this.appService.getState('FacilityID')) {
      this.router.navigateByUrl('/');
    }
  }

  logoutUser(confirm: boolean) {
    if (confirm === true) {
      this.appService.setState('FacilityID', null);
      this.router.navigateByUrl('/');
    }
  }

  openHelpDialog(): void {
    this.helpDialog = this.dialog.open(HelpComponent);
  }

  openConfirmation(): void {
    this.confirmDialog = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: true,
      data: {
        state: 'logout',
      }
    });
    this.confirmDialog.afterClosed()
    .subscribe(result => {
      this.confirm = result.confirmation;
      this.logoutUser(result.confirmation);
    });
  }
}
