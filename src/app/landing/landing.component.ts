import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginDialogComponent } from '../../app/login-dialog/login-dialog.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  // Imports login-dialog for use for modal
  loginDialogRef: MatDialogRef<LoginDialogComponent>;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  // Displays login modal
  openLoginDialog(data: any) {
    this.loginDialogRef = this.dialog.open(LoginDialogComponent, {
      disableClose: true
    });
  }
}
