import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user-info',
  templateUrl: './update-user-info.component.html',
  styleUrls: ['./update-user-info.component.scss']
})
export class UpdateUserInfoComponent implements OnInit {

  // Creates email form control
  email = new FormControl('', [Validators.required, Validators.email]);

  hide = true;

  // Finds if the email entered is correct or not
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(
    private dialogRef: MatDialogRef<UpdateUserInfoComponent>) { }

  ngOnInit() {
  }

  // Closes the dialog
  close(): void {
    this.dialogRef.close();
  }

}
