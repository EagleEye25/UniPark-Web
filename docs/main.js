(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n \r\n<app-unipark-page></app-unipark-page>\r\n\r\n-->\r\n<!--\r\n\r\n    \r\n\r\n   -->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-dialog/login-dialog.component */ "./src/app/login-dialog/login-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _unipark_page_unipark_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./unipark-page/unipark-page.component */ "./src/app/unipark-page/unipark-page.component.ts");
/* harmony import */ var _user_options_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-options/user-info/user-info.component */ "./src/app/user-options/user-info/user-info.component.ts");
/* harmony import */ var _user_options_update_user_info_update_user_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-options/update-user-info/update-user-info.component */ "./src/app/user-options/update-user-info/update-user-info.component.ts");
/* harmony import */ var _user_options_view_assigned_parking_view_assigned_parking_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-options/view-assigned-parking/view-assigned-parking.component */ "./src/app/user-options/view-assigned-parking/view-assigned-parking.component.ts");
/* harmony import */ var _user_options_request_parking_request_parking_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-options/request-parking/request-parking.component */ "./src/app/user-options/request-parking/request-parking.component.ts");
/* harmony import */ var _user_options_infringements_infringements_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-options/infringements/infringements.component */ "./src/app/user-options/infringements/infringements.component.ts");
/* harmony import */ var _user_options_help_help_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-options/help/help.component */ "./src/app/user-options/help/help.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _user_options_view_requests_view_requests_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user-options/view-requests/view-requests.component */ "./src/app/user-options/view-requests/view-requests.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var AppModule = /** @class */ (function () {
    function AppModule(matIconRegistry, domSanitizer) {
        matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_9__["LoginDialogComponent"],
                _unipark_page_unipark_page_component__WEBPACK_IMPORTED_MODULE_11__["UniparkPageComponent"],
                _user_options_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_12__["UserInfoComponent"],
                _user_options_update_user_info_update_user_info_component__WEBPACK_IMPORTED_MODULE_13__["UpdateUserInfoComponent"],
                _user_options_view_assigned_parking_view_assigned_parking_component__WEBPACK_IMPORTED_MODULE_14__["ViewAssignedParkingComponent"],
                _user_options_request_parking_request_parking_component__WEBPACK_IMPORTED_MODULE_15__["RequestParkingComponent"],
                _user_options_help_help_component__WEBPACK_IMPORTED_MODULE_17__["HelpComponent"],
                _user_options_infringements_infringements_component__WEBPACK_IMPORTED_MODULE_16__["InfringementsComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_20__["MapComponent"],
                _user_options_view_requests_view_requests_component__WEBPACK_IMPORTED_MODULE_21__["ViewRequestsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_18__["routing"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"]
            ],
            entryComponents: [
                _login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_9__["LoginDialogComponent"],
                _user_options_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_12__["UserInfoComponent"],
                _user_options_request_parking_request_parking_component__WEBPACK_IMPORTED_MODULE_15__["RequestParkingComponent"],
                _user_options_update_user_info_update_user_info_component__WEBPACK_IMPORTED_MODULE_13__["UpdateUserInfoComponent"],
                _user_options_view_assigned_parking_view_assigned_parking_component__WEBPACK_IMPORTED_MODULE_14__["ViewAssignedParkingComponent"],
                _user_options_infringements_infringements_component__WEBPACK_IMPORTED_MODULE_16__["InfringementsComponent"],
                _user_options_help_help_component__WEBPACK_IMPORTED_MODULE_17__["HelpComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _unipark_page_unipark_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unipark-page/unipark-page.component */ "./src/app/unipark-page/unipark-page.component.ts");
/* harmony import */ var _user_options_view_assigned_parking_view_assigned_parking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-options/view-assigned-parking/view-assigned-parking.component */ "./src/app/user-options/view-assigned-parking/view-assigned-parking.component.ts");
/* harmony import */ var _user_options_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-options/user-info/user-info.component */ "./src/app/user-options/user-info/user-info.component.ts");
/* harmony import */ var _user_options_update_user_info_update_user_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-options/update-user-info/update-user-info.component */ "./src/app/user-options/update-user-info/update-user-info.component.ts");
/* harmony import */ var _user_options_request_parking_request_parking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-options/request-parking/request-parking.component */ "./src/app/user-options/request-parking/request-parking.component.ts");
/* harmony import */ var _user_options_infringements_infringements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-options/infringements/infringements.component */ "./src/app/user-options/infringements/infringements.component.ts");
/* harmony import */ var _user_options_view_requests_view_requests_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-options/view-requests/view-requests.component */ "./src/app/user-options/view-requests/view-requests.component.ts");










