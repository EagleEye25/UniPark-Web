import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService, BASE_URL } from '../../app.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  userInfo = {};
  PersonelName: any;
  PhoneNumber: any;
  Email: any;
  Type: any;
  PersonelLevel: any;

  constructor(
    private http: HttpClient,
    private appService: AppService) { }

  ngOnInit() {
    const pollData = () => {
      const facilityID = this.appService.getState('FacilityID');
      if (facilityID) {
        // Gets user info from backend
        this.http.get(`${BASE_URL}/personnel/specified/` + this.appService.getState('FacilityID'))
        .subscribe((response: any) => {
          this.PersonelName = response.PersonelName;
          this.PhoneNumber = response.PhoneNumber;
          this.Email = response.Email;
          this.Type = response.Type;
          this.PersonelLevel = response.PersonelLevel;
        });
      } else {
        setTimeout(pollData, 1000);
      }
    };
    pollData();
  }
}
