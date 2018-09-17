import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  autoComplete = new FormControl();
  options: string[] = ['User Information', 'Update User Info', 'Assigned Parking',
                      'Request Parking', 'View Requests', 'Infringements', 'Logout'];
  filteredOptions: Observable<string[]>;

  filterValue = '';

  constructor(
    private dialogRef: MatDialogRef<HelpComponent>
  ) { }

  ngOnInit() {
    this.filteredOptions = this.autoComplete.valueChanges
    .pipe(
      startWith(''),
      map(value => this.filter(value))
    );
  }

  // filter used on table
  filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.filterValue = filterValue;
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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