/* actual routing */
var routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"], pathMatch: 'full' },
    { path: 'admin', component: _unipark_page_unipark_page_component__WEBPACK_IMPORTED_MODULE_2__["UniparkPageComponent"], children: [
            { path: 'user-information', component: _user_options_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_4__["UserInfoComponent"], pathMatch: 'full' },
            { path: 'update-user-info', component: _user_options_update_user_info_update_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UpdateUserInfoComponent"], pathMatch: 'full' },
            { path: 'assigned-parking', component: _user_options_view_assigned_parking_view_assigned_parking_component__WEBPACK_IMPORTED_MODULE_3__["ViewAssignedParkingComponent"], pathMatch: 'full' },
            { path: 'request-parking', component: _user_options_request_parking_request_parking_component__WEBPACK_IMPORTED_MODULE_6__["RequestParkingComponent"], pathMatch: 'full' },
            { path: 'infringments', component: _user_options_infringements_infringements_component__WEBPACK_IMPORTED_MODULE_7__["InfringementsComponent"], pathMatch: 'full' },
            { path: 'view-requests', component: _user_options_view_requests_view_requests_component__WEBPACK_IMPORTED_MODULE_8__["ViewRequestsComponent"], pathMatch: 'full' }
        ] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"] });


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService, BASE_URL, MAPBOX_API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAPBOX_API", function() { return MAPBOX_API; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var appState = {};
// const appState = {FacilityID: 's216017173'};
var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService.prototype.getState = function (key) {
        return appState[key];
    };
    AppService.prototype.setState = function (key, value) {
        return appState[key] = value;
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());

var BASE_URL = 'https://unipark.lunatech.co.za';
// export const BASE_URL = 'http://localhost:9000';
var MAPBOX_API = 'pk.eyJ1IjoiZWFnbGVleWUyNSIsImEiOiJjamp0NHcwbGcwaWVjM3BvMHdjOGx3dTZuIn0.wpJ4XdLSb2zBpJ8G36E7Fw';


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Toolbar with menu button, menu items -->\r\n<div>\r\n    <mat-toolbar color=\"primary\">\r\n        <!-- Displays DC image -->\r\n        <img src=\"assets/images/branding/dc.png\" alt=\"DC\">\r\n        <span class=\"spacer\"></span>\r\n        \r\n        <button mat-button (click)=\"openLoginDialog()\"\r\n          matTooltip=\"CLick here to login\"\r\n          matTooltipPosition=\"before\">\r\n          <mat-icon>fingerprint</mat-icon>\r\n          <span>Login</span>\r\n        </button>\r\n    </mat-toolbar>\r\n    <!-- TabGroup  under toolbar -->\r\n    <mat-tab-group>\r\n        <!-- Dragon code tab -->\r\n        <mat-tab label=\"Dragon Code\">\r\n          <!-- Displays Dragon Code image -->\r\n          <img src=\"assets/images/branding/dragon-code-name.gif\" alt=\"Dragon Code\" class=\"center\">\r\n          <!-- Dragon code information -->\r\n          <mat-tab-group class=\"center\">\r\n            <mat-tab label=\"Information\">\r\n              <p>\r\n                Dragon Code is a group of third year students from Mandela University, that have been given\r\n                the task to create an \"Advanced\", secure parking system for the university. In which they saw\r\n                greater opertunities, and decided to develope their project, so that it could be used by not\r\n                only the university, but any other minor, major facilities that wish to ensure that their\r\n                personnel have save parking areas, with little to no chance of theft of vehicles, and also\r\n                improve the way in which they monitor and control who has access to the facility, and when.\r\n              </p>\r\n            </mat-tab>\r\n            <!-- Crew images, names -->\r\n            <mat-tab label=\"Crew\">\r\n              <p><br></p>\r\n              <div class=\"align-text-picture\">\r\n                <!-- Jason Eybers INFO -->\r\n                  <img src=\"assets/images/crew/jason.png\" alt=\"Jason Eybers\">\r\n                  <p> Jason Eybers<br>(Steve Jobless) <br>\r\n                    <mat-icon svgIcon=\"github-circle\"\r\n                              onclick=\"window.open('https://github.com/EagleEye25/')\"\r\n                              matTooltip=\"Github\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n                    <mat-icon svgIcon=\"linkedin-box\"\r\n                              onclick=\"window.open('https://www.linkedin.com/in/jason-henry-eybers-b63422157/')\"\r\n                              matTooltip=\"Linkedin\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n                    <mat-icon svgIcon=\"slack\"\r\n                              matTooltip=\"Slack username\"\r\n                              matTooltipPosition=\"below\">\r\n                    </mat-icon>\r\n                    <mat-icon svgIcon=\"twitter\"\r\n                              onclick=\"window.open('https://twitter.com/JasonEybers')\"\r\n                              matTooltip=\"Twitter\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n                    <mat-icon svgIcon=\"stack-overflow\"\r\n                              onclick=\"window.open('https://stackoverflow.com/users/9384658/eagleeye25')\"\r\n                              onclick=\"window.close()\"\r\n                              matTooltip=\"Stack-Overflow\"\r\n                              matTooltipPosition=\"below\">>s\r\n                    </mat-icon>\r\n                    <mat-icon svgIcon=\"email\"\r\n                              onclick=\"window.open('mailto:s216017173@mandela.ac.za?subject=Subject&body=message%20goes%20here')\"\r\n                              matTooltip=\"Email\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n                  </p>\r\n              </div>\r\n              <!-- Daniel Maree INFO -->\r\n              <div class=\"align-text-picture\">\r\n                  <img src=\"assets/images/crew/daniel.png\" alt=\"Daniel Maree\">\r\n                  <p>Daniel Maree<br>(Copy Paster) <br>\r\n                    <mat-icon svgIcon=\"github-circle\"\r\n                              onclick=\"window.open('https://github.com/DieWindpomp')\"\r\n                              matTooltip=\"Github\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n                    <mat-icon svgIcon=\"linkedin-box\"\r\n                              onclick=\"window.open('https://www.linkedin.com/in/daniel-maree-53308b165/')\"\r\n                              matTooltip=\"Linkedin\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n                    <mat-icon svgIcon=\"instagram\"\r\n                              onclick=\"window.open('https://www.instagram.com/diewindpomp/')\"\r\n                              matTooltip=\"Instagram\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n                    <mat-icon svgIcon=\"facebook\"\r\n                              onclick=\"window.open('https://www.facebook.com/windpomp')\"\r\n                              matTooltip=\"Facebook\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n                    <mat-icon svgIcon=\"email\"\r\n                              onclick=\"window.open('mailto:s216448816@mandela.ac.za?subject=Subject&body=message%20goes%20here')\"\r\n                              matTooltip=\"Email\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n                  </p>\r\n              </div>\r\n              <!-- Wihan Du Plessis INFO -->\r\n              <div class=\"align-text-picture\">\r\n                  <img src=\"assets/images/crew/wihan.png\" alt=\"Wihan Du Plessis\">\r\n                  <p>Wihan Du Plessis<br>(Data Monkey) <br>\r\n                    <mat-icon svgIcon=\"github-circle\"\r\n                              onclick=\"window.open('https://github.com/EagleEye25/')\"\r\n                              matTooltip=\"Github\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n\r\n                    <mat-icon svgIcon=\"email\"\r\n                              onclick=\"window.open('mailto:s216060184@mandela.ac.za?subject=Subject&body=message%20goes%20here')\"\r\n                              matTooltip=\"Email\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n                  </p>\r\n              </div>\r\n              <!-- Kobus Esterhuizen INFO -->\r\n              <div class=\"align-text-picture\">\r\n                  <img src=\"assets/images/crew/kobus.png\" alt=\"Kobus Esterhuizen\">\r\n                  <p>Kobus Esterhuizen<br>(Code-Modo Dragon) <br>\r\n                    <mat-icon svgIcon=\"github-circle\"\r\n                              onclick=\"window.open('https://github.com/Kabousi/')\"\r\n                              matTooltip=\"Github\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n\r\n                    <mat-icon svgIcon=\"email\"\r\n                              onclick=\"window.open('mailto:s216276586@mandela.ac.za?subject=Subject&body=message%20goes%20here')\"\r\n                              matTooltip=\"Email\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n                  </p>\r\n              </div>\r\n              <!-- Maurice Garces De Gois INFO -->\r\n              <div class=\"align-text-picture\">\r\n                  <img src=\"assets/images/crew/maurice.png\" alt=\"Maurice Garcies De Gois\">\r\n                  <p>Maurice Garces<br>De Gois<br>(Ctrl-SpaceFreak) <br>\r\n                    <mat-icon svgIcon=\"github-circle\"\r\n                              onclick=\"window.open('https://github.com/Mauricegdg/')\"\r\n                              matTooltip=\"Github\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n\r\n                    <mat-icon svgIcon=\"email\"\r\n                              onclick=\"window.open('mailto:s216111919@mandela.ac.za?subject=Subject&body=message%20goes%20here')\"\r\n                              matTooltip=\"Email\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n                  </p>\r\n              </div>\r\n            </mat-tab>\r\n          </mat-tab-group>\r\n        </mat-tab>\r\n        <mat-tab label=\"UniPark\">\r\n          <!-- Displays UniPark image -->\r\n          <img src=\"assets/images/branding/unipark.png\" alt=\"UniPark\" class=\"center-unipark\">\r\n            <!-- Unipark information -->  \r\n            <mat-tab-group class=\"center\">\r\n              <!-- Information -->\r\n              <mat-tab label=\"What is UniPark\">\r\n                <p>UniPark is an open souce project for a fully automated parking system, that will allow users that\r\n                  have access to a facilities parking area to enter. \r\n                  The program is securely setup to prevent unauthorized users\r\n                  access to the facility, also to help the facility to control traffic, ensure that person/s\r\n                  in the facility park in the correct area, which is assigned to them. The aim of the system\r\n                  is to improve security of the facility, and ensure that little to no theft occurs regarding motor vehicles.\r\n                </p>\r\n              </mat-tab>\r\n              <!-- The looks tab -->\r\n              <mat-tab label=\"The Looks\">\r\n                <p> Picutres of unipark goes here when its completed! </p>\r\n              </mat-tab>\r\n              <!-- Intallation tab -->\r\n              <mat-tab label=\"Installation\">\r\n                <!-- install (developers) -->\r\n                <p>\r\n                  To access UniPark repository (Developers): &nbsp;\r\n                    <button mat-button \r\n                            onclick=\"window.open('https://github.com/EagleEye25/uniPark-BackEnd')\">\r\n                      <mat-icon svgIcon=\"github-circle\"></mat-icon>\r\n                      Repository\r\n                    </button>\r\n                  <!-- install -->\r\n                    <br>\r\n                  To install Unipark click: &nbsp;\r\n                    <button mat-button \r\n                            onclick=\"window.open('https://github.com/EagleEye25/uniPark-BackEnd')\">\r\n                      <mat-icon svgIcon=\"download\"></mat-icon>\r\n                      DownLoad\r\n                    </button>\r\n                </p>\r\n              </mat-tab>\r\n            </mat-tab-group>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n.mat-badge-content {\n  font-weight: 600;\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-badge-small .mat-badge-content {\n  font-size: 6px; }\n.mat-badge-large .mat-badge-content {\n  font-size: 24px; }\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h5, .mat-typography h5 {\n  font: 400 11.62px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-h6, .mat-typography h6 {\n  font: 400 9.38px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n.mat-bottom-sheet-container {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400; }\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-stroked-button,\n.mat-flat-button, .mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n.mat-chip {\n  font-size: 13px;\n  line-height: 18px; }\n.mat-chip .mat-chip-trailing-icon.mat-icon,\n  .mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n.mat-cell, .mat-footer-cell {\n  font-size: 14px; }\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-calendar-body {\n  font-size: 13px; }\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field {\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field-wrapper {\n  padding-bottom: 1.34375em; }\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n.mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n.mat-form-field-infix {\n  padding: 0.5em 0;\n  border-top: 0.84375em solid transparent; }\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.34375em) scale(0.75);\n          transform: translateY(-1.34375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.34374em) scale(0.75);\n          transform: translateY(-1.34374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-label-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n.mat-form-field-label {\n  top: 1.34375em; }\n.mat-form-field-underline {\n  bottom: 1.34375em; }\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.66666667em;\n  top: calc(100% - 1.79166667em); }\n.mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n.mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.4375em 0; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.33335333%; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  top: 1.28125em; }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  bottom: 1.25em; }\n.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper {\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n.mat-form-field-appearance-fill .mat-form-field-infix {\n  padding: 0.25em 0 0.75em 0; }\n.mat-form-field-appearance-fill .mat-form-field-label {\n  top: 1.09375em;\n  margin-top: -0.5em; }\n.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-0.59375em) scale(0.75);\n          transform: translateY(-0.59375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-0.59374em) scale(0.75);\n          transform: translateY(-0.59374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 1em 0 1em 0; }\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  bottom: 1.34375em; }\n.mat-form-field-appearance-outline .mat-form-field-label {\n  top: 1.84375em;\n  margin-top: -0.25em; }\n.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.59375em) scale(0.75);\n          transform: translateY(-1.59375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.59374em) scale(0.75);\n          transform: translateY(-1.59374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n.mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select-trigger {\n  height: 1.125em; }\n.mat-slide-toggle-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-step-label {\n  font-size: 14px;\n  font-weight: 400; }\n.mat-step-label-selected {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n.mat-tooltip-handset {\n  font-size: 14px;\n  padding-top: 9px;\n  padding-bottom: 9px; }\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  font-size: 16px; }\n.mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  font-size: 16px; }\n.mat-list .mat-list-option .mat-line, .mat-nav-list .mat-list-option .mat-line, .mat-selection-list .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line, .mat-selection-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-option .mat-line, .mat-nav-list[dense] .mat-list-option .mat-line, .mat-selection-list[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n.mat-tree {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tree-node {\n  font-weight: 400;\n  font-size: 14px; }\n.mat-ripple {\n  overflow: hidden; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-ripple {\n      display: none; } }\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n.cdk-overlay-container:empty {\n    display: none; }\n.cdk-global-overlay-wrapper {\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%; }\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 1; }\n@media screen and (-ms-high-contrast: active) {\n      .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n        opacity: 0.6; } }\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.288); }\n.cdk-overlay-transparent-backdrop, .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 0; }\n.cdk-overlay-connected-position-bounding-box {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px; }\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n@-webkit-keyframes cdk-text-field-autofill-start {}\n@keyframes cdk-text-field-autofill-start {}\n@-webkit-keyframes cdk-text-field-autofill-end {}\n@keyframes cdk-text-field-autofill-end {}\n.cdk-text-field-autofill-monitored:-webkit-autofill {\n  -webkit-animation-name: cdk-text-field-autofill-start;\n          animation-name: cdk-text-field-autofill-start; }\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  -webkit-animation-name: cdk-text-field-autofill-end;\n          animation-name: cdk-text-field-autofill-end; }\ntextarea.cdk-textarea-autosize {\n  resize: none; }\ntextarea.cdk-textarea-autosize-measuring {\n  height: auto !important;\n  overflow: hidden !important;\n  padding: 2px 0 !important;\n  box-sizing: content-box !important; }\n.mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1); }\n.mat-option {\n  color: white; }\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(255, 255, 255, 0.04); }\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(255, 255, 255, 0.04); }\n.mat-option.mat-active {\n    background: rgba(255, 255, 255, 0.04);\n    color: white; }\n.mat-option.mat-option-disabled {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #ff1744; }\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #ff8a80; }\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #f44336; }\n.mat-optgroup-label {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-pseudo-checkbox {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-pseudo-checkbox::after {\n    color: #303030; }\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #ff8a80; }\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #ff1744; }\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #f44336; }\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #686868; }\n.mat-app-background {\n  background-color: #303030;\n  color: white; }\n.mat-theme-loaded-marker {\n  display: none; }\n.mat-autocomplete-panel {\n  background: #424242;\n  color: white; }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: #424242; }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: white; }\n.mat-badge-content {\n  color: white;\n  background: #ff1744; }\n.mat-badge-accent .mat-badge-content {\n  background: #ff8a80;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-badge-warn .mat-badge-content {\n  color: white;\n  background: #f44336; }\n.mat-badge {\n  position: relative; }\n.mat-badge-hidden .mat-badge-content {\n  display: none; }\n.mat-badge-content {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: -webkit-transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none; }\n.mat-badge-content.mat-badge-active {\n  -webkit-transform: none;\n          transform: none; }\n.mat-badge-small .mat-badge-content {\n  width: 16px;\n  height: 16px;\n  line-height: 16px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-small .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-small.mat-badge-above .mat-badge-content {\n  top: -8px; }\n.mat-badge-small.mat-badge-below .mat-badge-content {\n  bottom: -8px; }\n.mat-badge-small.mat-badge-before {\n  margin-left: 16px; }\n.mat-badge-small.mat-badge-before .mat-badge-content {\n    left: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-before {\n  margin-left: 0;\n  margin-right: 16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -16px; }\n.mat-badge-small.mat-badge-after {\n  margin-right: 16px; }\n.mat-badge-small.mat-badge-after .mat-badge-content {\n    right: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-after {\n  margin-right: 0;\n  margin-left: 16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -16px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-before {\n  margin-left: 8px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-before {\n  margin-left: 0;\n  margin-right: 8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -8px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-after {\n  margin-right: 8px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-after {\n  margin-right: 0;\n  margin-left: 16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -8px; }\n.mat-badge-medium .mat-badge-content {\n  width: 22px;\n  height: 22px;\n  line-height: 22px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-medium .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-medium.mat-badge-above .mat-badge-content {\n  top: -11px; }\n.mat-badge-medium.mat-badge-below .mat-badge-content {\n  bottom: -11px; }\n.mat-badge-medium.mat-badge-before {\n  margin-left: 22px; }\n.mat-badge-medium.mat-badge-before .mat-badge-content {\n    left: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-before {\n  margin-left: 0;\n  margin-right: 22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -22px; }\n.mat-badge-medium.mat-badge-after {\n  margin-right: 22px; }\n.mat-badge-medium.mat-badge-after .mat-badge-content {\n    right: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-after {\n  margin-right: 0;\n  margin-left: 22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -22px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-before {\n  margin-left: 11px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-before {\n  margin-left: 0;\n  margin-right: 11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -11px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-after {\n  margin-right: 11px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-after {\n  margin-right: 0;\n  margin-left: 22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -11px; }\n.mat-badge-large .mat-badge-content {\n  width: 28px;\n  height: 28px;\n  line-height: 28px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-large .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-large.mat-badge-above .mat-badge-content {\n  top: -14px; }\n.mat-badge-large.mat-badge-below .mat-badge-content {\n  bottom: -14px; }\n.mat-badge-large.mat-badge-before {\n  margin-left: 28px; }\n.mat-badge-large.mat-badge-before .mat-badge-content {\n    left: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-before {\n  margin-left: 0;\n  margin-right: 28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -28px; }\n.mat-badge-large.mat-badge-after {\n  margin-right: 28px; }\n.mat-badge-large.mat-badge-after .mat-badge-content {\n    right: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-after {\n  margin-right: 0;\n  margin-left: 28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -28px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-before {\n  margin-left: 14px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-before {\n  margin-left: 0;\n  margin-right: 14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -14px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-after {\n  margin-right: 14px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-after {\n  margin-right: 0;\n  margin-left: 28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -14px; }\n.mat-bottom-sheet-container {\n  background: #424242;\n  color: white; }\n.mat-button, .mat-icon-button, .mat-stroked-button {\n  color: inherit;\n  background: transparent; }\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\n    color: #ff1744; }\n.mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent {\n    color: #ff8a80; }\n.mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn {\n    color: #f44336; }\n.mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled], .mat-stroked-button.mat-primary[disabled], .mat-stroked-button.mat-accent[disabled], .mat-stroked-button.mat-warn[disabled], .mat-stroked-button[disabled][disabled] {\n    color: rgba(255, 255, 255, 0.3); }\n.mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(255, 23, 68, 0.12); }\n.mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(255, 138, 128, 0.12); }\n.mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n.mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay, .mat-stroked-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n.mat-button.mat-primary .mat-ripple-element, .mat-icon-button.mat-primary .mat-ripple-element, .mat-stroked-button.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 23, 68, 0.1); }\n.mat-button.mat-accent .mat-ripple-element, .mat-icon-button.mat-accent .mat-ripple-element, .mat-stroked-button.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 138, 128, 0.1); }\n.mat-button.mat-warn .mat-ripple-element, .mat-icon-button.mat-warn .mat-ripple-element, .mat-stroked-button.mat-warn .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.1); }\n.mat-flat-button, .mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: white;\n  background-color: #424242; }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: rgba(0, 0, 0, 0.87); }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(255, 255, 255, 0.3); }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #ff1744; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #ff8a80; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #f44336; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(255, 255, 255, 0.12); }\n.mat-flat-button.mat-primary .mat-ripple-element, .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-accent .mat-ripple-element, .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(0, 0, 0, 0.1); }\n.mat-flat-button.mat-warn .mat-ripple-element, .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(255, 23, 68, 0.2); }\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(255, 138, 128, 0.2); }\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.2); }\n.mat-button-toggle {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-button-toggle .mat-button-toggle-focus-overlay {\n    background-color: rgba(255, 255, 255, 0.12); }\n.mat-button-toggle-checked {\n  background-color: #212121;\n  color: rgba(255, 255, 255, 0.7); }\n.mat-button-toggle-disabled {\n  background-color: black;\n  color: rgba(255, 255, 255, 0.3); }\n.mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #424242; }\n.mat-card {\n  background: #424242;\n  color: white; }\n.mat-card-subtitle {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-checkbox-frame {\n  border-color: rgba(255, 255, 255, 0.7); }\n.mat-checkbox-checkmark {\n  fill: #303030; }\n.mat-checkbox-checkmark-path {\n  stroke: #303030 !important; }\n.mat-checkbox-mixedmark {\n  background-color: #303030; }\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #ff1744; }\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #ff8a80; }\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f44336; }\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #686868; }\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #686868; }\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #686868; }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(255, 23, 68, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(255, 138, 128, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-chip.mat-standard-chip {\n  background-color: #616161;\n  color: white; }\n.mat-chip.mat-standard-chip .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {\n  background-color: #ff1744;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {\n  background-color: #f44336;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {\n  background-color: #ff8a80;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-table {\n  background: #424242; }\nmat-row, mat-header-row, mat-footer-row,\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  border-bottom-color: rgba(255, 255, 255, 0.12); }\n.mat-header-cell {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-cell, .mat-footer-cell {\n  color: white; }\n.mat-calendar-arrow {\n  border-top-color: white; }\n.mat-datepicker-toggle,\n.mat-datepicker-popup .mat-calendar-next-button,\n.mat-datepicker-popup .mat-calendar-previous-button {\n  color: white; }\n.mat-calendar-table-header {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-calendar-table-header-divider::after {\n  background: rgba(255, 255, 255, 0.12); }\n.mat-calendar-body-label {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-calendar-body-cell-content {\n  color: white;\n  border-color: transparent; }\n.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(255, 255, 255, 0.04); }\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(255, 255, 255, 0.5); }\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(255, 255, 255, 0.3); }\n.mat-calendar-body-selected {\n  background-color: #ff1744;\n  color: white; }\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(255, 23, 68, 0.4); }\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content {\n  background-color: #424242;\n  color: white; }\n.mat-datepicker-content.mat-accent .mat-calendar-body-selected {\n    background-color: #ff8a80;\n    color: rgba(0, 0, 0, 0.87); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(255, 138, 128, 0.4); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.87); }\n.mat-datepicker-content.mat-warn .mat-calendar-body-selected {\n    background-color: #f44336;\n    color: white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(244, 67, 54, 0.4); }\n.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-toggle-active {\n  color: #ff1744; }\n.mat-datepicker-toggle-active.mat-accent {\n    color: #ff8a80; }\n.mat-datepicker-toggle-active.mat-warn {\n    color: #f44336; }\n.mat-dialog-container {\n  background: #424242;\n  color: white; }\n.mat-divider {\n  border-top-color: rgba(255, 255, 255, 0.12); }\n.mat-divider-vertical {\n  border-right-color: rgba(255, 255, 255, 0.12); }\n.mat-expansion-panel {\n  background: #424242;\n  color: white; }\n.mat-action-row {\n  border-top-color: rgba(255, 255, 255, 0.12); }\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(255, 255, 255, 0.04); }\n.mat-expansion-panel-header-title {\n  color: white; }\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(255, 255, 255, 0.3); }\n.mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n.mat-form-field-label {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-hint {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-form-field.mat-focused .mat-form-field-label {\n  color: #ff1744; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-accent {\n    color: #ff8a80; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-warn {\n    color: #f44336; }\n.mat-focused .mat-form-field-required-marker {\n  color: #ff8a80; }\n.mat-form-field-ripple {\n  background-color: white; }\n.mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #ff1744; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {\n    background-color: #ff8a80; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {\n    background-color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple {\n  background-color: #f44336; }\n.mat-error {\n  color: #f44336; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-form-field-appearance-legacy .mat-hint {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: rgba(255, 255, 255, 0.7); }\n.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-standard .mat-form-field-underline {\n  background-color: rgba(255, 255, 255, 0.7); }\n.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: rgba(255, 255, 255, 0.1); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {\n  background-color: rgba(255, 255, 255, 0.05); }\n.mat-form-field-appearance-fill .mat-form-field-underline::before {\n  background-color: rgba(255, 255, 255, 0.5); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {\n  background-color: transparent; }\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  color: rgba(255, 255, 255, 0.3); }\n.mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: white; }\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #ff1744; }\n.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {\n  color: #ff8a80; }\n.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick {\n  color: #f44336; }\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #f44336; }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {\n  color: rgba(255, 255, 255, 0.15); }\n.mat-icon.mat-primary {\n  color: #ff1744; }\n.mat-icon.mat-accent {\n  color: #ff8a80; }\n.mat-icon.mat-warn {\n  color: #f44336; }\n.mat-input-element:disabled {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-input-element {\n  caret-color: #ff1744; }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-input-element:-ms-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-input-element::-ms-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-input-element::placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-input-element::-moz-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-input-element:-ms-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-accent .mat-input-element {\n  caret-color: #ff8a80; }\n.mat-warn .mat-input-element,\n.mat-form-field-invalid .mat-input-element {\n  caret-color: #f44336; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  color: white; }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  color: white; }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-list-item-disabled {\n  background-color: black; }\n.mat-list-option:hover, .mat-list-option.mat-list-item-focus,\n.mat-nav-list .mat-list-item:hover,\n.mat-nav-list .mat-list-item.mat-list-item-focus {\n  background: rgba(255, 255, 255, 0.04); }\n.mat-menu-panel {\n  background: #424242; }\n.mat-menu-item {\n  background: transparent;\n  color: white; }\n.mat-menu-item[disabled], .mat-menu-item[disabled]::after {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-menu-item .mat-icon:not([color]),\n.mat-menu-item-submenu-trigger::after {\n  color: white; }\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item.cdk-program-focused:not([disabled]),\n.mat-menu-item.cdk-keyboard-focused:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(255, 255, 255, 0.04); }\n.mat-paginator {\n  background: #424242; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-paginator-decrement,\n.mat-paginator-increment {\n  border-top: 2px solid white;\n  border-right: 2px solid white; }\n.mat-paginator-first,\n.mat-paginator-last {\n  border-top: 2px solid white; }\n.mat-icon-button[disabled] .mat-paginator-decrement,\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-first,\n.mat-icon-button[disabled] .mat-paginator-last {\n  border-color: rgba(255, 255, 255, 0.5); }\n.mat-progress-bar-background {\n  fill: #ffcdd2; }\n.mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n.mat-progress-bar-fill::after {\n  background-color: #ff1744; }\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  fill: #ffcdd2; }\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #ff8a80; }\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  fill: #ffcdd2; }\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #f44336; }\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #ff1744; }\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #ff8a80; }\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #f44336; }\n.mat-radio-outer-circle {\n  border-color: rgba(255, 255, 255, 0.7); }\n.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(255, 255, 255, 0.5); }\n.mat-radio-disabled .mat-radio-ripple .mat-ripple-element, .mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(255, 255, 255, 0.5); }\n.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #ff1744; }\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #ff1744; }\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(255, 23, 68, 0.26); }\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #ff8a80; }\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #ff8a80; }\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(255, 138, 128, 0.26); }\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-select-content, .mat-select-panel-done-animating {\n  background: #424242; }\n.mat-select-value {\n  color: white; }\n.mat-select-placeholder {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-select-disabled .mat-select-value {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-select-arrow {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(255, 255, 255, 0.12); }\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #ff1744; }\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #ff8a80; }\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-drawer-container {\n  background-color: #303030;\n  color: white; }\n.mat-drawer {\n  background-color: #424242;\n  color: white; }\n.mat-drawer.mat-drawer-push {\n    background-color: #424242; }\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(189, 189, 189, 0.6); }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #ef9a9a; }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(239, 154, 154, 0.5); }\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(239, 154, 154, 0.12); }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #ef9a9a; }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(239, 154, 154, 0.5); }\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(239, 154, 154, 0.12); }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #ef9a9a; }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(239, 154, 154, 0.5); }\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(239, 154, 154, 0.12); }\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #424242; }\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n.mat-slide-toggle-bar {\n  background-color: rgba(255, 255, 255, 0.5); }\n.mat-slider-track-background {\n  background-color: rgba(255, 255, 255, 0.3); }\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #ff1744; }\n.mat-primary .mat-slider-thumb-label-text {\n  color: white; }\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #ff8a80; }\n.mat-accent .mat-slider-thumb-label-text {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #f44336; }\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n.mat-slider-focus-ring {\n  background-color: rgba(255, 138, 128, 0.2); }\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(255, 255, 255, 0.3); }\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(255, 255, 255, 0.3); }\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(255, 255, 255, 0.3); }\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: white; }\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(255, 255, 255, 0.3); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(255, 255, 255, 0.3);\n  background-color: transparent; }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(255, 255, 255, 0.3); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(255, 255, 255, 0.3); }\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(255, 255, 255, 0.7); }\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent); }\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent); }\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(255, 255, 255, 0.04); }\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-step-header .mat-step-icon {\n  background-color: #ff1744;\n  color: white; }\n.mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(255, 255, 255, 0.5);\n  color: white; }\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: white; }\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: #424242; }\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(255, 255, 255, 0.12); }\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12); }\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n  border-bottom: none; }\n.mat-tab-label, .mat-tab-link {\n  color: white; }\n.mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.5); }\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n.mat-tab-group.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #ff1744; }\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #ff8a80; }\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-tab-group.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #f44336; }\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #ff1744; }\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #ff8a80; }\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.4); }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.4); }\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.12); }\n.mat-tab-group.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #f44336; }\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-toolbar {\n  background: #212121;\n  color: white; }\n.mat-toolbar.mat-primary {\n    background: #ff1744;\n    color: white; }\n.mat-toolbar.mat-accent {\n    background: #ff8a80;\n    color: rgba(0, 0, 0, 0.87); }\n.mat-toolbar.mat-warn {\n    background: #f44336;\n    color: white; }\n.mat-toolbar .mat-form-field-underline,\n  .mat-toolbar .mat-form-field-ripple,\n  .mat-toolbar .mat-focused .mat-form-field-ripple {\n    background-color: currentColor; }\n.mat-toolbar .mat-form-field-label,\n  .mat-toolbar .mat-focused .mat-form-field-label,\n  .mat-toolbar .mat-select-value,\n  .mat-toolbar .mat-select-arrow,\n  .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n    color: inherit; }\n.mat-toolbar .mat-input-element {\n    caret-color: currentColor; }\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n.mat-tree {\n  background: #424242; }\n.mat-tree-node {\n  color: white; }\n.mat-snack-bar-container {\n  background: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-simple-snackbar-action {\n  color: inherit; }\n.alternative .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1); }\n.alternative .mat-option {\n  color: white; }\n.alternative .mat-option:hover:not(.mat-option-disabled), .alternative .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(255, 255, 255, 0.04); }\n.alternative .mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(255, 255, 255, 0.04); }\n.alternative .mat-option.mat-active {\n    background: rgba(255, 255, 255, 0.04);\n    color: white; }\n.alternative .mat-option.mat-option-disabled {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #00e676; }\n.alternative .mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #00c853; }\n.alternative .mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #f44336; }\n.alternative .mat-optgroup-label {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-pseudo-checkbox {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-pseudo-checkbox::after {\n    color: #303030; }\n.alternative .mat-pseudo-checkbox-checked,\n.alternative .mat-pseudo-checkbox-indeterminate,\n.alternative .mat-accent .mat-pseudo-checkbox-checked,\n.alternative .mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #00c853; }\n.alternative .mat-primary .mat-pseudo-checkbox-checked,\n.alternative .mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #00e676; }\n.alternative .mat-warn .mat-pseudo-checkbox-checked,\n.alternative .mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #f44336; }\n.alternative .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.alternative .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #686868; }\n.alternative .mat-app-background, .alternative.mat-app-background {\n  background-color: #303030;\n  color: white; }\n.mat-theme-loaded-marker {\n  display: none; }\n.alternative .mat-autocomplete-panel {\n  background: #424242;\n  color: white; }\n.alternative .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: #424242; }\n.alternative .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: white; }\n.alternative .mat-badge-content {\n  color: rgba(0, 0, 0, 0.87);\n  background: #00e676; }\n.alternative .mat-badge-accent .mat-badge-content {\n  background: #00c853;\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-badge-warn .mat-badge-content {\n  color: white;\n  background: #f44336; }\n.alternative .mat-badge {\n  position: relative; }\n.alternative .mat-badge-hidden .mat-badge-content {\n  display: none; }\n.alternative .mat-badge-content {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: -webkit-transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none; }\n.alternative .mat-badge-content.mat-badge-active {\n  -webkit-transform: none;\n          transform: none; }\n.alternative .mat-badge-small .mat-badge-content {\n  width: 16px;\n  height: 16px;\n  line-height: 16px; }\n@media screen and (-ms-high-contrast: active) {\n    .alternative .mat-badge-small .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.alternative .mat-badge-small.mat-badge-above .mat-badge-content {\n  top: -8px; }\n.alternative .mat-badge-small.mat-badge-below .mat-badge-content {\n  bottom: -8px; }\n.alternative .mat-badge-small.mat-badge-before {\n  margin-left: 16px; }\n.alternative .mat-badge-small.mat-badge-before .mat-badge-content {\n    left: -16px; }\n[dir='rtl'] .alternative .mat-badge-small.mat-badge-before {\n  margin-left: 0;\n  margin-right: 16px; }\n[dir='rtl'] .alternative .mat-badge-small.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -16px; }\n.alternative .mat-badge-small.mat-badge-after {\n  margin-right: 16px; }\n.alternative .mat-badge-small.mat-badge-after .mat-badge-content {\n    right: -16px; }\n[dir='rtl'] .alternative .mat-badge-small.mat-badge-after {\n  margin-right: 0;\n  margin-left: 16px; }\n[dir='rtl'] .alternative .mat-badge-small.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -16px; }\n.alternative .mat-badge-small.mat-badge-overlap.mat-badge-before {\n  margin-left: 8px; }\n.alternative .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: -8px; }\n[dir='rtl'] .alternative .mat-badge-small.mat-badge-overlap.mat-badge-before {\n  margin-left: 0;\n  margin-right: 8px; }\n[dir='rtl'] .alternative .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -8px; }\n.alternative .mat-badge-small.mat-badge-overlap.mat-badge-after {\n  margin-right: 8px; }\n.alternative .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: -8px; }\n[dir='rtl'] .alternative .mat-badge-small.mat-badge-overlap.mat-badge-after {\n  margin-right: 0;\n  margin-left: 16px; }\n[dir='rtl'] .alternative .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -8px; }\n.alternative .mat-badge-medium .mat-badge-content {\n  width: 22px;\n  height: 22px;\n  line-height: 22px; }\n@media screen and (-ms-high-contrast: active) {\n    .alternative .mat-badge-medium .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.alternative .mat-badge-medium.mat-badge-above .mat-badge-content {\n  top: -11px; }\n.alternative .mat-badge-medium.mat-badge-below .mat-badge-content {\n  bottom: -11px; }\n.alternative .mat-badge-medium.mat-badge-before {\n  margin-left: 22px; }\n.alternative .mat-badge-medium.mat-badge-before .mat-badge-content {\n    left: -22px; }\n[dir='rtl'] .alternative .mat-badge-medium.mat-badge-before {\n  margin-left: 0;\n  margin-right: 22px; }\n[dir='rtl'] .alternative .mat-badge-medium.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -22px; }\n.alternative .mat-badge-medium.mat-badge-after {\n  margin-right: 22px; }\n.alternative .mat-badge-medium.mat-badge-after .mat-badge-content {\n    right: -22px; }\n[dir='rtl'] .alternative .mat-badge-medium.mat-badge-after {\n  margin-right: 0;\n  margin-left: 22px; }\n[dir='rtl'] .alternative .mat-badge-medium.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -22px; }\n.alternative .mat-badge-medium.mat-badge-overlap.mat-badge-before {\n  margin-left: 11px; }\n.alternative .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: -11px; }\n[dir='rtl'] .alternative .mat-badge-medium.mat-badge-overlap.mat-badge-before {\n  margin-left: 0;\n  margin-right: 11px; }\n[dir='rtl'] .alternative .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -11px; }\n.alternative .mat-badge-medium.mat-badge-overlap.mat-badge-after {\n  margin-right: 11px; }\n.alternative .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: -11px; }\n[dir='rtl'] .alternative .mat-badge-medium.mat-badge-overlap.mat-badge-after {\n  margin-right: 0;\n  margin-left: 22px; }\n[dir='rtl'] .alternative .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -11px; }\n.alternative .mat-badge-large .mat-badge-content {\n  width: 28px;\n  height: 28px;\n  line-height: 28px; }\n@media screen and (-ms-high-contrast: active) {\n    .alternative .mat-badge-large .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.alternative .mat-badge-large.mat-badge-above .mat-badge-content {\n  top: -14px; }\n.alternative .mat-badge-large.mat-badge-below .mat-badge-content {\n  bottom: -14px; }\n.alternative .mat-badge-large.mat-badge-before {\n  margin-left: 28px; }\n.alternative .mat-badge-large.mat-badge-before .mat-badge-content {\n    left: -28px; }\n[dir='rtl'] .alternative .mat-badge-large.mat-badge-before {\n  margin-left: 0;\n  margin-right: 28px; }\n[dir='rtl'] .alternative .mat-badge-large.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -28px; }\n.alternative .mat-badge-large.mat-badge-after {\n  margin-right: 28px; }\n.alternative .mat-badge-large.mat-badge-after .mat-badge-content {\n    right: -28px; }\n[dir='rtl'] .alternative .mat-badge-large.mat-badge-after {\n  margin-right: 0;\n  margin-left: 28px; }\n[dir='rtl'] .alternative .mat-badge-large.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -28px; }\n.alternative .mat-badge-large.mat-badge-overlap.mat-badge-before {\n  margin-left: 14px; }\n.alternative .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: -14px; }\n[dir='rtl'] .alternative .mat-badge-large.mat-badge-overlap.mat-badge-before {\n  margin-left: 0;\n  margin-right: 14px; }\n[dir='rtl'] .alternative .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -14px; }\n.alternative .mat-badge-large.mat-badge-overlap.mat-badge-after {\n  margin-right: 14px; }\n.alternative .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: -14px; }\n[dir='rtl'] .alternative .mat-badge-large.mat-badge-overlap.mat-badge-after {\n  margin-right: 0;\n  margin-left: 28px; }\n[dir='rtl'] .alternative .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -14px; }\n.alternative .mat-bottom-sheet-container {\n  background: #424242;\n  color: white; }\n.alternative .mat-button, .alternative .mat-icon-button, .alternative .mat-stroked-button {\n  color: inherit;\n  background: transparent; }\n.alternative .mat-button.mat-primary, .alternative .mat-icon-button.mat-primary, .alternative .mat-stroked-button.mat-primary {\n    color: #00e676; }\n.alternative .mat-button.mat-accent, .alternative .mat-icon-button.mat-accent, .alternative .mat-stroked-button.mat-accent {\n    color: #00c853; }\n.alternative .mat-button.mat-warn, .alternative .mat-icon-button.mat-warn, .alternative .mat-stroked-button.mat-warn {\n    color: #f44336; }\n.alternative .mat-button.mat-primary[disabled], .alternative .mat-button.mat-accent[disabled], .alternative .mat-button.mat-warn[disabled], .alternative .mat-button[disabled][disabled], .alternative .mat-icon-button.mat-primary[disabled], .alternative .mat-icon-button.mat-accent[disabled], .alternative .mat-icon-button.mat-warn[disabled], .alternative .mat-icon-button[disabled][disabled], .alternative .mat-stroked-button.mat-primary[disabled], .alternative .mat-stroked-button.mat-accent[disabled], .alternative .mat-stroked-button.mat-warn[disabled], .alternative .mat-stroked-button[disabled][disabled] {\n    color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-button.mat-primary .mat-button-focus-overlay, .alternative .mat-icon-button.mat-primary .mat-button-focus-overlay, .alternative .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(0, 230, 118, 0.12); }\n.alternative .mat-button.mat-accent .mat-button-focus-overlay, .alternative .mat-icon-button.mat-accent .mat-button-focus-overlay, .alternative .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(0, 200, 83, 0.12); }\n.alternative .mat-button.mat-warn .mat-button-focus-overlay, .alternative .mat-icon-button.mat-warn .mat-button-focus-overlay, .alternative .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n.alternative .mat-button[disabled] .mat-button-focus-overlay, .alternative .mat-icon-button[disabled] .mat-button-focus-overlay, .alternative .mat-stroked-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n.alternative .mat-button.mat-primary .mat-ripple-element, .alternative .mat-icon-button.mat-primary .mat-ripple-element, .alternative .mat-stroked-button.mat-primary .mat-ripple-element {\n    background-color: rgba(0, 230, 118, 0.1); }\n.alternative .mat-button.mat-accent .mat-ripple-element, .alternative .mat-icon-button.mat-accent .mat-ripple-element, .alternative .mat-stroked-button.mat-accent .mat-ripple-element {\n    background-color: rgba(0, 200, 83, 0.1); }\n.alternative .mat-button.mat-warn .mat-ripple-element, .alternative .mat-icon-button.mat-warn .mat-ripple-element, .alternative .mat-stroked-button.mat-warn .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.1); }\n.alternative .mat-flat-button, .alternative .mat-raised-button, .alternative .mat-fab, .alternative .mat-mini-fab {\n  color: white;\n  background-color: #424242; }\n.alternative .mat-flat-button.mat-primary, .alternative .mat-raised-button.mat-primary, .alternative .mat-fab.mat-primary, .alternative .mat-mini-fab.mat-primary {\n    color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-flat-button.mat-accent, .alternative .mat-raised-button.mat-accent, .alternative .mat-fab.mat-accent, .alternative .mat-mini-fab.mat-accent {\n    color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-flat-button.mat-warn, .alternative .mat-raised-button.mat-warn, .alternative .mat-fab.mat-warn, .alternative .mat-mini-fab.mat-warn {\n    color: white; }\n.alternative .mat-flat-button.mat-primary[disabled], .alternative .mat-flat-button.mat-accent[disabled], .alternative .mat-flat-button.mat-warn[disabled], .alternative .mat-flat-button[disabled][disabled], .alternative .mat-raised-button.mat-primary[disabled], .alternative .mat-raised-button.mat-accent[disabled], .alternative .mat-raised-button.mat-warn[disabled], .alternative .mat-raised-button[disabled][disabled], .alternative .mat-fab.mat-primary[disabled], .alternative .mat-fab.mat-accent[disabled], .alternative .mat-fab.mat-warn[disabled], .alternative .mat-fab[disabled][disabled], .alternative .mat-mini-fab.mat-primary[disabled], .alternative .mat-mini-fab.mat-accent[disabled], .alternative .mat-mini-fab.mat-warn[disabled], .alternative .mat-mini-fab[disabled][disabled] {\n    color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-flat-button.mat-primary, .alternative .mat-raised-button.mat-primary, .alternative .mat-fab.mat-primary, .alternative .mat-mini-fab.mat-primary {\n    background-color: #00e676; }\n.alternative .mat-flat-button.mat-accent, .alternative .mat-raised-button.mat-accent, .alternative .mat-fab.mat-accent, .alternative .mat-mini-fab.mat-accent {\n    background-color: #00c853; }\n.alternative .mat-flat-button.mat-warn, .alternative .mat-raised-button.mat-warn, .alternative .mat-fab.mat-warn, .alternative .mat-mini-fab.mat-warn {\n    background-color: #f44336; }\n.alternative .mat-flat-button.mat-primary[disabled], .alternative .mat-flat-button.mat-accent[disabled], .alternative .mat-flat-button.mat-warn[disabled], .alternative .mat-flat-button[disabled][disabled], .alternative .mat-raised-button.mat-primary[disabled], .alternative .mat-raised-button.mat-accent[disabled], .alternative .mat-raised-button.mat-warn[disabled], .alternative .mat-raised-button[disabled][disabled], .alternative .mat-fab.mat-primary[disabled], .alternative .mat-fab.mat-accent[disabled], .alternative .mat-fab.mat-warn[disabled], .alternative .mat-fab[disabled][disabled], .alternative .mat-mini-fab.mat-primary[disabled], .alternative .mat-mini-fab.mat-accent[disabled], .alternative .mat-mini-fab.mat-warn[disabled], .alternative .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-flat-button.mat-primary .mat-ripple-element, .alternative .mat-raised-button.mat-primary .mat-ripple-element, .alternative .mat-fab.mat-primary .mat-ripple-element, .alternative .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(0, 0, 0, 0.1); }\n.alternative .mat-flat-button.mat-accent .mat-ripple-element, .alternative .mat-raised-button.mat-accent .mat-ripple-element, .alternative .mat-fab.mat-accent .mat-ripple-element, .alternative .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(0, 0, 0, 0.1); }\n.alternative .mat-flat-button.mat-warn .mat-ripple-element, .alternative .mat-raised-button.mat-warn .mat-ripple-element, .alternative .mat-fab.mat-warn .mat-ripple-element, .alternative .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.alternative .mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(0, 230, 118, 0.2); }\n.alternative .mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(0, 200, 83, 0.2); }\n.alternative .mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.2); }\n.alternative .mat-button-toggle {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-button-toggle .mat-button-toggle-focus-overlay {\n    background-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-button-toggle-checked {\n  background-color: #212121;\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-button-toggle-disabled {\n  background-color: black;\n  color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #424242; }\n.alternative .mat-card {\n  background: #424242;\n  color: white; }\n.alternative .mat-card-subtitle {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-checkbox-frame {\n  border-color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-checkbox-checkmark {\n  fill: #303030; }\n.alternative .mat-checkbox-checkmark-path {\n  stroke: #303030 !important; }\n.alternative .mat-checkbox-mixedmark {\n  background-color: #303030; }\n.alternative .mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .alternative .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #00e676; }\n.alternative .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .alternative .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #00c853; }\n.alternative .mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .alternative .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f44336; }\n.alternative .mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .alternative .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #686868; }\n.alternative .mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #686868; }\n.alternative .mat-checkbox-disabled .mat-checkbox-label {\n  color: #686868; }\n.alternative .mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(0, 230, 118, 0.26); }\n.alternative .mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(0, 200, 83, 0.26); }\n.alternative .mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.alternative .mat-chip.mat-standard-chip {\n  background-color: #616161;\n  color: white; }\n.alternative .mat-chip.mat-standard-chip .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.alternative .mat-chip.mat-standard-chip .mat-chip-remove:hover {\n    opacity: 0.54; }\n.alternative .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {\n  background-color: #00e676;\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n.alternative .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n.alternative .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {\n  background-color: #f44336;\n  color: white; }\n.alternative .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.alternative .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n.alternative .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {\n  background-color: #00c853;\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n.alternative .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n.alternative .mat-table {\n  background: #424242; }\n.alternative mat-row, .alternative mat-header-row, .alternative mat-footer-row,\n.alternative th.mat-header-cell, .alternative td.mat-cell, .alternative td.mat-footer-cell {\n  border-bottom-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-header-cell {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-cell, .alternative .mat-footer-cell {\n  color: white; }\n.alternative .mat-calendar-arrow {\n  border-top-color: white; }\n.alternative .mat-datepicker-toggle,\n.alternative .mat-datepicker-popup .mat-calendar-next-button,\n.alternative .mat-datepicker-popup .mat-calendar-previous-button {\n  color: white; }\n.alternative .mat-calendar-table-header {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-calendar-table-header-divider::after {\n  background: rgba(255, 255, 255, 0.12); }\n.alternative .mat-calendar-body-label {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-calendar-body-cell-content {\n  color: white;\n  border-color: transparent; }\n.alternative .mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.alternative .cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.alternative .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(255, 255, 255, 0.04); }\n.alternative .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-calendar-body-selected {\n  background-color: #00e676;\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(0, 230, 118, 0.4); }\n.alternative .mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.87); }\n.alternative .mat-datepicker-content {\n  background-color: #424242;\n  color: white; }\n.alternative .mat-datepicker-content.mat-accent .mat-calendar-body-selected {\n    background-color: #00c853;\n    color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-datepicker-content.mat-accent .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(0, 200, 83, 0.4); }\n.alternative .mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.87); }\n.alternative .mat-datepicker-content.mat-warn .mat-calendar-body-selected {\n    background-color: #f44336;\n    color: white; }\n.alternative .mat-datepicker-content.mat-warn .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(244, 67, 54, 0.4); }\n.alternative .mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.alternative .mat-datepicker-toggle-active {\n  color: #00e676; }\n.alternative .mat-datepicker-toggle-active.mat-accent {\n    color: #00c853; }\n.alternative .mat-datepicker-toggle-active.mat-warn {\n    color: #f44336; }\n.alternative .mat-dialog-container {\n  background: #424242;\n  color: white; }\n.alternative .mat-divider {\n  border-top-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-divider-vertical {\n  border-right-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-expansion-panel {\n  background: #424242;\n  color: white; }\n.alternative .mat-action-row {\n  border-top-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .alternative .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .alternative .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(255, 255, 255, 0.04); }\n.alternative .mat-expansion-panel-header-title {\n  color: white; }\n.alternative .mat-expansion-panel-header-description,\n.alternative .mat-expansion-indicator::after {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .alternative .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n.alternative .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-hint {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-form-field.mat-focused .mat-form-field-label {\n  color: #00e676; }\n.alternative .mat-form-field.mat-focused .mat-form-field-label.mat-accent {\n    color: #00c853; }\n.alternative .mat-form-field.mat-focused .mat-form-field-label.mat-warn {\n    color: #f44336; }\n.alternative .mat-focused .mat-form-field-required-marker {\n  color: #00c853; }\n.alternative .mat-form-field-ripple {\n  background-color: white; }\n.alternative .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #00e676; }\n.alternative .mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {\n    background-color: #00c853; }\n.alternative .mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {\n    background-color: #f44336; }\n.alternative .mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #f44336; }\n.alternative .mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .alternative .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #f44336; }\n.alternative .mat-form-field.mat-form-field-invalid .mat-form-field-ripple {\n  background-color: #f44336; }\n.alternative .mat-error {\n  color: #f44336; }\n.alternative .mat-form-field-appearance-legacy .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-form-field-appearance-legacy .mat-hint {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.alternative .mat-form-field-appearance-standard .mat-form-field-underline {\n  background-color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.alternative .mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: rgba(255, 255, 255, 0.1); }\n.alternative .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {\n  background-color: rgba(255, 255, 255, 0.05); }\n.alternative .mat-form-field-appearance-fill .mat-form-field-underline::before {\n  background-color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {\n  background-color: transparent; }\n.alternative .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: white; }\n.alternative .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #00e676; }\n.alternative .mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {\n  color: #00c853; }\n.alternative .mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick {\n  color: #f44336; }\n.alternative .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #f44336; }\n.alternative .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {\n  color: rgba(255, 255, 255, 0.15); }\n.alternative .mat-icon.mat-primary {\n  color: #00e676; }\n.alternative .mat-icon.mat-accent {\n  color: #00c853; }\n.alternative .mat-icon.mat-warn {\n  color: #f44336; }\n.alternative .mat-input-element:disabled {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-input-element {\n  caret-color: #00e676; }\n.alternative .mat-input-element::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-input-element:-ms-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-input-element::-ms-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-input-element::placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-input-element::-moz-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-input-element::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-input-element:-ms-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-accent .mat-input-element {\n  caret-color: #00c853; }\n.alternative .mat-warn .mat-input-element,\n.alternative .mat-form-field-invalid .mat-input-element {\n  caret-color: #f44336; }\n.alternative .mat-list .mat-list-item, .alternative .mat-nav-list .mat-list-item, .alternative .mat-selection-list .mat-list-item {\n  color: white; }\n.alternative .mat-list .mat-list-option, .alternative .mat-nav-list .mat-list-option, .alternative .mat-selection-list .mat-list-option {\n  color: white; }\n.alternative .mat-list .mat-subheader, .alternative .mat-nav-list .mat-subheader, .alternative .mat-selection-list .mat-subheader {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-list-item-disabled {\n  background-color: black; }\n.alternative .mat-list-option:hover, .alternative .mat-list-option.mat-list-item-focus,\n.alternative .mat-nav-list .mat-list-item:hover,\n.alternative .mat-nav-list .mat-list-item.mat-list-item-focus {\n  background: rgba(255, 255, 255, 0.04); }\n.alternative .mat-menu-panel {\n  background: #424242; }\n.alternative .mat-menu-item {\n  background: transparent;\n  color: white; }\n.alternative .mat-menu-item[disabled], .alternative .mat-menu-item[disabled]::after {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-menu-item .mat-icon:not([color]),\n.alternative .mat-menu-item-submenu-trigger::after {\n  color: white; }\n.alternative .mat-menu-item:hover:not([disabled]),\n.alternative .mat-menu-item.cdk-program-focused:not([disabled]),\n.alternative .mat-menu-item.cdk-keyboard-focused:not([disabled]),\n.alternative .mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(255, 255, 255, 0.04); }\n.alternative .mat-paginator {\n  background: #424242; }\n.alternative .mat-paginator,\n.alternative .mat-paginator-page-size .mat-select-trigger {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-paginator-decrement,\n.alternative .mat-paginator-increment {\n  border-top: 2px solid white;\n  border-right: 2px solid white; }\n.alternative .mat-paginator-first,\n.alternative .mat-paginator-last {\n  border-top: 2px solid white; }\n.alternative .mat-icon-button[disabled] .mat-paginator-decrement,\n.alternative .mat-icon-button[disabled] .mat-paginator-increment,\n.alternative .mat-icon-button[disabled] .mat-paginator-first,\n.alternative .mat-icon-button[disabled] .mat-paginator-last {\n  border-color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-progress-bar-background {\n  fill: #c8e6c9; }\n.alternative .mat-progress-bar-buffer {\n  background-color: #c8e6c9; }\n.alternative .mat-progress-bar-fill::after {\n  background-color: #00e676; }\n.alternative .mat-progress-bar.mat-accent .mat-progress-bar-background {\n  fill: #c8e6c9; }\n.alternative .mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #c8e6c9; }\n.alternative .mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #00c853; }\n.alternative .mat-progress-bar.mat-warn .mat-progress-bar-background {\n  fill: #ffcdd2; }\n.alternative .mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n.alternative .mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #f44336; }\n.alternative .mat-progress-spinner circle, .alternative .mat-spinner circle {\n  stroke: #00e676; }\n.alternative .mat-progress-spinner.mat-accent circle, .alternative .mat-spinner.mat-accent circle {\n  stroke: #00c853; }\n.alternative .mat-progress-spinner.mat-warn circle, .alternative .mat-spinner.mat-warn circle {\n  stroke: #f44336; }\n.alternative .mat-radio-outer-circle {\n  border-color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-radio-disabled .mat-radio-ripple .mat-ripple-element, .alternative .mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-radio-disabled .mat-radio-label-content {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #00e676; }\n.alternative .mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #00e676; }\n.alternative .mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(0, 230, 118, 0.26); }\n.alternative .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #00c853; }\n.alternative .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #00c853; }\n.alternative .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(0, 200, 83, 0.26); }\n.alternative .mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #f44336; }\n.alternative .mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #f44336; }\n.alternative .mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.alternative .mat-select-content, .alternative .mat-select-panel-done-animating {\n  background: #424242; }\n.alternative .mat-select-value {\n  color: white; }\n.alternative .mat-select-placeholder {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-select-disabled .mat-select-value {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-select-arrow {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(255, 255, 255, 0.12); }\n.alternative .mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #00e676; }\n.alternative .mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #00c853; }\n.alternative .mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #f44336; }\n.alternative .mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #f44336; }\n.alternative .mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-drawer-container {\n  background-color: #303030;\n  color: white; }\n.alternative .mat-drawer {\n  background-color: #424242;\n  color: white; }\n.alternative .mat-drawer.mat-drawer-push {\n    background-color: #424242; }\n.alternative .mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(189, 189, 189, 0.6); }\n.alternative .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #a5d6a7; }\n.alternative .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(165, 214, 167, 0.5); }\n.alternative .mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(165, 214, 167, 0.12); }\n.alternative .mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #a5d6a7; }\n.alternative .mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(165, 214, 167, 0.5); }\n.alternative .mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(165, 214, 167, 0.12); }\n.alternative .mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #ef9a9a; }\n.alternative .mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(239, 154, 154, 0.5); }\n.alternative .mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(239, 154, 154, 0.12); }\n.alternative .mat-disabled .mat-slide-toggle-thumb {\n  background-color: #424242; }\n.alternative .mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n.alternative .mat-slide-toggle-bar {\n  background-color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-slider-track-background {\n  background-color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-primary .mat-slider-track-fill,\n.alternative .mat-primary .mat-slider-thumb,\n.alternative .mat-primary .mat-slider-thumb-label {\n  background-color: #00e676; }\n.alternative .mat-primary .mat-slider-thumb-label-text {\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-accent .mat-slider-track-fill,\n.alternative .mat-accent .mat-slider-thumb,\n.alternative .mat-accent .mat-slider-thumb-label {\n  background-color: #00c853; }\n.alternative .mat-accent .mat-slider-thumb-label-text {\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-warn .mat-slider-track-fill,\n.alternative .mat-warn .mat-slider-thumb,\n.alternative .mat-warn .mat-slider-thumb-label {\n  background-color: #f44336; }\n.alternative .mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n.alternative .mat-slider-focus-ring {\n  background-color: rgba(0, 200, 83, 0.2); }\n.alternative .mat-slider:hover .mat-slider-track-background,\n.alternative .cdk-focused .mat-slider-track-background {\n  background-color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-slider-disabled .mat-slider-track-background,\n.alternative .mat-slider-disabled .mat-slider-track-fill,\n.alternative .mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.alternative .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: white; }\n.alternative .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.alternative .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(255, 255, 255, 0.3);\n  background-color: transparent; }\n.alternative .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .alternative .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .alternative .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent); }\n.alternative .mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent); }\n.alternative .mat-step-header.cdk-keyboard-focused, .alternative .mat-step-header.cdk-program-focused, .alternative .mat-step-header:hover {\n  background-color: rgba(255, 255, 255, 0.04); }\n.alternative .mat-step-header .mat-step-label,\n.alternative .mat-step-header .mat-step-optional {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-step-header .mat-step-icon {\n  background-color: #00e676;\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(255, 255, 255, 0.5);\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-step-header .mat-step-label.mat-step-label-active {\n  color: white; }\n.alternative .mat-stepper-horizontal, .alternative .mat-stepper-vertical {\n  background-color: #424242; }\n.alternative .mat-stepper-vertical-line::before {\n  border-left-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-stepper-horizontal-line {\n  border-top-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-tab-nav-bar,\n.alternative .mat-tab-header {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12); }\n.alternative .mat-tab-group-inverted-header .mat-tab-nav-bar,\n.alternative .mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n  border-bottom: none; }\n.alternative .mat-tab-label, .alternative .mat-tab-link {\n  color: white; }\n.alternative .mat-tab-label.mat-tab-disabled, .alternative .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.alternative .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.alternative .mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n.alternative .mat-tab-group.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-group.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus, .alternative .mat-tab-nav-bar.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-nav-bar.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(200, 230, 201, 0.3); }\n.alternative .mat-tab-group.mat-primary .mat-ink-bar, .alternative .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #00e676; }\n.alternative .mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .alternative .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-tab-group.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-group.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus, .alternative .mat-tab-nav-bar.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-nav-bar.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(200, 230, 201, 0.3); }\n.alternative .mat-tab-group.mat-accent .mat-ink-bar, .alternative .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #00c853; }\n.alternative .mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .alternative .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-tab-group.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-group.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus, .alternative .mat-tab-nav-bar.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-nav-bar.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n.alternative .mat-tab-group.mat-warn .mat-ink-bar, .alternative .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #f44336; }\n.alternative .mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .alternative .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n.alternative .mat-tab-group.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-group.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus, .alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(200, 230, 201, 0.3); }\n.alternative .mat-tab-group.mat-background-primary .mat-tab-header, .alternative .mat-tab-group.mat-background-primary .mat-tab-links, .alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #00e676; }\n.alternative .mat-tab-group.mat-background-primary .mat-tab-label, .alternative .mat-tab-group.mat-background-primary .mat-tab-link, .alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .alternative .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.4); }\n.alternative .mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.4); }\n.alternative .mat-tab-group.mat-background-primary .mat-ripple-element, .alternative .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.12); }\n.alternative .mat-tab-group.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-group.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus, .alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(200, 230, 201, 0.3); }\n.alternative .mat-tab-group.mat-background-accent .mat-tab-header, .alternative .mat-tab-group.mat-background-accent .mat-tab-links, .alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #00c853; }\n.alternative .mat-tab-group.mat-background-accent .mat-tab-label, .alternative .mat-tab-group.mat-background-accent .mat-tab-link, .alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .alternative .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.4); }\n.alternative .mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.4); }\n.alternative .mat-tab-group.mat-background-accent .mat-ripple-element, .alternative .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.12); }\n.alternative .mat-tab-group.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-group.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus, .alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n.alternative .mat-tab-group.mat-background-warn .mat-tab-header, .alternative .mat-tab-group.mat-background-warn .mat-tab-links, .alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #f44336; }\n.alternative .mat-tab-group.mat-background-warn .mat-tab-label, .alternative .mat-tab-group.mat-background-warn .mat-tab-link, .alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n.alternative .mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .alternative .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.alternative .mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.alternative .mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.alternative .mat-tab-group.mat-background-warn .mat-ripple-element, .alternative .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-toolbar {\n  background: #212121;\n  color: white; }\n.alternative .mat-toolbar.mat-primary {\n    background: #00e676;\n    color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-toolbar.mat-accent {\n    background: #00c853;\n    color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-toolbar.mat-warn {\n    background: #f44336;\n    color: white; }\n.alternative .mat-toolbar .mat-form-field-underline,\n  .alternative .mat-toolbar .mat-form-field-ripple,\n  .alternative .mat-toolbar .mat-focused .mat-form-field-ripple {\n    background-color: currentColor; }\n.alternative .mat-toolbar .mat-form-field-label,\n  .alternative .mat-toolbar .mat-focused .mat-form-field-label,\n  .alternative .mat-toolbar .mat-select-value,\n  .alternative .mat-toolbar .mat-select-arrow,\n  .alternative .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n    color: inherit; }\n.alternative .mat-toolbar .mat-input-element {\n    caret-color: currentColor; }\n.alternative .mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n.alternative .mat-tree {\n  background: #424242; }\n.alternative .mat-tree-node {\n  color: white; }\n.alternative .mat-snack-bar-container {\n  background: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-simple-snackbar-action {\n  color: inherit; }\n.mat-sidenav-container .mat-sidenav {\n  width: 200px;\n  background: #bdbdbd; }\n.icon {\n  padding: 0 14px; }\n.container {\n  font: 'Helvetica';\n  color: red; }\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n.center-unipark {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n.align-text-picture {\n  width: 250px;\n  height: 300px;\n  float: left;\n  text-align: center; }\n.mat-icon:hover {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/login-dialog/login-dialog.component */ "./src/app/login-dialog/login-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = /** @class */ (function () {
    function LandingComponent(dialog) {
        this.dialog = dialog;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    // Displays login modal
    LandingComponent.prototype.openLoginDialog = function () {
        this.loginDialogRef = this.dialog.open(_app_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_2__["LoginDialogComponent"], {
            disableClose: true,
        });
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/login-dialog/login-dialog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/login-dialog/login-dialog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- Display of login modal -->\r\n<img src=\"assets/images/login/login.png\" alt=\"Login\">\r\n  <hr>\r\n<mat-dialog-content [formGroup]=\"form\">\r\n  <!-- mat form feild: facilityNO -->\r\n  <mat-form-field>\r\n    <input matInput\r\n            placeholder=\"Facility Number\"\r\n            formControlName=\"facilityNo\">\r\n  </mat-form-field>\r\n    <br>\r\n  <!-- Mat form feild: password -->\r\n  <mat-form-field>\r\n    <input matInput \r\n            placeholder=\"Password\"\r\n            [type]=\"hide ? 'password' : 'text'\"\r\n            formControlName=\"userPass\">\r\n    <mat-icon matSuffix \r\n      (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n  </mat-form-field>\r\n</mat-dialog-content>\r\n  <br>\r\n<mat-dialog-actions>\r\n  <!-- Close button -->\r\n  <button mat-button \r\n    color=\"warn\" \r\n    (click)=\"closeDialog()\">\r\n    <mat-icon svgIcon=\"cancel\"></mat-icon>\r\n    Cancel\r\n  </button>\r\n  <!-- Login button -->\r\n  <button mat-stroked-button\r\n    color=\"accent\" \r\n    (click)=\"aquireLoginDetails()\">\r\n    <mat-icon svgIcon=\"login-variant\"></mat-icon> \r\n    Login\r\n  </button>  \r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/login-dialog/login-dialog.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/login-dialog/login-dialog.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n\n.mat-icon:hover {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/login-dialog/login-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/login-dialog/login-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: LoginDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDialogComponent", function() { return LoginDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginDialogComponent = /** @class */ (function () {
    function LoginDialogComponent(router, fb, snackBar, dialogRef, http, appService) {
        this.router = router;
        this.fb = fb;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.http = http;
        this.appService = appService;
        // Hides password on dialog
        this.hide = true;
    }
    LoginDialogComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            facilityNo: [this.facilityNo, []],
            userPass: [this.userPass, []]
        });
    };
    // opens the snackBar with error
    LoginDialogComponent.prototype.openSnackBarFail = function () {
        // opens the snackBar with error
        this.snackBar.open('Incorrect login details', 'OK', {
            duration: 2000,
        });
    };
    // Gets login details, sends to backend (verification done on backend)
    LoginDialogComponent.prototype.aquireLoginDetails = function () {
        // aquire login details from dialog
        this.facilityNo = this.form.value.facilityNo;
        this.userPass = this.form.value.userPass;
        // sends login info, veriefied on backend
        this.http.post(_app_service__WEBPACK_IMPORTED_MODULE_6__["BASE_URL"] + "/personnel/login", { facilityNo: this.facilityNo, password: this.userPass })
            .subscribe(this.loginUser.bind(this), this.openSnackBarFail.bind(this));
    };
    // sends the user to unipark page, as successful login
    LoginDialogComponent.prototype.loginUser = function () {
        this.appService.setState('FacilityID', this.facilityNo);
        // Open unipark page, close modal
        this.dialogRef.close(this.form.value);
        this.router.navigateByUrl('/admin');
    };
    // Closes the dialog
    LoginDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    // Captures keyboard events
    LoginDialogComponent.prototype.enterKeyEvent = function (event) {
        switch (event.keyCode) {
            case 13:
                this.aquireLoginDetails();
                break;
            case 27:
                this.closeDialog();
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LoginDialogComponent.prototype, "enterKeyEvent", null);
    LoginDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-dialog',
            template: __webpack_require__(/*! ./login-dialog.component.html */ "./src/app/login-dialog/login-dialog.component.html"),
            styles: [__webpack_require__(/*! ./login-dialog.component.scss */ "./src/app/login-dialog/login-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]])
    ], LoginDialogComponent);
    return LoginDialogComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\r\n"

/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  width: 600px;\n  height: 300px; }\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = /** @class */ (function () {
    function MapComponent(appService) {
        this.appService = appService;
        // TODO: find out syntax for insertion
        this.testing = [
            {
                line: [[25.672959, -34.000911],
                    [25.672761, -34.000715],
                    [25.673141, -34.000720],
                    [25.673174, -34.001031],
                    [25.672761, -34.001022]]
            }
        ];
        Object.getOwnPropertyDescriptor(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__, 'accessToken').set(_app_service__WEBPACK_IMPORTED_MODULE_1__["MAPBOX_API"]);
    }
    MapComponent.prototype.ngOnInit = function () {
        console.log('lat: ', this.latitude, 'long: ', this.longitude);
        this.generateMap();
        this.old = this.longitude;
    };
    MapComponent.prototype.ngOnChanges = function () {
        if (this.old !== this.longitude) {
            this.generateMap();
        }
    };
    // Generates map data
    MapComponent.prototype.generateMap = function () {
        var dataSet = '../../assets/datasets/' + this.parkingArea + '.geojson';
        console.log(dataSet);
        var latLng = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["LngLat"](this.longitude, this.latitude);
        console.log('latlon: ', latLng);
        var map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Map"]({
            container: 'map',
            style: 'mapbox://styles/eagleeye25/cjjyumx0a8cph2smuvg6kgp39',
            center: latLng,
            zoom: 16,
        });
        map.on('load', function () {
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
        this.marker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Marker"]({
            offset: [2, 2]
        })
            .setLngLat(latLng)
            .addTo(map);
        // this.map.scrollZoom.disable();
        // this.map.dragPan.disable();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "longitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "latitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "parkingArea", void 0);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ../../../node_modules/mapbox-gl/dist/mapbox-gl.css */ "./node_modules/mapbox-gl/dist/mapbox-gl.css"), __webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// FormControl modules

// Navigation

// Layout

// Buttons & Indicators

// Popups & Modals

// DataTable

var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/unipark-page/unipark-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/unipark-page/unipark-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alternative\">\r\n  <mat-toolbar color=\"primary\">\r\n    <!-- Displays UniPark image -->\r\n    <img src=\"assets/images/branding/up.png\" alt=\"UniPark\">\r\n    <span class=\"spacer\"></span>\r\n      <!-- View User Information -->\r\n      <a mat-button routerLink=\"./user-information\"\r\n          routerLinkActive=\"mat-accent\">\r\n        <mat-icon svgIcon=\"account-card-details\"></mat-icon>\r\n        <span>User Information</span>\r\n      </a>\r\n      <!-- Update User Info -->\r\n      <a mat-button routerLink=\"./update-user-info\"\r\n        routerLinkActive=\"mat-accent\">\r\n        <mat-icon svgIcon=\"account-settings-variant\"></mat-icon>\r\n        <span>Update User Info</span>\r\n      </a>\r\n      <!-- View User Parking Area -->\r\n      <a mat-button routerLink=\"./assigned-parking\"\r\n          routerLinkActive=\"mat-accent\">\r\n        <mat-icon svgIcon=\"parking\"></mat-icon>\r\n        <span>Assigned Parking</span>\r\n      </a>\r\n      <!-- Request Parking -->\r\n      <a mat-button routerLink=\"./request-parking\"\r\n          routerLinkActive=\"mat-accent\">\r\n        <mat-icon svgIcon=\"car-connected\"></mat-icon>\r\n        <span>Request Parking</span>\r\n      </a>\r\n      <!-- View Requests -->\r\n      <a mat-button routerLink=\"./view-requests\"\r\n          routerLinkActive=\"mat-accent\">\r\n        <mat-icon svgIcon=\"filter-variant\"></mat-icon>\r\n        <span>View Requests</span>\r\n      </a>\r\n      <!-- Infringements -->\r\n      <a mat-button routerLink=\"./infringments\"\r\n          routerLinkActive=\"mat-accent\">\r\n        <mat-icon svgIcon=\"alert-octagon\"></mat-icon>\r\n        <span>Infringments</span>\r\n      </a>\r\n      <!-- Help -->\r\n      <button mat-button (click)=\"openHelpDialog()\">\r\n        <mat-icon svgIcon=\"help\"></mat-icon>\r\n        <span>Help</span>\r\n      </button>\r\n      <!-- Logout -->\r\n      <button mat-button routerLink=\"/\"\r\n        (click)=\"logoutUser()\">\r\n        <mat-icon svgIcon=\"logout\"></mat-icon>\r\n        <span>Logout</span>\r\n      </button>\r\n  </mat-toolbar>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/unipark-page/unipark-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/unipark-page/unipark-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\n  /*This fills the remaining space, by using flexbox.  \r\n Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n.color {\n  background-color: #1fcc59; }\n"

/***/ }),

/***/ "./src/app/unipark-page/unipark-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/unipark-page/unipark-page.component.ts ***!
  \********************************************************/
/*! exports provided: UniparkPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniparkPageComponent", function() { return UniparkPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_options_help_help_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-options/help/help.component */ "./src/app/user-options/help/help.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UniparkPageComponent = /** @class */ (function () {
    function UniparkPageComponent(router, dialog, http, appService) {
        this.router = router;
        this.dialog = dialog;
        this.http = http;
        this.appService = appService;
    }
    // Initializes on load
    UniparkPageComponent.prototype.ngOnInit = function () {
        // Checks if user is "logged in"
        if (!this.appService.getState('FacilityID')) {
            this.router.navigateByUrl('/');
        }
    };
    UniparkPageComponent.prototype.logoutUser = function () {
        this.appService.setState('FacilityID', null);
    };
    /*
    // Displays user-info modal
    openUserInfoDialog(): void {
      this.userInfoDialogRef = this.dialog.open(UserInfoComponent, {
        disableClose: true,
        // Sets data to appropriate variables
        data: {
          userName: this.personelInfo.PersonelName,
          userPhone: this.personelInfo.PhoneNumber,
          userEmail: this.personelInfo.Email,
          userType: this.personelInfo.Type,
          userLevel: this.personelInfo.PersonelLevel
        }
      });
    }
    */
    /*
    // Displays update-user-info modal
    openUpdateUserInfoDialog(): void {
      this.UpdateUserDialog = this.dialog.open(UpdateUserInfoComponent, {
        disableClose: true,
        // Sets data to appropriate variables
        data: {
          userPhone: this.personelInfo.PhoneNumber,
          userEmail: this.personelInfo.Email
        }
      });
    }
    */
    /*
     // Displays assigned-parking modal
     openAssignedParkingDialog(): void {
       this.AssignedParkingDialog = this.dialog.open(ViewAssignedParkingComponent, {
         disableClose: true,
         // Sets data to appropriate variables
         data: {
           parkingName: this.personelParkingInfo.ParkingName,
           parkingAL: this.personelParkingInfo.ParkingAccessLevel,
           parkingLocation: this.personelParkingInfo.Location
         }
       });
     }
     */
    /*
     // Displays request-parking modal
     openRequestParkingDialog(): void {
       this.RequestParkingDialog = this.dialog.open(RequestParkingComponent, {
         disableClose: true
       });
     }
   */
    // Displays user-info modal
    UniparkPageComponent.prototype.openHelpDialog = function () {
        this.helpDialog = this.dialog.open(_user_options_help_help_component__WEBPACK_IMPORTED_MODULE_4__["HelpComponent"], {
            disableClose: true,
        });
    };
    UniparkPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unipark-page',
            template: __webpack_require__(/*! ./unipark-page.component.html */ "./src/app/unipark-page/unipark-page.component.html"),
            styles: [__webpack_require__(/*! ./unipark-page.component.scss */ "./src/app/unipark-page/unipark-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]])
    ], UniparkPageComponent);
    return UniparkPageComponent;
}());



/***/ }),

/***/ "./src/app/user-options/help/help.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user-options/help/help.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alternative\">\r\n  <!-- Display of help modal -->\r\n  <!-- Displays help image -->\r\n  <img class=\"padding-image\" src=\"assets/images/user-options/help/help.png\" alt=\"HELP\">\r\n  <hr>\r\n  <p>\r\n    \r\n    <b><u>User Information</u></b>\r\n    <br>\r\n    Will display all of your information.\r\n    <br>\r\n    <br>\r\n    <b><u>Update User Info</u></b>\r\n    <br>\r\n    This allows you to update either your: Cell-Phone Number, E-mail Address, Password.\r\n    <br>\r\n    Cell-Phone Number: Needs to have 10 digits entered as specified.\r\n    <br>\r\n    E-mail Address: Only valid email addresses will be accepted.\r\n    <br>\r\n    Password: When entering a new password, it will need to be entered\r\n    again inorder to ensure that you entered the same password.\r\n    <br>\r\n    By pressing the <mat-icon svgIcon=\"eye\"></mat-icon> or <mat-icon svgIcon=\"eye-off\"></mat-icon> icon it will display,\r\n    hide your newly entered password.\r\n    <br>\r\n    <br>\r\n    <b><u>Assigned Parking</u></b>\r\n    <br>\r\n    Will display all parking information associated to you.\r\n    <br>\r\n    <br>\r\n    <b><u>Request Parking</u></b>\r\n    This allows you to request for a different parking area / spot within the facility.\r\n    <br>\r\n    Only options that are viable to you will given, they can be selected by pressing on \"Parking Area\" and chooing an option\r\n    <br>\r\n    and also \"parking Spot\", once both feilds have been chosen you will be required to \"Request\" the parking, this can be done\r\n    by pressing enter or clicking the \"Request\" button\r\n    <br>\r\n    <br>\r\n    Options can be closed by clicking \"close\" or by pressing \"Esc\".\r\n    <br>\r\n    Options can be completed by clicking \"Submit\"/\"Request\" or by pressing Enter\" on the keyboard.\r\n    <br>\r\n    <br>\r\n    By pressing \"Logout\" <mat-icon svgIcon=\"logout\"></mat-icon> you will be logged off from the web app, and taken back to the \"Dragon Code\" website.\r\n  </p>\r\n  <hr>\r\n  <br>\r\n  <mat-dialog-actions>\r\n    <!-- Close button -->\r\n    <button mat-stroked-button\r\n      color=\"accent\"\r\n      mat-dialog-close>\r\n        <mat-icon svgIcon=\"close\"></mat-icon>\r\n          Close\r\n      </button>\r\n  </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-options/help/help.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/user-options/help/help.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding-image {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: auto; }\n"

/***/ }),

