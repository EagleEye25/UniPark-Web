import { Component, OnInit, Inject, HostListener, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { AppService, BASE_URL } from '../../app.service';

@Component({
  selector: 'app-infringements',
  templateUrl: './infringements.component.html',
  styleUrls: ['./infringements.component.scss']
})
export class InfringementsComponent implements OnInit {

  displayColumns = ['Date', 'Description', 'Report Type', 'Status'];
  tableData: any;
  infringBackend: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private http: HttpClient,
    private appService: AppService,
  ) { }

  // Initializes on load
  ngOnInit() {
    // Gathers infringement data from backend
    this.http.get(`${BASE_URL}/infringements/` + this.appService.getState('FacilityID'))
    .subscribe((response: any) => { this.infringBackend = response;
      for (let k = 0; k < this.infringBackend.length; k++) {
        this.infringBackend[k].Status === true
        ? this.infringBackend[k].Status = 'un-Paid'
        : this.infringBackend[k].Status = 'Paid';
      }
      // Removes unnecessary chars from data
      for (let k = 0; k < this.infringBackend.length; k++) {
        this.infringBackend[k].Date = this.infringBackend[k].Date.slice(0, -14);
      }
      // sends data to table
      this.tableData = new MatTableDataSource<Infringemenets>(this.infringBackend);
      this.tableData.paginator = this.paginator;
      this.tableData.sort = this.sort;
    });
  }

  // Closes the dialog
  cancle(): void {

  }

  // filter used on table
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
          this.cancle();
        break;
        case 27:
          this.cancle();
        break;
      }
    }
}

// Interface for table
export interface Infringemenets {
  Date: string;
  Description: string;
  ReportType: string;
  Status: string;
}
