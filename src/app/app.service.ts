import { Injectable } from '@angular/core';

const appState = {};

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