/***/ "./src/app/user-options/help/help.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-options/help/help.component.ts ***!
  \*****************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpComponent = /** @class */ (function () {
    function HelpComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    // Closes the dialog
    HelpComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    // Captures keyboard events
    HelpComponent.prototype.enterKeyEvent = function (event) {
        switch (event.keyCode) {
            case 13:
                this.closeDialog();
                break;
            case 27:
                this.closeDialog();
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HelpComponent.prototype, "enterKeyEvent", null);
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/user-options/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.scss */ "./src/app/user-options/help/help.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/user-options/infringements/infringements.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/user-options/infringements/infringements.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alternative center\">\r\n  <!-- Display of login modal -->\r\n  <!-- Displays user info image -->\r\n  <img class=\"padding-image\" src=\"assets/images/user-options/infringements/infringements.png\" alt=\"Infringements.png\">\r\n  <hr>\r\n  <mat-dialog-content>\r\n    <!-- Filter table input-->\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n    <!-- Mat table to display user infringements -->\r\n    <div>\r\n      <table mat-table [dataSource]=\"tableData\" class=\"table\" matSort>\r\n        <!-- Date Column -->\r\n        <ng-container matColumnDef=\"Date\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n          <td mat-cell *matCellDef=\"let report\"> {{report.Date}} </td>\r\n        </ng-container>\r\n        <!-- Description Column -->\r\n        <ng-container matColumnDef=\"Description\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\r\n          <td mat-cell *matCellDef=\"let report\"> {{report.Description}} </td>\r\n        </ng-container>\r\n        <!-- Report Type Column -->\r\n        <ng-container matColumnDef=\"ReportType\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Report Type </th>\r\n          <td mat-cell *matCellDef=\"let report\"> {{report.ReportType}} </td>\r\n        </ng-container>\r\n        <!-- Amount Column -->\r\n        <ng-container matColumnDef=\"Amount\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Amount </th>\r\n          <td mat-cell *matCellDef=\"let report\"> R{{report.Amount}} </td>\r\n        </ng-container>\r\n      \r\n      <tr mat-header-row *matHeaderRowDef=\"displayColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayColumns;\"></tr>\r\n      </table>\r\n    </div>\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n  </mat-dialog-content>\r\n  <hr>\r\n  <br>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-options/infringements/infringements.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/user-options/infringements/infringements.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n\n.table {\n  width: 100%;\n  height: 50%;\n  overflow: auto; }\n\n.padding-image {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: auto; }\n"

/***/ }),

/***/ "./src/app/user-options/infringements/infringements.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/user-options/infringements/infringements.component.ts ***!
  \***********************************************************************/
/*! exports provided: InfringementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfringementsComponent", function() { return InfringementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfringementsComponent = /** @class */ (function () {
    function InfringementsComponent(http, appService) {
        this.http = http;
        this.appService = appService;
        this.displayColumns = ['Date', 'Description', 'ReportType', 'Amount'];
    }
    // Initializes on load
    InfringementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Gathers infringement data from backend
        this.http.get(_app_service__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + "/infringements/" + this.appService.getState('FacilityID'))
            .subscribe(function (response) {
            _this.infringBackend = response;
            // Removes unnecessary chars from data
            for (var k = 0; k < _this.infringBackend.length; k++) {
                _this.infringBackend[k].Date = _this.infringBackend[k].Date.slice(0, -14);
            }
            // sends data to table
            _this.tableData = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.infringBackend);
            _this.tableData.paginator = _this.paginator;
            _this.tableData.sort = _this.sort;
        });
    };
    // Closes the dialog
    InfringementsComponent.prototype.cancle = function () {
    };
    // filter used on table
    InfringementsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.tableData.filter = filterValue;
    };
    // Captures keyboard events
    InfringementsComponent.prototype.enterKeyEvent = function (event) {
        switch (event.keyCode) {
            case 13:
                this.cancle();
                break;
            case 27:
                this.cancle();
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], InfringementsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], InfringementsComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InfringementsComponent.prototype, "enterKeyEvent", null);
    InfringementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-infringements',
            template: __webpack_require__(/*! ./infringements.component.html */ "./src/app/user-options/infringements/infringements.component.html"),
            styles: [__webpack_require__(/*! ./infringements.component.scss */ "./src/app/user-options/infringements/infringements.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], InfringementsComponent);
    return InfringementsComponent;
}());



