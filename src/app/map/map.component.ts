import { Component, OnInit } from '@angular/core';
import { AppService, MAPBOX_API } from '../app.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  longitude: any;
  latitude: any;
  mapBoxAPI: any;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.mapBoxAPI = `${MAPBOX_API}`;
    this.longitude = '';
    this.latitude = '';
  }

}
