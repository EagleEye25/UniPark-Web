import { Component, OnInit, Inject, HostListener, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { AppService, BASE_URL } from '../../app.service';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.scss']
})
export class ViewRequestsComponent implements OnInit {

  displayColumns = ['Date', 'Description'];
  tableData: any;
  viewRequests: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private http: HttpClient,
    private appService: AppService
  ) { }

  ngOnInit() {
    // Gathers infringement data from backend
    this.http.get(`${BASE_URL}//` + this.appService.getState('FacilityID'))
    .subscribe((response: any) => { this.viewRequests = response;
      // Removes unnecessary chars from data
      for (let k = 0; k < this.viewRequests.length; k++) {
        this.viewRequests[k].Date = this.viewRequests[k].Date.slice(0, -14);
      }
      // sends data to table
      this.tableData = new MatTableDataSource<Requests>(this.viewRequests);
      this.tableData.paginator = this.paginator;
      this.tableData.sort = this.sort;
    });
  }

  // filter used on table
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.tableData.filter = filterValue;
  }

}

// Interface for table
export interface Requests {
  Date: string;
  Description: string;
}
