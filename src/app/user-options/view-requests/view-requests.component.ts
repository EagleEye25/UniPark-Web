import { Component, OnInit, Inject, HostListener, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { AppService, BASE_URL } from '../../app.service';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.scss']
})
export class ViewRequestsComponent implements OnInit {

  displayColumns = ['Date', 'ParkingArea', 'ParkingSpace', 'FEE', 'Cancel'];
  tableData: any;
  viewRequests: any;
  empty = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private appService: AppService
  ) { }

  ngOnInit() {
    // Gathers infringement data from backend
    this.http.get(`${BASE_URL}/personnel/requests/` + this.appService.getState('FacilityID'))
    .subscribe((response: any) => { this.viewRequests = response;
      if (this.viewRequests.length > 0) {
        // Removes unnecessary chars from data
        for (let k = 0; k < this.viewRequests.length; k++) {
          this.viewRequests[k].RequestDate = this.viewRequests[k].RequestDate.slice(0, -14);
        }
        this.sendTableData();
      } else {
        this.empty = true;
      }
    });
  }

  // sends data to table
  sendTableData() {
    this.tableData = new MatTableDataSource<Requests>(this.viewRequests);
    this.tableData.paginator = this.paginator;
    this.tableData.sort = this.sort;
    console.log(this.viewRequests);
  }

  // opens the snackBar with error
  openSnackBarFail() {
    this.snackBar.open('Cancel Failed', 'OK', {
      duration: 2000,
    });
  }

  // opens the snackBar with success
  openSnackBarPass() {
    // opens the snackBar with error
    this.snackBar.open('Successfully Canceled Request!', 'OK', {
      duration: 2000,
    });
  }

  // filter used on table
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.tableData.filter = filterValue;
  }

  cancelRequest(requestID) {
    // Gathers infringement data from backend
    this.http.get(`${BASE_URL}/request/cancel/` + requestID)
    .subscribe((response: any) => {
      if (response.data.trim() === 'SUCCESS') {
        for (let k = 0; k < this.viewRequests.length; k++) {
          if (this.viewRequests[k].ID === requestID) {
            this.viewRequests.splice(k, 1);
          }
        }
        this.viewRequests.length < 1 ? this.empty = true : this.empty = false;
        this.sendTableData();
        this.openSnackBarPass();
      } else {
        this.openSnackBarFail();
      }
    });
  }
}

// Interface for table
export interface Requests {
  ID: string;
  RequestDate: string;
  ParkingSpace: string;
  ParkingArea: string;
  Fee: string;
}
