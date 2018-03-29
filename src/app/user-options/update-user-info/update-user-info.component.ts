import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-user-info',
  templateUrl: './update-user-info.component.html',
  styleUrls: ['./update-user-info.component.scss']
})
export class UpdateUserInfoComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<UpdateUserInfoComponent>) { }

  ngOnInit() {
  }

  // Closes the dialog
  close(): void {
    this.dialogRef.close();
  }

}
