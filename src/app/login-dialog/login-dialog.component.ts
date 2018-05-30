import { Component, OnInit, Inject, Output, EventEmitter, HostListener, NgModule } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';


import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';

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

  // Hides password
  hide = true;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<LoginDialogComponent>) {}

  ngOnInit() {
    this.form = this.fb.group({
      facilityNo: [this.facilityNo, []],
      userPass: [this.userPass, []]
    });
  }

  openSnackBar() {
    this.snackBar.open('Incorrect login details', 'OK', {
      duration: 2000,
    });
  }

  aquireLoginDetails() {
    // Set login information
    this.facilityNo = this.form.value.facilityNo;
    this.userPass = this.form.value.userPass;
    this.facilityNoDB = '123';
    this.userPassDB = '123';
    // If information is incorrect, will inform user
    // NEEDED AN IF ELSE FOR WAY DATA IS COLLECTED
    if (this.facilityNoDB !== this.facilityNo) {
          this.openSnackBar();
    } else if
        (this.userPassDB !== this.userPass) {
          this.openSnackBar();
    } else {
      // Open unipark page, close modal
      console.log('login Dialog: ', this.facilityNoDB, '  ', this.userPassDB);
      this.dialogRef.close(this.form.value);
      this.router.navigateByUrl('/admin');
    }
  }

  // Closes the dialog
  closeDialog(): void {
    this.dialogRef.close();
  }

  // captures keyboard events
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
