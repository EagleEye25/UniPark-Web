import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, FormGroup, FormBuilder, FormControlName } from '@angular/forms';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { AppService, BASE_URL } from '../../app.service';

@Component({
  selector: 'app-update-user-info',
  templateUrl: './update-user-info.component.html',
  styleUrls: ['./update-user-info.component.scss']
})
export class UpdateUserInfoComponent implements OnInit {

  form: FormGroup;
  cellNo: string;
  newPass: string;
  confirmNewPass: string;
  userInfoJson: any;
  updateResponse: any;

  // Creates email form control
  email = new FormControl('', [Validators.required, Validators.email]);
  // Hides password
  hide = true;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateUserInfoComponent>,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private appService: AppService
    // private uniparkPage: UniparkPageComponent
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      cellNo: [this.cellNo, []],
      email: [this.email, []],
      newPass: [this.newPass, []],
      confirmNewPass: [this.confirmNewPass, []],
    });
  }

  // Finds if the email entered is correct or not
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  // Opens the snackBar with error
  openSnackBarFail() {
    this.snackBar.open('Update Failed', 'OK', {
      duration: 2000,
    });
  }
  openSnackBarSuccess() {
    this.snackBar.open('Update Success', 'OK', {
      duration: 2000,
    });
  }

  async prepareUpdate() {
    // Aquires update information entered by user
    this.cellNo = this.form.value.cellNo;
    this.newPass = this.form.value.newPass;
    this.confirmNewPass = this.form.value.confirmNewPass;
    // Sends update information to json
    this.userInfoJson = {
      'PersonnelID': this.appService.getState('FacilityID'),
      'PersonnelPhoneNumber': this.cellNo,
      'PersonnelEmail': this.email.value,
      'PersonnelPassword': this.newPass
    };
    console.log( this.userInfoJson);

    // sends data to api
    const updateResponse: any = await this.http.put(`${BASE_URL}/personnel/update`, this.userInfoJson)
    .toPromise()
    .catch(console.error);
    console.log(updateResponse);
    if (updateResponse && updateResponse.data.trim() === 'SUCCESS') {
      this.openSnackBarSuccess();
    } else {
      this.openSnackBarFail();
    }
  }

  // Verifys information entered by user
  verifyUpdateInfo() {
    // Will validate which option to choose send data, close dialog
    if (this.newPass === this.confirmNewPass && this.confirmNewPass === this.newPass) {
      this.prepareUpdate();
      this.dialogRef.close(this.form.value);
    } else if (this.newPass === '' && this.confirmNewPass === '') {
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
