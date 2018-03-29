import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<UserInfoComponent>) { }

  ngOnInit() {
  }

    // Closes the dialog
    close(): void {
      this.dialogRef.close();
    }
}
