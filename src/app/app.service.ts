import { Injectable } from '@angular/core';

// const appState = {};

const appState = {FacilityID: 's216017173'};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getState(key) {
    return appState[key];
  }

  setState(key, value) {
    return appState[key] = value;
  }
}

// export const BASE_URL = 'https://unipark.lunatech.co.za';
export const BASE_URL = 'http://localhost:9000';
export const MAPBOX_API = 'pk.eyJ1IjoiZWFnbGVleWUyNSIsImEiOiJjamp0NHcwbGcwaWVjM3BvMHdjOGx3dTZuIn0.wpJ4XdLSb2zBpJ8G36E7Fw';
