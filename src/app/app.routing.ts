import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PreloadingStrategy, PreloadAllModules, Route} from '@angular/router';

import {LandingComponent} from './landing/landing.component';
import {UniparkPageComponent} from './unipark-page/unipark-page.component';
import {ViewAssignedParkingComponent} from './user-options/view-assigned-parking/view-assigned-parking.component';
import { UserInfoComponent } from './user-options/user-info/user-info.component';
import { UpdateUserInfoComponent } from './user-options/update-user-info/update-user-info.component';
import { RequestParkingComponent } from './user-options/request-parking/request-parking.component';
import { InfringementsComponent } from './user-options/infringements/infringements.component';
import { ViewRequestsComponent } from './user-options/view-requests/view-requests.component';

/* actual routing */
const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'admin', component: UniparkPageComponent, children: [
    { path: 'user-information', component: UserInfoComponent, pathMatch: 'full'},
    { path: 'update-user-info', component: UpdateUserInfoComponent, pathMatch: 'full'},
    { path: 'assigned-parking', component: ViewAssignedParkingComponent, pathMatch: 'full'},
    { path: 'request-parking', component: RequestParkingComponent, pathMatch: 'full'},
    { path: 'infringments', component: InfringementsComponent, pathMatch: 'full'},
    { path: 'view-requests', component: ViewRequestsComponent, pathMatch: 'full'}
  ]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules});

