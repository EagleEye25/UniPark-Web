import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
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

  // Viewing of inputs from html
  @ViewChild('inputCell') viewCell: ElementRef;
  @ViewChild('inputEmail') viewEmail: ElementRef;
  @ViewChild('inputNewPass') viewNewPass: ElementRef;

  form: FormGroup;
  formBuilder: FormBuilder;

  // FormControl variables
  cellNo: any;
  email: any;
  newPass: any;
  confirmNewPass: any;

  // Vairable to check if feilds are "clean"
  clean = true;

  // Json data
  userInfoJson: any;
  updateResponse: any;

  // Checkbox value changes
  checkBoxPos = 'before';
  disableCell: boolean;
  disableEmail: boolean;
  disablePass: boolean;
  disableConfirm: boolean;

  // Regex for validation
  cellReg = new RegExp(/[0-9]{10}/);
  strongPassReg = new RegExp(
    /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{10,}$/
  );

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
    this.newPass = new FormControl({ value: '', disabled: this.disablePass}, [Validators.pattern(this.strongPassReg)]);
    this.confirmNewPass = new FormControl({ value: '', disabled: this.disableConfirm}, [Validators.pattern(this.newPass.value)]);
    this.form = this.fb.group({
      'email': this.email,
      'cellNo': this.cellNo,
      'newPass': this.newPass,
      'confirmNewPass': this.confirmNewPass
    });
  }

  testMinUpper() {
    const minUpper = new RegExp(/(?=.*[A-Z].*[A-Z])/);
    return minUpper.test(this.newPass.value);
  }

  testMinNum() {
    const minNum = new RegExp(/(?=.*[0-9].*[0-9])/);
    return minNum.test(this.newPass.value);
  }

  testMinSpecial() {
    const minSpecial = new RegExp(/(?=.*[!@#$&*])/);
    return minSpecial.test(this.newPass.value);
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
      this.form.controls.cellNo.enable();
      this.disableCell = false;
      this.resetCell = true;
      this.clean = false;
      this.viewCell.nativeElement.focus();
    } else {
      this.form.controls.cellNo.disable();
      this.form.controls.cellNo.setValue('');
      this.disableCell = true;
      this.resetCell = false;
      this.checkFeilds();
    }
  }

  // Enables or Disables email feild depending on state
  changeEmail() {
    if (this.disableEmail === true) {
      this.form.controls.email.enable();
      this.disableEmail = false;
      this.resetEmail = true;
      this.clean = false;
      this.viewEmail.nativeElement.focus();
    } else {
      this.form.controls.email.disable();
      this.form.controls.email.setValue('');
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
      this.viewNewPass.nativeElement.focus();
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
    const newPass = this.newPass.value;
    const newEmail = this.email.value;
    const newCell = this.cellNo.value;
    // Sends update information to json
    this.userInfoJson = {
      'PersonnelID': this.appService.getState('FacilityID'),
      'PersonnelPhoneNumber': newCell,
      'PersonnelEmail': newEmail,
      'PersonnelPassword': newPass
    };
    console.log( this.userInfoJson);

    // Sends data to api
    const updateResponse: any = await this.http.put(`${BASE_URL}/personnel/update`, this.userInfoJson)
    .toPromise()
    .catch(console.error);
    console.log(updateResponse);
    if (updateResponse && updateResponse.data.trim() === 'SUCCESS') {
      this.openSnackBarSuccess();
      this.cancle();
    } else {
      this.openSnackBarFail();
    }
  }

  // Verifys information entered by user
  verifyUpdateInfo() {
    const newPass = this.newPass.value;
    const confirmNewPass = this.confirmNewPass.value;
    // Checks passwords entered
    if (newPass === confirmNewPass && confirmNewPass === newPass) {
      this.prepareUpdate();
    } else if (newPass === '' && confirmNewPass === '') {
        this.prepareUpdate();
    } else if (newPass === undefined && confirmNewPass === undefined) {
        this.prepareUpdate();
    } else {
        this.openSnackBarFail();
    }
  }

  // Clears user entered data
  cancle() {
    // Phone clear
    this.form.controls.cellNo.disable();
    this.form.controls.cellNo.setValue('');
    this.disableCell = true;
    // Email clear
    this.form.controls.email.disable();
    this.form.controls.email.setValue('');
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
          if (this.email.valid) {
            this.verifyUpdateInfo();
          } else if (this.cellNo.valid) {
            this.verifyUpdateInfo();
          } else if (!this.clean) {
            this.verifyUpdateInfo();
          }
        break;
        case 27:
          this.cancle();
        break;
      }
    }

}
