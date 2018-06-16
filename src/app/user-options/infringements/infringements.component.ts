import { Component, OnInit, Inject, HostListener, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-infringements',
  templateUrl: './infringements.component.html',
  styleUrls: ['./infringements.component.scss']
})
export class InfringementsComponent implements OnInit {

  displayColumns = ['date', 'description', 'reportType', 'status'];
  tableData = new MatTableDataSource<Infringemenets>(TABLE_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialogRef: MatDialogRef<InfringementsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.tableData.paginator = this.paginator;
    this.tableData.sort = this.sort;
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
  date: string;
  description: string;
  reportType: string;
  status: string;
}

const TABLE_DATA: Infringemenets[] = [
  {date: '1', description: 'Hydrogen', reportType: '1.0079', status: 'H'},
  {date: '2', description: 'Helium', reportType: '4.0026', status: 'He'},
  {date: '3', description: 'Lithium', reportType: '6.941', status: 'Li'},
  {date: '4', description: 'Beryllium', reportType: '9.0122', status: 'Be'},
  {date: '5', description: 'Boron', reportType: '10.811', status: 'B'},
  {date: '6', description: 'Carbon', reportType: '12.0107', status: 'C'},
  {date: '7', description: 'Nitrogen', reportType: '14.0067', status: 'N'},
  {date: '8', description: 'Oxygen', reportType: '15.9994', status: 'O'},
  {date: '9', description: 'Fluorine', reportType: '18.9984', status: 'F'},
  {date: '10', description: 'Neon', reportType: '20.1797', status: 'Ne'},
];
