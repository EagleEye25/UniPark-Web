import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators, FormGroup, FormBuilder, FormControlName } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BASE_URL } from '../../app.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  dialogRef: MatDialogRef<ConfirmationDialogComponent>;

  form2: FormGroup;
  form1: FormGroup;
  formBuilder: FormBuilder;

  // FormControl variables
  newPass: any;
  confirmNewPass: any;
  cell: any;
  email: any;
  name: any;
  facilityNo: any;

  phase1 = false;

  // Vairable to check if feilds are "clean"
  clean = true;

  // Hides password
  hide = true;
  isLinear = true;

  // Json data
  userInfoJson: any;
  updateResponse: any;

  // Regex for validation
  cellReg = new RegExp(/[0-9]{10}/);
  strongPassReg = new RegExp(
    /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{10,}$/
  );

  PersonelName: any;
  PhoneNumber: any;
  nameT = false;
  cellT = false;
  emailT = false;
  Email: any;
  resp = false;
  progress = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private http: HttpClient,

  ) { }

  ngOnInit() {
    // Form Controls
    this.cell = new FormControl({value: '',  disabled: false}, [Validators.pattern(this.cellReg)]);
    this.email = new FormControl({value: '', disabled: false}, [Validators.email]);
    this.name = new FormControl({value: '', disabled: false}, [Validators.required]);
    this.facilityNo = new FormControl({value: '', disabled: false}, [Validators.required]);
    this.form1 = this.fb.group({
      'name': this.name,
      'cell': this.cell,
      'email': this.email,
      'facilityNo': this.facilityNo
    });
    this.newPass = new FormControl({value: '',  disabled: false}, [Validators.pattern(this.strongPassReg)]);
    this.confirmNewPass = new FormControl({value: '',  disabled: false});
    this.form2 = this.fb.group({
      'newPass': this.newPass,
      'confirmNewPass': this.confirmNewPass
    });
  }

  checkStep1(): void {
    if (this.name.value === '' ||
        this.cell.value === '' ||
        this.email.value === '' ||
        this.facilityNo.value === '') {
      this.phase1 = false;
    } else {
      this.phase1 = true;
    }
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

  callDialog() {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: true,
      data: {
        state: 'unsuccessful',
      }
    });
  }

  // Only allows numbers to be typed
  onlyNumberKey(event) {
    this.checkStep1();
    return (event.charCode === 8 || event.charCode === 0)
    ? null
    : event.charCode >= 48 && event.charCode <= 57;
  }

  // Finds if the email entered is correct or not
  getErrorMessage() {
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  // checks if all feilds are empty
  checkFeilds() {
    const pass = this.form2.value.newPass;
    const cPass = this.form2.value.confirmNewPass;

    !cPass ? this.clean = true : this.clean = false;
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

  // Verifys information entered by user
  verifyUpdateInfo() {
    this.resp = true;
    this.progress = true;
    // Get user data
    const pollData = () => {
      const facilityID = this.facilityNo.value.toLowerCase().trim();

      if (facilityID) {
        // Gets user info from backend
        this.http.get(`${BASE_URL}/personnel/specified/` + facilityID)
        .subscribe((response: any) => {
          if (response) {
            this.PersonelName = response.PersonelName.toLowerCase();
            this.PhoneNumber = response.PhoneNumber;
            this.Email = response.Email;
            // variables for data usage
            const name = this.name.value.toLowerCase().trim();
            const cell = this.cell.value;
            const email = this.email.value.trim();
            const newPass = this.newPass.value;
            const confirmNewPass = this.confirmNewPass.value;
            // test data
            this.PersonelName === name ? this.nameT = true : this.nameT = false;
            this.PhoneNumber === cell ? this.cellT = true : this.cellT = false;
            this.Email === email ? this.emailT = true : this.emailT = false;
            if (this.nameT && this.cellT && this.emailT) {
              // Checks passwords entered
              if (newPass === confirmNewPass && confirmNewPass === newPass
                && this.emailT && this.cellT && this.nameT) {
                this.prepareUpdate();
              } else {
                this.callDialog();
              }
            } else {
              this.callDialog();
            }
          } else {
            this.callDialog();
          }
        });
      } else {
        this.callDialog();
      }
    };
    pollData();
  }

  // Prepares data to be sent to backend
  async prepareUpdate() {
    // Aquires update information entered by user
    const newPass = this.newPass.value;
    const facility = this.facilityNo.value;
    // Sends update information to json
    this.userInfoJson = {
      'PersonnelID': facility,
      'PersonnelPhoneNumber': '',
      'PersonnelEmail': '',
      'PersonnelPassword': newPass
    };

    // Sends data to api
    const updateResponse: any = await this.http.put(`${BASE_URL}/personnel/update`, this.userInfoJson)
    .toPromise()
    .catch(console.error);
    if (updateResponse && updateResponse.data.trim() === 'SUCCESS') {
      this.openSnackBarSuccess();
      this.router.navigateByUrl('/');
    } else {
      this.callDialog();
    }
  }
}
