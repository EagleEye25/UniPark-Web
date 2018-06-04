import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PreloadingStrategy, PreloadAllModules, Route} from '@angular/router';

import {LandingComponent} from './landing/landing.component';
import {UniparkPageComponent} from './unipark-page/unipark-page.component';

/* actual routing */
const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'admin', component: UniparkPageComponent, pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules});

