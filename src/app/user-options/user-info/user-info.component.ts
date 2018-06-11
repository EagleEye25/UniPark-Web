import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  userInfo: any;

  constructor(
    private dialogRef: MatDialogRef<UserInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private appService: AppService) { }

  ngOnInit() {
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
          this.closeDialog();
        break;
        case 27:
          this.closeDialog();
        break;
      }
    }
}