/***/ }),

/***/ "./src/app/user-options/request-parking/request-parking.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/user-options/request-parking/request-parking.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alternative center\">\r\n  <!-- Display of login modal -->\r\n  <!-- Displays request parking image -->\r\n  <img class=\"padding-image\" src=\"assets/images/user-options/request-parking/request-parking.png\" alt=\"User Info\">\r\n  <hr>\r\n  <div class=\"padding-feilds\">\r\n    <mat-dialog-content [formGroup]=\"form\">\r\n    <!-- Mat form feild: parking area -->\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Parking Area\" \r\n                    formControlName=\"parkingArea\"\r\n                    matInput\r\n                    [(value)]= \"parkingArea\"\r\n                    (selectionChange)='getAreaFromSelect()'>\r\n          <mat-option *ngFor=\"let ParkingArea of distinctArea\"  [value]=\"ParkingArea\">\r\n            {{ParkingArea}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <br>\r\n      <!-- Mat form feild: parking spot -->\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Parking Spot\" \r\n                    formControlName=\"parkingSpot\"  \r\n                    matInput\r\n                    [(value)]= \"parkingSpot\"\r\n                    (selectionChange)='getSpotFormSelect()'>\r\n          <mat-option *ngFor=\"let ParkingSpot of spotsAssociated\" [value]=\"ParkingSpot.ParkingSpace\">\r\n            {{ParkingSpot.ParkingSpace}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </mat-dialog-content>\r\n  </div>\r\n  <br>\r\n  <div *ngIf=\"areaSelected && !markerEmpty\" class=\"padding-map\">\r\n    <app-map longitude={{longitude}} latitude={{latitude}} parkingArea={{selectedArea}}></app-map>\r\n  </div>\r\n  <div *ngIf=\"markerEmpty\">\r\n    <p>No map data to display</p>\r\n  </div>\r\n  <hr>\r\n  <div class=\"padding-buttons\">\r\n  <mat-dialog-actions>\r\n    <!-- Close button -->\r\n    <button mat-button\r\n      color=\"warn\"\r\n     (click)=\"cancle()\">\r\n      <mat-icon svgIcon=\"cancel\"></mat-icon>\r\n      Cancel\r\n    </button>\r\n    <!-- Update button -->\r\n    <button mat-stroked-button\r\n      color=\"accent\"\r\n      [disabled]=\"(!areaSelected || !spotSelected)\"\r\n      (click)=\"submitRequestParking()\">\r\n      <mat-icon svgIcon=\"cube-send\"></mat-icon> \r\n      request\r\n    </button>\r\n  </mat-dialog-actions>\r\n  </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/user-options/request-parking/request-parking.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/user-options/request-parking/request-parking.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n\n.padding-image {\n  padding-left: 31%; }\n\n.padding-feilds {\n  padding-left: 39%; }\n\n.padding-buttons {\n  padding-left: 38%; }\n\n.center2 {\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n.padding-map {\n  padding-left: 14%; }\n"

