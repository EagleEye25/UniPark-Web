import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { LandingComponent } from './landing/landing.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UniparkPageComponent } from './unipark-page/unipark-page.component';
import { UserInfoComponent } from './user-options/user-info/user-info.component';
import { UpdateUserInfoComponent } from './user-options/update-user-info/update-user-info.component';
import { ViewAssignedParkingComponent } from './user-options/view-assigned-parking/view-assigned-parking.component';
import { RequestParkingComponent } from './user-options/request-parking/request-parking.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginDialogComponent,
    UniparkPageComponent,
    UserInfoComponent,
    UpdateUserInfoComponent,
    ViewAssignedParkingComponent,
    RequestParkingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    LoginDialogComponent,
    UserInfoComponent,
    RequestParkingComponent,
    UpdateUserInfoComponent,
    ViewAssignedParkingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
