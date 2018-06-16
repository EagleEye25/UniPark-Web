import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-infringements',
  templateUrl: './infringements.component.html',
  styleUrls: ['./infringements.component.scss']
})
export class InfringementsComponent implements OnInit {

  displayColumns = ['date', 'description', 'reportType', 'status'];
  tableData = [
    {date: '2018/06/01', description: 'Hydrogen', reportType: 'parking infringemenet', status: 'paid'},
    {date: '2018/06/01', description: 'Hydrogen', reportType: 'parking infringemenet', status: 'paid'}
  ];

  constructor(
    private dialogRef: MatDialogRef<InfringementsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

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
