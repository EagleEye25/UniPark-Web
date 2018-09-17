import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  confirmation = false;
  state: any;
  message = '';

  constructor(
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.state = this.data.state;
    this.checkState();
    console.log('state: ', this.state);
    console.log('confirm: ', this.confirmation);
  }

  checkState(): void {
    switch (this.state) {
      case 'view-requests':
        this.message = 'Are you sure you want to cancel this request?';
      break;
      case 'logout':
        this.message = 'Are you sure you want to logout?';
      break;
    }
  }

  confirm() {
    this.confirmation = true;
    this.dialogRef.close({confirmation: this.confirmation});
  }

  cancel() {
    this.confirmation = false;
    this.dialogRef.close({confirmation: this.confirmation});
  }

}