/***/ }),

/***/ "./src/app/user-options/request-parking/request-parking.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/user-options/request-parking/request-parking.component.ts ***!
  \***************************************************************************/
/*! exports provided: RequestParkingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestParkingComponent", function() { return RequestParkingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var RequestParkingComponent = /** @class */ (function () {
    function RequestParkingComponent(fb, snackBar, http, appService
    // private uniparkPage: UniparkPageComponent
    ) {
        this.fb = fb;
        this.snackBar = snackBar;
        this.http = http;
        this.appService = appService;
        this.markerEmpty = false;
        this.spotsAssociated = [];
        this.areaSelected = false;
        this.spotSelected = false;
    }
    // Initializes on load
    RequestParkingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.disableSpot = true;
        this.form = this.fb.group({
            parkingArea: [this.parkingArea, []],
            parkingSpot: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: this.disableSpot }),
        });
        // Gets request data fromn backend
        this.http.get(_app_service__WEBPACK_IMPORTED_MODULE_4__["BASE_URL"] + "/parking/request/info/" + this.appService.getState('FacilityID'))
            .subscribe(function (response) {
            _this.requestOptions = response;
            // Gets distinct parking areas for displaying in select
            _this.distinctArea = Array.from(new Set(_this.requestOptions
                .map(function (area) { return area.ParkingArea; })));
        });
    };
    // opens the snackBar with error
    RequestParkingComponent.prototype.openSnackBarFail = function () {
        this.snackBar.open('Request Failed', 'OK', {
            duration: 2000,
        });
    };
    // opens the snackBar with success
    RequestParkingComponent.prototype.openSnackBarPass = function () {
        // opens the snackBar with error
        this.snackBar.open('Successfully Requested!', 'OK', {
            duration: 2000,
        });
    };
    // Closes dialog
    RequestParkingComponent.prototype.cancle = function () {
        this.areaSelected = false;
        this.spotSelected = false;
        this.selectedArea = null;
        this.selectedSpot = null;
        this.form.controls.parkingSpot.disable();
        this.form.controls.parkingArea.reset();
        this.form.controls.parkingSpot.reset();
    };
    // Gets selected area
    RequestParkingComponent.prototype.getAreaFromSelect = function () {
        var _this = this;
        this.selectedArea = this.form.value.parkingArea;
        if (this.selectedArea) {
            this.form.controls.parkingSpot.enable();
            this.setSpotData(this.selectedArea);
            this.areaSelected = true;
            var req = this.requestOptions;
            // Gets spots for selected area
            var coordinates = req.find(function (data) { return data.ParkingArea === _this.selectedArea; });
            this.drawingCo = coordinates.AreaLocation;
            if (this.drawingCo) {
                this.drawingCo = this.drawingCo.split(',');
                this.longitude = this.drawingCo[1];
                this.latitude = this.drawingCo[0];
                console.log(this.longitude);
                console.log(this.latitude);
                console.log(this.drawingCo);
            }
            else {
                this.markerEmpty = true;
            }
        }
    };
    // Sets spot data to be used in control
    RequestParkingComponent.prototype.setSpotData = function (selectedArea) {
        var req = this.requestOptions;
        this.spotsAssociated = [];
        this.parkingSpot = null;
        this.spotSelected = null;
        // Gets spots for selected area
        for (var _i = 0, req_1 = req; _i < req_1.length; _i++) {
            var key = req_1[_i];
            if (key.ParkingArea === selectedArea) {
                this.spotsAssociated.push(key);
            }
        }
    };
    // Gets spot from select
    RequestParkingComponent.prototype.getSpotFormSelect = function () {
        this.selectedSpot = this.form.value.parkingSpot;
        if (this.selectedSpot) {
            this.spotSelected = true;
        }
    };
    // Submits the request data to backend
    RequestParkingComponent.prototype.submitRequestParking = function () {
        return __awaiter(this, void 0, void 0, function () {
            var reqResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Number(this.selectedSpot);
                        if (!(this.selectedArea === undefined || this.selectedSpot === undefined)) return [3 /*break*/, 1];
                        this.openSnackBarFail();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.http.post(_app_service__WEBPACK_IMPORTED_MODULE_4__["BASE_URL"] + "/request-parking", { PersonnelID: this.appService.getState('FacilityID'), ParkingSpaceID: this.selectedSpot })
                            .toPromise()
                            .catch(console.error)];
                    case 2:
                        reqResponse = _a.sent();
                        if (reqResponse && reqResponse.data.trim() === 'SUCCESS') {
                            this.openSnackBarPass();
                            this.cancle();
                        }
                        else {
                            this.openSnackBarFail();
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Captures keyboard events
    RequestParkingComponent.prototype.enterKeyEvent = function (event) {
        switch (event.keyCode) {
            case 13:
                this.submitRequestParking();
                break;
            case 27:
                this.cancle();
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RequestParkingComponent.prototype, "enterKeyEvent", null);
    RequestParkingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-parking',
            template: __webpack_require__(/*! ./request-parking.component.html */ "./src/app/user-options/request-parking/request-parking.component.html"),
            styles: [__webpack_require__(/*! ./request-parking.component.scss */ "./src/app/user-options/request-parking/request-parking.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
            // private uniparkPage: UniparkPageComponent
        ])
    ], RequestParkingComponent);
    return RequestParkingComponent;
}());



