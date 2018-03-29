import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginDialogComponent } from '../../app/login-dialog/login-dialog.component';
import { NgModel } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  facilityNo: string;
  userPass: string;
  userinfo: string;

  // Imports login-dialog for use for modal
  loginDialogRef: MatDialogRef<LoginDialogComponent>;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  // Displays login modal
  openLoginDialog(): void {
    this.loginDialogRef = this.dialog.open(LoginDialogComponent, {
      disableClose: true
    });
  }
}
