import { Component, OnInit, Inject, Output, EventEmitter, HostListener, NgModule } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';

import {AppService, BASE_URL} from '../app.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  form: FormGroup;
  // Login variables
  facilityNo: string;
  userPass: string;

  // Variables from database
  facilityNoDB: string;
  userPassDB: string;

  // Hides password on dialog
  hide = true;

  // Declaration for http objects
  personelLoginInfo: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private http: HttpClient,
    private appService: AppService) {}

  ngOnInit() {
    this.form = this.fb.group({
      facilityNo: [this.facilityNo, []],
      userPass: [this.userPass, []]
    });
  }

  // opens the snackBar with error
  openSnackBarFail() {
    // opens the snackBar with error
    this.snackBar.open('Incorrect login details', 'OK', {
      duration: 2000,
    });
  }

  // Gets login details, sends to backend (verification done on backend)
  aquireLoginDetails() {
    // aquire login details from dialog
    this.facilityNo = this.form.value.facilityNo;
    this.userPass = this.form.value.userPass;

    // sends login info, veriefied on backend
    this.http.post(`${BASE_URL}/personnel/login`,
      {facilityNo: this.facilityNo, password: this.userPass})
      .subscribe(this.loginUser.bind(this), this.openSnackBarFail.bind(this));
  }

  // sends the user to unipark page, as successful login
  loginUser() {
    this.appService.setState('FacilityID', this.facilityNo);
    // Open unipark page, close modal
    this.dialogRef.close(this.form.value);
    this.router.navigateByUrl('/admin');
  }

  // Closes the dialog
  closeDialog(): void {
    this.dialogRef.close();
  }

  // Captures keyboard events
  @HostListener('window:keydown', ['$event'])
    enterKeyEvent(event: any) {
      switch (event.keyCode) {
        case 13:
          this.aquireLoginDetails();
          break;
        case 27:
          this.closeDialog();
          break;
      }
    }
}