/***/ }),

/***/ "./src/app/user-options/update-user-info/update-user-info.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/user-options/update-user-info/update-user-info.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alternative center\">\r\n    <!-- Display of login modal -->\r\n    <!-- Displays request parking image -->\r\n    <img class=\"padding-image\" src=\"assets/images/user-options/update-info/update-info.png\" alt=\"User Info\">\r\n    <hr>\r\n    <div class=\"padding-feilds\">\r\n      <mat-dialog-content [formGroup]=\"form\">\r\n        <!-- Mat form feild: cell phone number -->\r\n        <mat-form-field hintLabel=\"Max 10 digits\">\r\n          <input (keypress)= \"onlyNumberKey($event)\"\r\n                  matInput \r\n                  #inputCell \r\n                  maxlength=\"10\" \r\n                  placeholder=\"Cell-Phone Number\"\r\n                  formControlName=\"cellNo\">\r\n          <mat-hint align=\"end\">{{ inputCell.value?.length || 0 }}/10</mat-hint>\r\n          <mat-error *ngIf=\"cellNo.invalid\">Please enter all 10 digits!</mat-error>\r\n        </mat-form-field>\r\n        <mat-checkbox\r\n          [checked]=\"resetCell\"\r\n          (change)=\"changeCell()\"\r\n          [labelPosition]=\"checkBoxPos\">\r\n        </mat-checkbox>\r\n        <br>\r\n        <!-- Mat form feild: email address -->\r\n        <mat-form-field>\r\n          <input  matInput\r\n                  #inputEmail\r\n                  placeholder=\"E-mail Address\"\r\n                  formControlName=\"email\">\r\n          <mat-error *ngIf=\"email.invalid\">{{ getErrorMessage() }}</mat-error>\r\n        </mat-form-field>\r\n        <mat-checkbox\r\n          [checked]=\"resetEmail\"\r\n          (change)=\"changeEmail()\"\r\n          [labelPosition]=\"checkBoxPos\">\r\n        </mat-checkbox>\r\n        <br>\r\n        <!-- Mat form feild: password -->\r\n        <mat-form-field> \r\n          <input matInput\r\n                  #inputNewPass \r\n                  placeholder=\"New Password\"\r\n                  [type]=\"hide ? 'password' : 'text'\"\r\n                  formControlName=\"newPass\">\r\n          <mat-error *ngIf=\"newPass.invalid\">Doesn't meet requrements!</mat-error>\r\n        </mat-form-field>\r\n        <mat-checkbox\r\n          [checked]=\"resetPass\"\r\n          (change)=\"changePassword()\"\r\n          [labelPosition]=\"checkBoxPos\">\r\n        </mat-checkbox>\r\n        <br>\r\n        <!-- Hints for password entry -->\r\n        <div class=\"requirement\" *ngIf=\"newPass.value?.length > 0\">\r\n          <div *ngIf=\"!testMinUpper()\">\r\n              *Minimum 2 Uppercase Characters.\r\n          </div>\r\n          <div *ngIf=\"!testMinNum()\">\r\n              *Minimum 2 Numbers.\r\n          </div>\r\n          <div *ngIf=\"!testMinSpecial()\">\r\n              *Minimum 1 Special Characters.\r\n          </div>\r\n          <div *ngIf=\"newPass.value?.length < 10\">\r\n              *Minimum 10 Characters.\r\n          </div>\r\n        </div>\r\n        <mat-form-field>\r\n          <input matInput\r\n                  placeholder=\"Confirm Password\"\r\n                  [type]=\"hide ? 'password' : 'text'\"\r\n                  formControlName=\"confirmNewPass\">\r\n          <mat-icon matSuffix\r\n            (click)=\"hide = !hide\">{{ hide ? 'visibility' : 'visibility_off' }} </mat-icon>\r\n        </mat-form-field>\r\n      </mat-dialog-content>\r\n    </div>\r\n    <hr>\r\n    <br>\r\n    <div class=\"padding-buttons\">\r\n      <!-- Close button -->\r\n      <button mat-button \r\n        color=\"warn\"\r\n        (click)=\"cancle()\">\r\n        <mat-icon svgIcon=\"cancel\"></mat-icon>\r\n        Cancel\r\n      </button>\r\n      <!-- Update button -->\r\n      <button\r\n        [disabled]=\"email.invalid || cellNo.invalid || clean || newPass.invalid\" \r\n        mat-stroked-button\r\n        color=\"accent\"\r\n        (click)=\"verifyUpdateInfo()\">\r\n        <mat-icon svgIcon=\"cube-send\"></mat-icon> \r\n        Update\r\n      </button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-options/update-user-info/update-user-info.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/user-options/update-user-info/update-user-info.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n\n.padding-feilds {\n  padding-left: 37%; }\n\n.padding-buttons {\n  padding-left: 36%; }\n\n.requirement {\n  padding-top: 0.5em;\n  color: orangered;\n  font-family: Arial, serif;\n  font-size: 9pt; }\n\n.padding-image {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: auto; }\n"

