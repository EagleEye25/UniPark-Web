import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  form: FormGroup;
  facilityNo: string;
  userPass: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<LoginDialogComponent>) {}

  ngOnInit() {
    this.form = this.fb.group({
      facilityNo: [this.facilityNo, []],
      userPass: [this.userPass, []]
    });
  }

  login() {
    this.dialogRef.close(this.form.value);
  }

  // Closes the dialog
  close(): void {
    this.dialogRef.close();
  }
}
