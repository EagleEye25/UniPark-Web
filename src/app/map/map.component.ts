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

  @Input() longitude: any;
  @Input() latitude: any;
  mapBoxAPI: any;
  map: mapboxgl.Map;

  constructor(
    private appService: AppService
  ) {
    Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(MAPBOX_API);
  }

  generateMap() {
    const latLng = new mapboxgl.LngLat(this.longitude, this.latitude);
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/eagleeye25/cjjyumx0a8cph2smuvg6kgp39',
      center: latLng,
      zoom: 16,
    });

    const markerEl = new mapboxgl.Marker({
      offset: [0, 0]
    })
    .setLngLat(latLng)
    .addTo(this.map);
    // this.map.scrollZoom.disable();
    // this.map.dragPan.disable();
  }
  ngOnInit() {
    this.generateMap();
  }
}
