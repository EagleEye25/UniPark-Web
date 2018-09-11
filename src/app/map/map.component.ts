import { Component, OnInit, Input, OnChanges } from '@angular/core';
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
export class MapComponent implements OnInit, OnChanges {

  @Input() longitude: any;
  @Input() latitude: any;
  @Input() parkingArea: any;
  mapBoxAPI: any;
  marker: any;
  old: any;

  // TODO: find out syntax for insertion
  testing = [
    {
      line: [[ 25.672959, -34.000911],
       [ 25.672761, -34.000715],
       [ 25.673141, -34.000720],
       [ 25.673174, -34.001031],
       [ 25.672761, -34.001022]]
}
];

  constructor(
    private appService: AppService
  ) {
    Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(MAPBOX_API);
  }

  ngOnInit() {
    console.log('lat: ', this.latitude, 'long: ', this.longitude);
    this.generateMap();
    this.old = this.longitude;
  }

  ngOnChanges(): void {
    if (this.old !== this.longitude) {
      this.generateMap();
    }
  }

  // Generates map data
  generateMap() {
    const dataSet = '../../assets/datasets/' + this.parkingArea + '.geojson';
    console.log(dataSet);
    const latLng = new mapboxgl.LngLat(this.longitude, this.latitude);
    console.log('latlon: ', latLng);
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/eagleeye25/cjjyumx0a8cph2smuvg6kgp39',
      center: latLng,
      zoom: 16,
    });
      map.on('load', function() {
        map.addSource('lines', {
          type: 'geojson',
          data: dataSet
        });

        map.addLayer({
          id: 'route',
          type: 'line',
          source: 'lines',
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#75f380',
            'line-width': 3
          }
        });
      });

    this.marker = new mapboxgl.Marker({
      offset: [2, 2]
    })
    .setLngLat(latLng)
    .addTo(map);
    // this.map.scrollZoom.disable();
    // this.map.dragPan.disable();
  }
}