/***/ }),

/***/ "./src/app/user-options/update-user-info/update-user-info.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/user-options/update-user-info/update-user-info.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UpdateUserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserInfoComponent", function() { return UpdateUserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var UpdateUserInfoComponent = /** @class */ (function () {
    function UpdateUserInfoComponent(fb, snackBar, http, appService
    // private uniparkPage: UniparkPageComponent
    ) {
        this.fb = fb;
        this.snackBar = snackBar;
        this.http = http;
        this.appService = appService;
        // Vairable to check if feilds are "clean"
        this.clean = true;
        // Checkbox value changes
        this.checkBoxPos = 'before';
        // Regex for validation
        this.cellReg = new RegExp(/[0-9]{10}/);
        this.strongPassReg = new RegExp(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{10,}$/);
        // Hides password
        this.hide = true;
        this.resetCell = false;
        this.resetEmail = false;
        this.resetPass = false;
    }
    // Initializes on load
    UpdateUserInfoComponent.prototype.ngOnInit = function () {
        this.disableCell = true;
        this.disableEmail = true;
        this.disablePass = true;
        this.disableConfirm = true;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: this.disableEmail }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.cellNo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: this.disableCell }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.cellReg)]);
        this.newPass = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: this.disablePass }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.strongPassReg)]);
        this.confirmNewPass = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: this.disableConfirm }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.newPass.value)]);
        this.form = this.fb.group({
            'email': this.email,
            'cellNo': this.cellNo,
            'newPass': this.newPass,
            'confirmNewPass': this.confirmNewPass
        });
    };
    UpdateUserInfoComponent.prototype.testMinUpper = function () {
        var minUpper = new RegExp(/(?=.*[A-Z].*[A-Z])/);
        return minUpper.test(this.newPass.value);
    };
    UpdateUserInfoComponent.prototype.testMinNum = function () {
        var minNum = new RegExp(/(?=.*[0-9].*[0-9])/);
        return minNum.test(this.newPass.value);
    };
    UpdateUserInfoComponent.prototype.testMinSpecial = function () {
        var minSpecial = new RegExp(/(?=.*[!@#$&*])/);
        return minSpecial.test(this.newPass.value);
    };
    // Only allows numbers to be typed
    UpdateUserInfoComponent.prototype.onlyNumberKey = function (event) {
        return (event.charCode === 8 || event.charCode === 0)
            ? null
            : event.charCode >= 48 && event.charCode <= 57;
    };
    // Enables or Disables cell feild depending on state
    UpdateUserInfoComponent.prototype.changeCell = function () {
        if (this.disableCell === true) {
            this.form.controls.cellNo.enable();
            this.disableCell = false;
            this.resetCell = true;
            this.clean = false;
            this.viewCell.nativeElement.focus();
        }
        else {
            this.form.controls.cellNo.disable();
            this.form.controls.cellNo.setValue('');
            this.disableCell = true;
            this.resetCell = false;
            this.checkFeilds();
        }
    };
    // Enables or Disables email feild depending on state
    UpdateUserInfoComponent.prototype.changeEmail = function () {
        if (this.disableEmail === true) {
            this.form.controls.email.enable();
            this.disableEmail = false;
            this.resetEmail = true;
            this.clean = false;
            this.viewEmail.nativeElement.focus();
        }
        else {
            this.form.controls.email.disable();
            this.form.controls.email.setValue('');
            this.disableEmail = true;
            this.resetEmail = false;
            this.checkFeilds();
        }
    };
    // Enables or Disables password feilds depending on state
    UpdateUserInfoComponent.prototype.changePassword = function () {
        if (this.disablePass === true) {
            this.form.controls.newPass.enable();
            this.form.controls.confirmNewPass.enable();
            this.disablePass = false;
            this.resetPass = true;
            this.clean = false;
            this.viewNewPass.nativeElement.focus();
        }
        else {
            this.form.controls.newPass.disable();
            this.form.controls.confirmNewPass.disable();
            this.form.controls.newPass.setValue('');
            this.form.controls.confirmNewPass.setValue('');
            this.disablePass = true;
            this.resetPass = false;
            this.checkFeilds();
        }
    };
    // checks if all feilds are empty
    UpdateUserInfoComponent.prototype.checkFeilds = function () {
        var pass = this.form.value.newPass;
        var cPass = this.form.value.confirmNewPass;
        var cell = String(this.cellNo.value);
        var email = this.email.value;
        if (!pass && !cPass && !cell && !email &&
            this.disableCell && this.disablePass && this.disableConfirm && this.disableEmail) {
            this.clean = true;
        }
    };
    // Finds if the email entered is correct or not
    UpdateUserInfoComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('email') ? 'Not a valid email' : '';
    };
    // Opens the snackBar with error
    UpdateUserInfoComponent.prototype.openSnackBarFail = function () {
        this.snackBar.open('Update Failed', 'OK', {
            duration: 2000,
        });
    };
    // Opens the snackBar with success
    UpdateUserInfoComponent.prototype.openSnackBarSuccess = function () {
        this.snackBar.open('Update Success', 'OK', {
            duration: 2000,
        });
    };
    // Prepares data to be sent to backend
    UpdateUserInfoComponent.prototype.prepareUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var newPass, newEmail, newCell, updateResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newPass = this.newPass.value;
                        newEmail = this.email.value;
                        newCell = this.cellNo.value;
                        // Sends update information to json
                        this.userInfoJson = {
                            'PersonnelID': this.appService.getState('FacilityID'),
                            'PersonnelPhoneNumber': newCell,
                            'PersonnelEmail': newEmail,
                            'PersonnelPassword': newPass
                        };
                        console.log(this.userInfoJson);
                        return [4 /*yield*/, this.http.put(_app_service__WEBPACK_IMPORTED_MODULE_4__["BASE_URL"] + "/personnel/update", this.userInfoJson)
                                .toPromise()
                                .catch(console.error)];
                    case 1:
                        updateResponse = _a.sent();
                        console.log(updateResponse);
                        if (updateResponse && updateResponse.data.trim() === 'SUCCESS') {
                            this.openSnackBarSuccess();
                            this.cancle();
                        }
                        else {
                            this.openSnackBarFail();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // Verifys information entered by user
    UpdateUserInfoComponent.prototype.verifyUpdateInfo = function () {
        var newPass = this.newPass.value;
        var confirmNewPass = this.confirmNewPass.value;
        // Checks passwords entered
        if (newPass === confirmNewPass && confirmNewPass === newPass) {
            this.prepareUpdate();
        }
        else if (newPass === '' && confirmNewPass === '') {
            this.prepareUpdate();
        }
        else if (newPass === undefined && confirmNewPass === undefined) {
            this.prepareUpdate();
        }
        else {
            this.openSnackBarFail();
        }
    };
    // Clears user entered data
    UpdateUserInfoComponent.prototype.cancle = function () {
        // Phone clear
        this.form.controls.cellNo.disable();
        this.form.controls.cellNo.setValue('');
        this.disableCell = true;
        // Email clear
        this.form.controls.email.disable();
        this.form.controls.email.setValue('');
        this.disableEmail = true;
        // Password clear
        this.form.controls.newPass.disable();
        this.form.controls.confirmNewPass.disable();
        this.form.controls.newPass.setValue('');
        this.form.controls.confirmNewPass.setValue('');
        this.disablePass = true;
        // Unchecks boxes
        this.resetCell = false;
        this.resetEmail = false;
        this.resetPass = false;
    };
    // Captures keyboard events
    UpdateUserInfoComponent.prototype.enterKeyEvent = function (event) {
        switch (event.keyCode) {
            case 13:
                if (this.email.valid) {
                    this.verifyUpdateInfo();
                }
                else if (this.cellNo.valid) {
                    this.verifyUpdateInfo();
                }
                else if (!this.clean) {
                    this.verifyUpdateInfo();
                }
                break;
            case 27:
                this.cancle();
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputCell'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UpdateUserInfoComponent.prototype, "viewCell", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputEmail'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UpdateUserInfoComponent.prototype, "viewEmail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputNewPass'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UpdateUserInfoComponent.prototype, "viewNewPass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UpdateUserInfoComponent.prototype, "enterKeyEvent", null);
    UpdateUserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-user-info',
            template: __webpack_require__(/*! ./update-user-info.component.html */ "./src/app/user-options/update-user-info/update-user-info.component.html"),
            styles: [__webpack_require__(/*! ./update-user-info.component.scss */ "./src/app/user-options/update-user-info/update-user-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
            // private uniparkPage: UniparkPageComponent
        ])
    ], UpdateUserInfoComponent);
    return UpdateUserInfoComponent;
}());



