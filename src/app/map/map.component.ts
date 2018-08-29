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
  marker: any;

  // TODO: find out syntax for insertion
  drawingCo: any = [
    [25.671593861831553, -33.999276966925336],
    [25.67162962855278, -34.00027525171899],
    [25.673096063558916, -34.00029501956639],
    [25.6723621395964, -33.99928685095348],
    [25.67159911649287, -33.999291792979406]
  ];

  constructor(
    private appService: AppService
  ) {
    Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(MAPBOX_API);
  }

  ngOnInit() {
    this.generateMap();
  }

  // Generates map data
  generateMap() {
    const latLng = new mapboxgl.LngLat(this.longitude, this.latitude);
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/eagleeye25/cjjyumx0a8cph2smuvg6kgp39',
      center: latLng,
      zoom: 16,
    });

    map.on('load', function() {
      map.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: [this.drawingCo]
            }
          }
        },
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
      offset: [0, 0]
    })
    .setLngLat(latLng)
    .addTo(map);
    // this.map.scrollZoom.disable();
    // this.map.dragPan.disable();
  }

}
