import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, FormGroup, FormBuilder, FormControlName } from '@angular/forms';

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

  // Creates email form control
  email = new FormControl('', [Validators.required, Validators.email]);
  // Hides password
  hide = true;

  // Finds if the email entered is correct or not
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateUserInfoComponent>
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      cellNo: [this.cellNo, []],
      email: [this.email, []],
      newPass: [this.newPass, []],
      confirmNewPass: [this.confirmNewPass, []],
    });
  }

  updateInfo() {
    this.dialogRef.close(this.form.value);
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
          this.updateInfo();
        break;
        case 27:
          this.closeDialog();
        break;
      }
    }

}