/***/ }),

/***/ "./src/app/user-options/user-info/user-info.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user-options/user-info/user-info.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alternative center\">\r\n  <!-- Display of login modal -->\r\n  <!-- Displays user info image -->\r\n  <img class=\"padding-image\" src=\"assets/images/user-options/user-info/user-info.png\" alt=\"User Info\">\r\n  <hr>\r\n  <mat-dialog-content>\r\n    <!-- Mat list to display user info -->\r\n    <mat-list role=\"list\">\r\n      <mat-list-item role=\"listitem\">\r\n        <strong>Name: &nbsp;</strong> {{ PersonelName }}\r\n      </mat-list-item>\r\n\r\n      <mat-list-item role=\"listitem\">\r\n        <strong>Phone Number: &nbsp;</strong> {{ PhoneNumber }}\r\n      </mat-list-item>\r\n\r\n      <mat-list-item role=\"listitem\">\r\n        <strong>Email: &nbsp;</strong> {{ Email }}\r\n      </mat-list-item>\r\n\r\n      <mat-list-item role=\"listitem\">\r\n        <strong>Personnel Type: &nbsp;</strong> {{ Type }}\r\n      </mat-list-item>\r\n\r\n      <mat-list-item role=\"listitem\">\r\n        <strong>Personnel Level: &nbsp;</strong> {{ PersonelLevel }}\r\n      </mat-list-item>\r\n    </mat-list>\r\n  </mat-dialog-content>\r\n  <hr>\r\n  <br>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-options/user-info/user-info.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/user-options/user-info/user-info.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n\n.padding-image {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: auto; }\n"

/***/ }),

/***/ "./src/app/user-options/user-info/user-info.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user-options/user-info/user-info.component.ts ***!
  \***************************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(http, appService) {
        this.http = http;
        this.appService = appService;
        this.userInfo = {};
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var pollData = function () {
            var facilityID = _this.appService.getState('FacilityID');
            if (facilityID) {
                // Gets user info from backend
                _this.http.get(_app_service__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + "/personnel/specified/" + _this.appService.getState('FacilityID'))
                    .subscribe(function (response) {
                    _this.PersonelName = response.PersonelName;
                    _this.PhoneNumber = response.PhoneNumber;
                    _this.Email = response.Email;
                    _this.Type = response.Type;
                    _this.PersonelLevel = response.PersonelLevel;
                });
            }
            else {
                setTimeout(pollData, 1000);
            }
        };
        pollData();
    };
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/user-options/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.scss */ "./src/app/user-options/user-info/user-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/user-options/view-assigned-parking/view-assigned-parking.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/user-options/view-assigned-parking/view-assigned-parking.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alternative center\">\r\n  <!-- Display of login modal -->\r\n  <!-- Displays assigned parking image -->\r\n  <img class=\"padding-image\" src=\"assets/images/user-options/assigned-parking/assigned-parking.png\" alt=\"User Info\">\r\n  <hr>\r\n  <!-- Mat list to display assigned parking -->\r\n  <div class=\"padding-feilds\">\r\n    <mat-list role=\"list\">\r\n      <mat-list-item role=\"listitem\">\r\n        <strong>Parking Name: &nbsp;</strong> {{ ParkingName }}\r\n      </mat-list-item>\r\n      <mat-list-item role=\"listitem\">\r\n        <strong>Parking Access Level: &nbsp;</strong> {{ ParkingAccessLevel }}\r\n      </mat-list-item>\r\n      <mat-list-item role=\"listitem\">\r\n        <strong>Location: &nbsp;</strong> {{ Location }}\r\n      </mat-list-item>\r\n    </mat-list>\r\n  </div>\r\n  <div *ngIf=\"ParkingName && !markerEmpty\" class=\"padding-map\">\r\n    <app-map longitude={{longitude}} latitude={{latitude}} parkingArea={{ParkingName}} ></app-map>\r\n  </div>\r\n  <div *ngIf=\"markerEmpty\">\r\n    <p>No map data to display.</p>\r\n  </div>\r\n  <hr>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/user-options/view-assigned-parking/view-assigned-parking.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/user-options/view-assigned-parking/view-assigned-parking.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n\n.padding-map {\n  padding-left: 14%; }\n\n.padding-image {\n  padding-left: 29%; }\n\n.padding-feilds {\n  padding-left: 32%; }\n"

/***/ }),

/***/ "./src/app/user-options/view-assigned-parking/view-assigned-parking.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/user-options/view-assigned-parking/view-assigned-parking.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ViewAssignedParkingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAssignedParkingComponent", function() { return ViewAssignedParkingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewAssignedParkingComponent = /** @class */ (function () {
    function ViewAssignedParkingComponent(http, appService) {
        this.http = http;
        this.appService = appService;
    }
    ViewAssignedParkingComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Gets user parking info from backend
        /* Polling
            Computer Science
            Polling, or polled operation, in computer science, refers to actively sampling the status of an
            external device by a client program as a synchronous activity. Polling is most often used in
            terms of input/output, and is also referred to as polled or software-driven.
        */
        /*
         const pollData = () => {
           const facilityID = this.appService.getState('FacilityID');
           if (facilityID) {
             this.http.get(`${BASE_URL}/parking/assigned/` + facilityID)
               .subscribe((response: any) => {
                 this.ParkingName = response.ParkingName;
                 this.ParkingAccessLevel = response.ParkingAccessLevel;
                 this.Location = response.Location;
               });
           } else {
             setTimeout(pollData, 1000);
           }
         };
         pollData();*/
        this.http.get(_app_service__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + "/parking/assigned/" + this.appService.getState('FacilityID'))
            .subscribe(function (response) {
            _this.ParkingName = response.ParkingName;
            _this.ParkingAccessLevel = response.ParkingAccessLevel;
            _this.Location = response.Location;
            _this.http.get(_app_service__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + "/parking/request/info/" + _this.appService.getState('FacilityID'))
                .subscribe(function (resp) {
                _this.requestOptions = resp;
                var req = _this.requestOptions;
                // Gets spots for selected area
                var coordinates = req.find(function (data) { return data.ParkingArea === _this.ParkingName; });
                _this.drawingCo = coordinates.AreaLocation;
                if (_this.drawingCo) {
                    _this.drawingCo = _this.drawingCo.split(',');
                    _this.longitude = _this.drawingCo[1];
                    _this.latitude = _this.drawingCo[0];
                    console.log(_this.drawingCo);
                    console.log(_this.longitude);
                    console.log(_this.latitude);
                }
                else {
                    _this.markerEmpty = true;
                }
            });
        });
    };
    ViewAssignedParkingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-assigned-parking',
            template: __webpack_require__(/*! ./view-assigned-parking.component.html */ "./src/app/user-options/view-assigned-parking/view-assigned-parking.component.html"),
            styles: [__webpack_require__(/*! ./view-assigned-parking.component.scss */ "./src/app/user-options/view-assigned-parking/view-assigned-parking.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], ViewAssignedParkingComponent);
    return ViewAssignedParkingComponent;
}());



/***/ }),

/***/ "./src/app/user-options/view-requests/view-requests.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/user-options/view-requests/view-requests.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alternative center\">\r\n  <!-- Display of login modal -->\r\n  <!-- Displays user info image -->\r\n  <img class=\"padding-image\" src=\"assets/images/user-options/requests/requests.png\" alt=\"Requests.png\">\r\n  <hr>\r\n  <mat-dialog-content>\r\n    <!-- Mat table to display user infringements -->\r\n    <div *ngIf=\"!empty\">\r\n      <!-- Filter table input-->\r\n      <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n      </mat-form-field>\r\n      <table mat-table [dataSource]=\"tableData\" class=\"table\" matSort>\r\n        <!-- Date Column -->\r\n        <ng-container matColumnDef=\"Date\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Date: </th>\r\n          <td mat-cell *matCellDef=\"let request\"> {{request.RequestDate}} </td>\r\n        </ng-container>\r\n        <!-- ParkingArea Column -->\r\n        <ng-container matColumnDef=\"ParkingArea\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Parking Area: </th>\r\n          <td mat-cell *matCellDef=\"let request\"> {{request.ParkingArea}} </td>\r\n        </ng-container>\r\n        <!-- ParkingSpace Column -->\r\n        <ng-container matColumnDef=\"ParkingSpace\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Parking Space: </th>\r\n          <td mat-cell *matCellDef=\"let request\"> {{request.ParkingSpace}} </td>\r\n        </ng-container>\r\n        <!-- FEE Column -->\r\n        <ng-container matColumnDef=\"FEE\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Fee: </th>\r\n          <td mat-cell *matCellDef=\"let request\"> R{{request.Fee}} </td>\r\n        </ng-container>\r\n        <!-- Cancel Column -->\r\n        <ng-container matColumnDef=\"Cancel\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Cancel: </th>\r\n            <td mat-cell *matCellDef=\"let request\">\r\n                <button mat-button \r\n                  color=\"warn\"\r\n                  (click)=\"cancelRequest(request.ID)\">\r\n                  <mat-icon svgIcon=\"cancel\"></mat-icon>\r\n                  Cancel\r\n                </button>\r\n            </td>\r\n          </ng-container>\r\n      <tr mat-header-row *matHeaderRowDef=\"displayColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayColumns;\"></tr>\r\n      </table>\r\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n    <div *ngIf=\"empty\">\r\n      <p>NO PENDING REQUESTS</p>\r\n    </div>\r\n  </mat-dialog-content>\r\n  <hr>\r\n  <br>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-options/view-requests/view-requests.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/user-options/view-requests/view-requests.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n\n.table {\n  width: 100%;\n  height: 50%;\n  overflow: auto; }\n\n.padding-image {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: auto; }\n"

/***/ }),

/***/ "./src/app/user-options/view-requests/view-requests.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/user-options/view-requests/view-requests.component.ts ***!
  \***********************************************************************/
/*! exports provided: ViewRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRequestsComponent", function() { return ViewRequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewRequestsComponent = /** @class */ (function () {
    function ViewRequestsComponent(http, snackBar, appService) {
        this.http = http;
        this.snackBar = snackBar;
        this.appService = appService;
        this.displayColumns = ['Date', 'ParkingArea', 'ParkingSpace', 'FEE', 'Cancel'];
        this.empty = false;
    }
    ViewRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Gathers infringement data from backend
        this.http.get(_app_service__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + "/personnel/requests/" + this.appService.getState('FacilityID'))
            .subscribe(function (response) {
            _this.viewRequests = response;
            if (_this.viewRequests.length > 0) {
                // Removes unnecessary chars from data
                for (var k = 0; k < _this.viewRequests.length; k++) {
                    _this.viewRequests[k].RequestDate = _this.viewRequests[k].RequestDate.slice(0, -14);
                }
                _this.sendTableData();
            }
            else {
                _this.empty = true;
            }
        });
    };
    // sends data to table
    ViewRequestsComponent.prototype.sendTableData = function () {
        this.tableData = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.viewRequests);
        this.tableData.paginator = this.paginator;
        this.tableData.sort = this.sort;
        console.log(this.viewRequests);
    };
    // opens the snackBar with error
    ViewRequestsComponent.prototype.openSnackBarFail = function () {
        this.snackBar.open('Cancel Failed', 'OK', {
            duration: 2000,
        });
    };
    // opens the snackBar with success
    ViewRequestsComponent.prototype.openSnackBarPass = function () {
        // opens the snackBar with error
        this.snackBar.open('Successfully Canceled Request!', 'OK', {
            duration: 2000,
        });
    };
    // filter used on table
    ViewRequestsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.tableData.filter = filterValue;
    };
    ViewRequestsComponent.prototype.cancelRequest = function (requestID) {
        var _this = this;
        // Gathers infringement data from backend
        this.http.get(_app_service__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + "/request/cancel/" + requestID)
            .subscribe(function (response) {
            if (response.data.trim() === 'SUCCESS') {
                for (var k = 0; k < _this.viewRequests.length; k++) {
                    if (_this.viewRequests[k].ID === requestID) {
                        _this.viewRequests.splice(k, 1);
                    }
                }
                _this.viewRequests.length < 1 ? _this.empty = true : _this.empty = false;
                _this.sendTableData();
                _this.openSnackBarPass();
            }
            else {
                _this.openSnackBarFail();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ViewRequestsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ViewRequestsComponent.prototype, "sort", void 0);
    ViewRequestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-requests',
            template: __webpack_require__(/*! ./view-requests.component.html */ "./src/app/user-options/view-requests/view-requests.component.html"),
            styles: [__webpack_require__(/*! ./view-requests.component.scss */ "./src/app/user-options/view-requests/view-requests.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], ViewRequestsComponent);
    return ViewRequestsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Uni Stuff\Project\uniParkWeb\UniPark-Web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map