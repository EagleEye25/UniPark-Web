import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, FormGroup, FormBuilder, FormControlName } from '@angular/forms';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

import { LoginDialogComponent } from '../../login-dialog/login-dialog.component';
import { UniparkPageComponent } from '../../unipark-page/unipark-page.component';
 
@Component({
  selector: 'app-update-user-info',
  templateUrl: './update-user-info.component.html',
  styleUrls: ['./update-user-info.component.scss']
})
export class UpdateUserInfoComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateUserInfoComponent>,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private login: LoginDialogComponent,
    private uniparkPage: UniparkPageComponent
  ) { }

  urlStart = this.uniparkPage.urlStart;
  form: FormGroup;
  cellNo: string;
  newPass: string;
  confirmNewPass: string;
  userInfoJson: any;

  facilityNo = this.login.facilityNo;

  // Creates email form control
  email = new FormControl('', [Validators.required, Validators.email]);
  // Hides password
  hide = true;

  // Finds if the email entered is correct or not
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit() {
    this.form = this.fb.group({
      cellNo: [this.cellNo, []],
      email: [this.email, []],
      newPass: [this.newPass, []],
      confirmNewPass: [this.confirmNewPass, []],
    });
  }

  openSnackBarFail() {
    // Opens the snackBar with error
    this.snackBar.open('Please ensure passwords match!', 'OK', {
      duration: 2000,
    });
  }

  // Vquires update information entered by user
  aquireUpdateInfo() {
    this.cellNo = this.form.value.cellNo;
    this.email = this.form.value.email;
    this.newPass = this.form.value.newPass;
    this.confirmNewPass = this.form.value.confirmNewPass;
  }

  prepareUpdate() {
    // Sends update information to json
    this.userInfoJson = 
    {
      "PersonnelID": this.facilityNo,
      "PersonnelPhoneNumber": this.cellNo,
      "PersonnelEmail": this.email,
      "PersonnelPassword": this.newPass
    }
    /*
    // sends data to api
    this.http.put('http://' + this.urlStart + '/personnel/update')
    .subscribe((response: any) => this.updatePersonelInfo = response);
    */
  }

  // Verifys information entered by user
  verifyUpdateInfo() {
    // Will validate which option to choose send data, close dialog
    if (this.newPass == this.confirmNewPass && this.confirmNewPass == this.newPass) {
      this.prepareUpdate();
      this.dialogRef.close(this.form.value);
    } else if(this.newPass === '' && this.confirmNewPass === '') {
      this.prepareUpdate();
      this.dialogRef.close(this.form.value);
    } else {
      this.openSnackBarFail();
    }
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
          this.verifyUpdateInfo();
        break;
        case 27:
          this.closeDialog();
        break;
      }
    }

}
