import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  formBuilder: FormBuilder;
  // FormControl variables
  cellNo: any;
  email: any;
  newPass: string;
  confirmNewPass: string;

  clean = true;

  userInfoJson: any;
  updateResponse: any;

  // Checkbox value changes
  checkBoxPos = 'before';
  disableCell: boolean;
  disableEmail: boolean;
  disablePass: boolean;
  disableConfirm: boolean;

  cellReg = new RegExp(/[0-9]{10}/);
  strongPassReg = new RegExp(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{10,}$/);

  // Hides password
  hide = true;
  resetCell = false;
  resetEmail = false;
  resetPass = false;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private appService: AppService
    // private uniparkPage: UniparkPageComponent
  ) { }

  // Initializes on load
  ngOnInit() {
    this.disableCell = true;
    this.disableEmail = true;
    this.disablePass = true;
    this.disableConfirm = true;
    this.email = new FormControl({value: '', disabled: this.disableEmail}, [Validators.email]);
    this.cellNo = new FormControl({value: '', disabled: this.disableCell}, [Validators.pattern(this.cellReg)]);
    this.form = this.fb.group({
      newPass: new FormControl({ value: '', disabled: this.disablePass}),
      confirmNewPass: new FormControl({ value: '', disabled: this.disableConfirm}),
    });
  }

  // Only allows numbers to be typed
  onlyNumberKey(event) {
    return (event.charCode === 8 || event.charCode === 0)
    ? null
    : event.charCode >= 48 && event.charCode <= 57;
  }

  // Enables or Disables cell feild depending on state
  changeCell() {
    if (this.disableCell === true) {
      this.cellNo.reset({value: '', disabled: false}, [Validators.pattern(this.cellReg)]);
      this.disableCell = false;
      this.resetCell = true;
      this.clean = false;
    } else {
      this.cellNo.reset({value: '', disabled: true}, [Validators.pattern(this.cellReg)]);
      this.disableCell = true;
      this.resetCell = false;
      this.checkFeilds();
    }
  }

  // Enables or Disables email feild depending on state
  changeEmail() {
    if (this.disableEmail === true) {
      this.email.reset({value: '', disabled: false}, [Validators.email]);
      this.disableEmail = false;
      this.resetEmail = true;
      this.clean = false;
    } else {
      this.email.reset({value: '', disabled: true}, [Validators.email]);
      this.disableEmail = true;
      this.resetEmail = false;
      this.checkFeilds();
    }
  }

  // Enables or Disables password feilds depending on state
  changePassword() {
    if (this.disablePass === true) {
      this.form.controls.newPass.enable();
      this.form.controls.confirmNewPass.enable();
      this.disablePass = false;
      this.resetPass = true;
      this.clean = false;
    } else {
      this.form.controls.newPass.disable();
      this.form.controls.confirmNewPass.disable();
      this.form.controls.newPass.setValue('');
      this.form.controls.confirmNewPass.setValue('');
      this.disablePass = true;
      this.resetPass = false;
      this.checkFeilds();
    }
  }

  // checks if all feilds are empty
  checkFeilds() {
    const pass = this.form.value.newPass;
    const cPass = this.form.value.confirmNewPass;
    const cell = String(this.cellNo.value);
    const email = this.email.value;

    if (!pass && !cPass && !cell && !email &&
      this.disableCell && this.disablePass && this.disableConfirm && this.disableEmail) {
        this.clean = true;
    }
  }


  // Finds if the email entered is correct or not
  getErrorMessage() {
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  // Opens the snackBar with error
  openSnackBarFail() {
    this.snackBar.open('Update Failed', 'OK', {
      duration: 2000,
    });
  }

  // Opens the snackBar with success
  openSnackBarSuccess() {
    this.snackBar.open('Update Success', 'OK', {
      duration: 2000,
    });
  }

  // Prepares data to be sent to backend
  async prepareUpdate() {
    // Aquires update information entered by user
    this.newPass = this.form.value.newPass;
    this.confirmNewPass = this.form.value.confirmNewPass;
    // Sends update information to json
    this.userInfoJson = {
      'PersonnelID': this.appService.getState('FacilityID'),
      'PersonnelPhoneNumber': String(this.cellNo.value),
      'PersonnelEmail': this.email.value,
      'PersonnelPassword': this.newPass
    };
    console.log( this.userInfoJson);

    // Sends data to api
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
    this.newPass = this.form.value.newPass;
    this.confirmNewPass = this.form.value.confirmNewPass;
    // Will validate which option to choose send data, close dialog
    if (this.newPass === this.confirmNewPass && this.confirmNewPass === this.newPass) {
      this.prepareUpdate();
    } else if (this.newPass === '' && this.confirmNewPass === '') {
      this.prepareUpdate();
    } else {
      this.openSnackBarFail();
    }
  }

  // Clears user entered data
  cancle() {
    // Phone clear
    this.email.reset({value: '', disabled: true}, [Validators.email]);
    this.disableCell = true;
    // Email clear
    this.email.reset({value: '', disabled: true}, [Validators.email]);
    this.disableEmail = true;
    // Password clear
    this.form.controls.newPass.disable();
    this.form.controls.confirmNewPass.disable();
    this.form.controls.newPass.setValue('');
    this.form.controls.confirmNewPass.setValue('');
    this.disablePass = true;
    // Unchecks boxes
    this.resetCell = false;
    this.resetEmail = false;
    this.resetPass = false;
  }

  // Captures keyboard events
  @HostListener('window:keydown', ['$event'])
    enterKeyEvent(event: any) {
      switch (event.keyCode) {
        case 13:
          this.verifyUpdateInfo();
        break;
        case 27:
          this.cancle();
        break;
      }
    }

}
