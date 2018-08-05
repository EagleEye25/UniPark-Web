import { Component, OnInit, Input } from '@angular/core';
import { AppService, MAPBOX_API } from '../app.service';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [
    '../../../node_modules/mapbox-gl/dist/mapbox-gl.css',
    './map.component.scss'
  ]
})
export class MapComponent implements OnInit {

  @Input() longitude;
  @Input() latitude;
  mapBoxAPI: any;
  map: mapboxgl.Map;

  constructor(
    private appService: AppService
  ) {
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(MAPBOX_API);
  }

  ngOnInit() {
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/eagleeye25/cjjyumx0a8cph2smuvg6kgp39', // stylesheet location
      center: [this.longitude, this.latitude], // starting position [lng, lat]
      zoom: 16 // starting zoom
    });
    new mapboxgl.Marker()
    .setLngLat([this.longitude, this.latitude])
    .addTo(this.map);
  }

}
