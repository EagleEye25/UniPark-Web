import { Component, OnInit, Inject, HostListener, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { AppService, BASE_URL } from '../../app.service';

@Component({
  selector: 'app-infringements',
  templateUrl: './infringements.component.html',
  styleUrls: ['./infringements.component.scss']
})
export class InfringementsComponent implements OnInit {

  removeF = new RegExp(/\[/gi);
  removeL = new RegExp(/\]/gi);
  displayColumns = ['Date', 'Description', 'Report Type', 'Status'];
  tableData: any;
  infringBackend: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogRef: MatDialogRef<InfringementsComponent>,
    private http: HttpClient,
    private appService: AppService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.http.get(`${BASE_URL}/infringements/` + this.appService.getState('FacilityID'))
    .subscribe((response: any) => { this.infringBackend = response,
      this.tableData = new MatTableDataSource<Infringemenets>(this.infringBackend);
      this.tableData.paginator = this.paginator;
      this.tableData.sort = this.sort;
    });
  }

  // Closes the dialog
  closeDialog(): void {
    this.dialogRef.close();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.tableData.filter = filterValue;
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

export interface Infringemenets {
  Date: string;
  Description: string;
  ReportType: string;
  Status: string;
}
