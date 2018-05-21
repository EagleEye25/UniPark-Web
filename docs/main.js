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
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
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
                _app_routing__WEBPACK_IMPORTED_MODULE_16__["routing"]
            ],
            entryComponents: [
                _login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_9__["LoginDialogComponent"],
                _user_options_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_12__["UserInfoComponent"],
                _user_options_request_parking_request_parking_component__WEBPACK_IMPORTED_MODULE_15__["RequestParkingComponent"],
                _user_options_update_user_info_update_user_info_component__WEBPACK_IMPORTED_MODULE_13__["UpdateUserInfoComponent"],
                _user_options_view_assigned_parking_view_assigned_parking_component__WEBPACK_IMPORTED_MODULE_14__["ViewAssignedParkingComponent"]
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

/* Preload strategry */

/* end preload strategy */


/* actual routing */
var routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"], pathMatch: 'full' },
    { path: 'admin', component: _unipark_page_unipark_page_component__WEBPACK_IMPORTED_MODULE_2__["UniparkPageComponent"], pathMatch: 'full' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"] });


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

module.exports = "<!-- Toolbar with menu button, menu items -->\r\n<div>\r\n    <mat-toolbar color=\"primary\">\r\n        <!-- Displays DC image -->\r\n        <img src=\"assets/images/branding/dc.png\" alt=\"DC\">\r\n        <span class=\"spacer\"></span>\r\n        <!-- Menu Button -->\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\"\r\n                matTooltip=\"Menu\"\r\n                matTooltipPosition=\"before\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <!-- Mat menu -->\r\n        <mat-menu #menu=\"matMenu\">\r\n            <!-- Login button -->\r\n            <button mat-menu-item (click)=\"openLoginDialog()\">\r\n              <mat-icon>fingerprint</mat-icon>\r\n              <span>Login</span>\r\n            </button>\r\n            <!-- Issues button -->\r\n            <button mat-menu-item disabled>\r\n              <mat-icon>announcement</mat-icon>\r\n              <span>Issues</span>\r\n            </button>\r\n            <!-- Disable button -->\r\n            <button mat-menu-item>\r\n              <mat-icon>notifications_off</mat-icon>\r\n              <span>Disable alerts</span>\r\n            </button>\r\n          </mat-menu>\r\n    </mat-toolbar>\r\n    <!-- TabGroup  under toolbar -->\r\n    <mat-tab-group>\r\n        <!-- Dragon code tab -->\r\n        <mat-tab label=\"Dragon Code\">\r\n          <!-- Displays Dragon Code image -->\r\n          <img src=\"assets/images/branding/dragon-code-name.gif\" alt=\"Dragon Code\" class=\"center\">\r\n          <!-- Dragon code information -->\r\n          <mat-tab-group class=\"center\">\r\n            <mat-tab label=\"Information\">\r\n              <p>Dragon Code is a group of 3rd year students from Nelson Mandela University, that have formed\r\n                together, to slay evil bugs and develop the most efficent, secure software for the fate of man kind!\r\n              </p>\r\n            </mat-tab>\r\n            <!-- Crew images, names -->\r\n            <mat-tab label=\"Crew\">\r\n              <p><br></p>\r\n              <div class=\"align-text-picture\">\r\n                <!-- Jason Eybers INFO -->\r\n                  <img src=\"assets/images/crew/jason.png\" alt=\"Jason Eybers\">\r\n                  <p> Jason Eybers<br>(Steve Jobless) <br>\r\n                    <mat-icon svgIcon=\"github-circle\"\r\n                              onclick=\"window.open('https://github.com/EagleEye25/')\"\r\n                              matTooltip=\"Github\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n                    <mat-icon svgIcon=\"linkedin-box\"\r\n                              onclick=\"window.open('https://www.linkedin.com/in/jason-henry-eybers-b63422157/')\"\r\n                              matTooltip=\"Linkedin\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n                    <mat-icon svgIcon=\"slack\"\r\n                              matTooltip=\"Slack username\"\r\n                              matTooltipPosition=\"below\">\r\n                    </mat-icon>\r\n                    <mat-icon svgIcon=\"twitter\"\r\n                              onclick=\"window.open('https://twitter.com/JasonEybers')\"\r\n                              matTooltip=\"Twitter\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n                    <mat-icon svgIcon=\"stack-overflow\"\r\n                              onclick=\"window.open('https://stackoverflow.com/users/9384658/eagleeye25')\"\r\n                              matTooltip=\"Stack-Overflow\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n                    <mat-icon svgIcon=\"email\"\r\n                              \r\n                              matTooltip=\"Email\"\r\n                              matTooltipPosition=\"below\">>\r\n                    </mat-icon>\r\n                  </p>\r\n              </div>\r\n              <!-- Daniel Maree INFO -->\r\n              <div class=\"align-text-picture\">\r\n                  <img src=\"assets/images/crew/daniel.png\" alt=\"Daniel Maree\">\r\n                  <p>Daniel Maree<br>(Copy Paster)</p>\r\n              </div>\r\n              <!-- Wihan Du Plessis INFO -->\r\n              <div class=\"align-text-picture\">\r\n                  <img src=\"assets/images/crew/wihan.png\" alt=\"Wihan Du Plessis\">\r\n                  <p>Wihan Du Plessis<br>(Data Monkey)</p>\r\n              </div>\r\n              <!-- Kobus Esterhuizen INFO -->\r\n              <div class=\"align-text-picture\">\r\n                  <img src=\"assets/images/crew/kobus.png\" alt=\"Kobus Esterhuizen\">\r\n                  <p>Kobus Esterhuizen<br>(Code-Modo Dragon)</p>\r\n              </div>\r\n              <!-- Maurice Garces De Gois INFO -->\r\n              <div class=\"align-text-picture\">\r\n                  <img src=\"assets/images/crew/maurice.png\" alt=\"Maurice Garcies De Gois\">\r\n                  <p>Maurice Garces<br>De Gois<br>(Ctrl-SpaceFreak)</p>\r\n              </div>\r\n            </mat-tab>\r\n          </mat-tab-group>\r\n        </mat-tab>\r\n        <mat-tab label=\"UniPark\">\r\n          <!-- Displays UniPark image -->\r\n          <img src=\"assets/images/branding/unipark.png\" alt=\"UniPark\" class=\"center-unipark\">\r\n            <!-- Unipark information -->  \r\n            <mat-tab-group class=\"center\">\r\n              <!-- Information -->\r\n              <mat-tab label=\"What is UniPark\">\r\n                <p>UniPark is an open souce project for a fully automated parking system, that will allow users that\r\n                  have access to a facilities parking area to enter. \r\n                  The program is securely setup to prevent unauthorized users\r\n                  access to the facility, also to help the facility to control traffic, ensure that person/s\r\n                  in the facility park in the correct area, which is assigned to them. The aim of the system\r\n                  is to improve security of the facility, and ensure that little to no theft occurs regarding motor vehicles.\r\n                </p>\r\n              </mat-tab>\r\n              <!-- The looks tab -->\r\n              <mat-tab label=\"The Looks\">\r\n                <p> Picutres of unipark goes here when its completed! </p>\r\n              </mat-tab>\r\n              <!-- Intallation tab -->\r\n              <mat-tab label=\"Installation\">\r\n                <!-- install (developers) -->\r\n                <p>\r\n                  To access UniPark repository (Developers): &nbsp;\r\n                    <button mat-button \r\n                            onclick=\"window.open('https://github.com/EagleEye25/uniPark-BackEnd')\">\r\n                      <mat-icon svgIcon=\"github-circle\"></mat-icon>\r\n                      Repository\r\n                    </button>\r\n                  <!-- install -->\r\n                    <br>\r\n                  To install Unipark click: &nbsp;\r\n                    <button mat-button \r\n                            onclick=\"window.open('https://github.com/EagleEye25/uniPark-BackEnd')\">\r\n                      <mat-icon svgIcon=\"download\"></mat-icon>\r\n                      DownLoad\r\n                    </button>\r\n                </p>\r\n              </mat-tab>\r\n            </mat-tab-group>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n.mat-badge-content {\n  font-weight: 600;\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-badge-small .mat-badge-content {\n  font-size: 6px; }\n.mat-badge-large .mat-badge-content {\n  font-size: 24px; }\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h5, .mat-typography h5 {\n  font: 400 11.62px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-h6, .mat-typography h6 {\n  font: 400 9.38px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n.mat-bottom-sheet-container {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400; }\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-stroked-button,\n.mat-flat-button, .mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n.mat-chip {\n  font-size: 13px;\n  line-height: 18px; }\n.mat-chip .mat-chip-trailing-icon.mat-icon,\n  .mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n.mat-cell, .mat-footer-cell {\n  font-size: 14px; }\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-calendar-body {\n  font-size: 13px; }\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field {\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field-wrapper {\n  padding-bottom: 1.34375em; }\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n.mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n.mat-form-field-infix {\n  padding: 0.5em 0;\n  border-top: 0.84375em solid transparent; }\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.34375em) scale(0.75);\n          transform: translateY(-1.34375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.34374em) scale(0.75);\n          transform: translateY(-1.34374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-label-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n.mat-form-field-label {\n  top: 1.34375em; }\n.mat-form-field-underline {\n  bottom: 1.34375em; }\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.66666667em;\n  top: calc(100% - 1.79166667em); }\n.mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n.mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.4375em 0; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.33335333%; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  top: 1.28125em; }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  bottom: 1.25em; }\n.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper {\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n.mat-form-field-appearance-fill .mat-form-field-infix {\n  padding: 0.25em 0 0.75em 0; }\n.mat-form-field-appearance-fill .mat-form-field-label {\n  top: 1.09375em;\n  margin-top: -0.5em; }\n.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-0.59375em) scale(0.75);\n          transform: translateY(-0.59375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-0.59374em) scale(0.75);\n          transform: translateY(-0.59374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 1em 0 1em 0; }\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  bottom: 1.34375em; }\n.mat-form-field-appearance-outline .mat-form-field-label {\n  top: 1.84375em;\n  margin-top: -0.25em; }\n.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.59375em) scale(0.75);\n          transform: translateY(-1.59375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.59374em) scale(0.75);\n          transform: translateY(-1.59374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n.mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select-trigger {\n  height: 1.125em; }\n.mat-slide-toggle-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-step-label {\n  font-size: 14px;\n  font-weight: 400; }\n.mat-step-label-selected {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n.mat-tooltip-handset {\n  font-size: 14px;\n  padding-top: 9px;\n  padding-bottom: 9px; }\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  font-size: 16px; }\n.mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  font-size: 16px; }\n.mat-list .mat-list-option .mat-line, .mat-nav-list .mat-list-option .mat-line, .mat-selection-list .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line, .mat-selection-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-option .mat-line, .mat-nav-list[dense] .mat-list-option .mat-line, .mat-selection-list[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n.mat-tree {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tree-node {\n  font-weight: 400;\n  font-size: 14px; }\n.mat-ripple {\n  overflow: hidden; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-ripple {\n      display: none; } }\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n.cdk-overlay-container:empty {\n    display: none; }\n.cdk-global-overlay-wrapper {\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%; }\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 1; }\n@media screen and (-ms-high-contrast: active) {\n      .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n        opacity: 0.6; } }\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.288); }\n.cdk-overlay-transparent-backdrop, .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 0; }\n.cdk-overlay-connected-position-bounding-box {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px; }\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n@-webkit-keyframes cdk-text-field-autofill-start {}\n@keyframes cdk-text-field-autofill-start {}\n@-webkit-keyframes cdk-text-field-autofill-end {}\n@keyframes cdk-text-field-autofill-end {}\n.cdk-text-field-autofill-monitored:-webkit-autofill {\n  -webkit-animation-name: cdk-text-field-autofill-start;\n          animation-name: cdk-text-field-autofill-start; }\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  -webkit-animation-name: cdk-text-field-autofill-end;\n          animation-name: cdk-text-field-autofill-end; }\ntextarea.cdk-textarea-autosize {\n  resize: none; }\ntextarea.cdk-textarea-autosize-measuring {\n  height: auto !important;\n  overflow: hidden !important;\n  padding: 2px 0 !important;\n  box-sizing: content-box !important; }\n.mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1); }\n.mat-option {\n  color: white; }\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(255, 255, 255, 0.04); }\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(255, 255, 255, 0.04); }\n.mat-option.mat-active {\n    background: rgba(255, 255, 255, 0.04);\n    color: white; }\n.mat-option.mat-option-disabled {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #ff1744; }\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #ff8a80; }\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #f44336; }\n.mat-optgroup-label {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-pseudo-checkbox {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-pseudo-checkbox::after {\n    color: #303030; }\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #ff8a80; }\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #ff1744; }\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #f44336; }\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #686868; }\n.mat-app-background {\n  background-color: #303030;\n  color: white; }\n.mat-theme-loaded-marker {\n  display: none; }\n.mat-autocomplete-panel {\n  background: #424242;\n  color: white; }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: #424242; }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: white; }\n.mat-badge-content {\n  color: white;\n  background: #ff1744; }\n.mat-badge-accent .mat-badge-content {\n  background: #ff8a80;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-badge-warn .mat-badge-content {\n  color: white;\n  background: #f44336; }\n.mat-badge {\n  position: relative; }\n.mat-badge-hidden .mat-badge-content {\n  display: none; }\n.mat-badge-content {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: -webkit-transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none; }\n.mat-badge-content.mat-badge-active {\n  -webkit-transform: none;\n          transform: none; }\n.mat-badge-small .mat-badge-content {\n  width: 16px;\n  height: 16px;\n  line-height: 16px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-small .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-small.mat-badge-above .mat-badge-content {\n  top: -8px; }\n.mat-badge-small.mat-badge-below .mat-badge-content {\n  bottom: -8px; }\n.mat-badge-small.mat-badge-before {\n  margin-left: 16px; }\n.mat-badge-small.mat-badge-before .mat-badge-content {\n    left: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-before {\n  margin-left: 0;\n  margin-right: 16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -16px; }\n.mat-badge-small.mat-badge-after {\n  margin-right: 16px; }\n.mat-badge-small.mat-badge-after .mat-badge-content {\n    right: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-after {\n  margin-right: 0;\n  margin-left: 16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -16px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-before {\n  margin-left: 8px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-before {\n  margin-left: 0;\n  margin-right: 8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -8px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-after {\n  margin-right: 8px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-after {\n  margin-right: 0;\n  margin-left: 16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -8px; }\n.mat-badge-medium .mat-badge-content {\n  width: 22px;\n  height: 22px;\n  line-height: 22px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-medium .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-medium.mat-badge-above .mat-badge-content {\n  top: -11px; }\n.mat-badge-medium.mat-badge-below .mat-badge-content {\n  bottom: -11px; }\n.mat-badge-medium.mat-badge-before {\n  margin-left: 22px; }\n.mat-badge-medium.mat-badge-before .mat-badge-content {\n    left: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-before {\n  margin-left: 0;\n  margin-right: 22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -22px; }\n.mat-badge-medium.mat-badge-after {\n  margin-right: 22px; }\n.mat-badge-medium.mat-badge-after .mat-badge-content {\n    right: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-after {\n  margin-right: 0;\n  margin-left: 22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -22px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-before {\n  margin-left: 11px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-before {\n  margin-left: 0;\n  margin-right: 11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -11px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-after {\n  margin-right: 11px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-after {\n  margin-right: 0;\n  margin-left: 22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -11px; }\n.mat-badge-large .mat-badge-content {\n  width: 28px;\n  height: 28px;\n  line-height: 28px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-large .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-large.mat-badge-above .mat-badge-content {\n  top: -14px; }\n.mat-badge-large.mat-badge-below .mat-badge-content {\n  bottom: -14px; }\n.mat-badge-large.mat-badge-before {\n  margin-left: 28px; }\n.mat-badge-large.mat-badge-before .mat-badge-content {\n    left: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-before {\n  margin-left: 0;\n  margin-right: 28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -28px; }\n.mat-badge-large.mat-badge-after {\n  margin-right: 28px; }\n.mat-badge-large.mat-badge-after .mat-badge-content {\n    right: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-after {\n  margin-right: 0;\n  margin-left: 28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -28px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-before {\n  margin-left: 14px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-before {\n  margin-left: 0;\n  margin-right: 14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -14px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-after {\n  margin-right: 14px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-after {\n  margin-right: 0;\n  margin-left: 28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -14px; }\n.mat-bottom-sheet-container {\n  background: #424242;\n  color: white; }\n.mat-button, .mat-icon-button, .mat-stroked-button {\n  color: inherit;\n  background: transparent; }\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\n    color: #ff1744; }\n.mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent {\n    color: #ff8a80; }\n.mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn {\n    color: #f44336; }\n.mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled], .mat-stroked-button.mat-primary[disabled], .mat-stroked-button.mat-accent[disabled], .mat-stroked-button.mat-warn[disabled], .mat-stroked-button[disabled][disabled] {\n    color: rgba(255, 255, 255, 0.3); }\n.mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(255, 23, 68, 0.12); }\n.mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(255, 138, 128, 0.12); }\n.mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n.mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay, .mat-stroked-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n.mat-button.mat-primary .mat-ripple-element, .mat-icon-button.mat-primary .mat-ripple-element, .mat-stroked-button.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 23, 68, 0.1); }\n.mat-button.mat-accent .mat-ripple-element, .mat-icon-button.mat-accent .mat-ripple-element, .mat-stroked-button.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 138, 128, 0.1); }\n.mat-button.mat-warn .mat-ripple-element, .mat-icon-button.mat-warn .mat-ripple-element, .mat-stroked-button.mat-warn .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.1); }\n.mat-flat-button, .mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: white;\n  background-color: #424242; }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: rgba(0, 0, 0, 0.87); }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(255, 255, 255, 0.3); }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #ff1744; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #ff8a80; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #f44336; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(255, 255, 255, 0.12); }\n.mat-flat-button.mat-primary .mat-ripple-element, .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-accent .mat-ripple-element, .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(0, 0, 0, 0.1); }\n.mat-flat-button.mat-warn .mat-ripple-element, .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(255, 23, 68, 0.2); }\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(255, 138, 128, 0.2); }\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.2); }\n.mat-button-toggle {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-button-toggle .mat-button-toggle-focus-overlay {\n    background-color: rgba(255, 255, 255, 0.12); }\n.mat-button-toggle-checked {\n  background-color: #212121;\n  color: rgba(255, 255, 255, 0.7); }\n.mat-button-toggle-disabled {\n  background-color: black;\n  color: rgba(255, 255, 255, 0.3); }\n.mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #424242; }\n.mat-card {\n  background: #424242;\n  color: white; }\n.mat-card-subtitle {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-checkbox-frame {\n  border-color: rgba(255, 255, 255, 0.7); }\n.mat-checkbox-checkmark {\n  fill: #303030; }\n.mat-checkbox-checkmark-path {\n  stroke: #303030 !important; }\n.mat-checkbox-mixedmark {\n  background-color: #303030; }\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #ff1744; }\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #ff8a80; }\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f44336; }\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #686868; }\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #686868; }\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #686868; }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(255, 23, 68, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(255, 138, 128, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-chip.mat-standard-chip {\n  background-color: #616161;\n  color: white; }\n.mat-chip.mat-standard-chip .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {\n  background-color: #ff1744;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {\n  background-color: #f44336;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {\n  background-color: #ff8a80;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-table {\n  background: #424242; }\nmat-row, mat-header-row, mat-footer-row,\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  border-bottom-color: rgba(255, 255, 255, 0.12); }\n.mat-header-cell {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-cell, .mat-footer-cell {\n  color: white; }\n.mat-calendar-arrow {\n  border-top-color: white; }\n.mat-datepicker-toggle,\n.mat-datepicker-popup .mat-calendar-next-button,\n.mat-datepicker-popup .mat-calendar-previous-button {\n  color: white; }\n.mat-calendar-table-header {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-calendar-table-header-divider::after {\n  background: rgba(255, 255, 255, 0.12); }\n.mat-calendar-body-label {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-calendar-body-cell-content {\n  color: white;\n  border-color: transparent; }\n.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(255, 255, 255, 0.04); }\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(255, 255, 255, 0.5); }\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(255, 255, 255, 0.3); }\n.mat-calendar-body-selected {\n  background-color: #ff1744;\n  color: white; }\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(255, 23, 68, 0.4); }\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content {\n  background-color: #424242;\n  color: white; }\n.mat-datepicker-content.mat-accent .mat-calendar-body-selected {\n    background-color: #ff8a80;\n    color: rgba(0, 0, 0, 0.87); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(255, 138, 128, 0.4); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.87); }\n.mat-datepicker-content.mat-warn .mat-calendar-body-selected {\n    background-color: #f44336;\n    color: white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(244, 67, 54, 0.4); }\n.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-toggle-active {\n  color: #ff1744; }\n.mat-datepicker-toggle-active.mat-accent {\n    color: #ff8a80; }\n.mat-datepicker-toggle-active.mat-warn {\n    color: #f44336; }\n.mat-dialog-container {\n  background: #424242;\n  color: white; }\n.mat-divider {\n  border-top-color: rgba(255, 255, 255, 0.12); }\n.mat-divider-vertical {\n  border-right-color: rgba(255, 255, 255, 0.12); }\n.mat-expansion-panel {\n  background: #424242;\n  color: white; }\n.mat-action-row {\n  border-top-color: rgba(255, 255, 255, 0.12); }\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(255, 255, 255, 0.04); }\n.mat-expansion-panel-header-title {\n  color: white; }\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(255, 255, 255, 0.3); }\n.mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n.mat-form-field-label {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-hint {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-form-field.mat-focused .mat-form-field-label {\n  color: #ff1744; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-accent {\n    color: #ff8a80; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-warn {\n    color: #f44336; }\n.mat-focused .mat-form-field-required-marker {\n  color: #ff8a80; }\n.mat-form-field-ripple {\n  background-color: white; }\n.mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #ff1744; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {\n    background-color: #ff8a80; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {\n    background-color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple {\n  background-color: #f44336; }\n.mat-error {\n  color: #f44336; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-form-field-appearance-legacy .mat-hint {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: rgba(255, 255, 255, 0.7); }\n.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-standard .mat-form-field-underline {\n  background-color: rgba(255, 255, 255, 0.7); }\n.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: rgba(255, 255, 255, 0.1); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {\n  background-color: rgba(255, 255, 255, 0.05); }\n.mat-form-field-appearance-fill .mat-form-field-underline::before {\n  background-color: rgba(255, 255, 255, 0.5); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {\n  background-color: transparent; }\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  color: rgba(255, 255, 255, 0.3); }\n.mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: white; }\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #ff1744; }\n.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {\n  color: #ff8a80; }\n.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick {\n  color: #f44336; }\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #f44336; }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {\n  color: rgba(255, 255, 255, 0.15); }\n.mat-icon.mat-primary {\n  color: #ff1744; }\n.mat-icon.mat-accent {\n  color: #ff8a80; }\n.mat-icon.mat-warn {\n  color: #f44336; }\n.mat-input-element:disabled {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-input-element {\n  caret-color: #ff1744; }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-input-element:-ms-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-input-element::-ms-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-input-element::placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-input-element::-moz-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-input-element:-ms-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-accent .mat-input-element {\n  caret-color: #ff8a80; }\n.mat-warn .mat-input-element,\n.mat-form-field-invalid .mat-input-element {\n  caret-color: #f44336; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  color: white; }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  color: white; }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-list-item-disabled {\n  background-color: black; }\n.mat-list-option:hover, .mat-list-option.mat-list-item-focus,\n.mat-nav-list .mat-list-item:hover,\n.mat-nav-list .mat-list-item.mat-list-item-focus {\n  background: rgba(255, 255, 255, 0.04); }\n.mat-menu-panel {\n  background: #424242; }\n.mat-menu-item {\n  background: transparent;\n  color: white; }\n.mat-menu-item[disabled], .mat-menu-item[disabled]::after {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-menu-item .mat-icon:not([color]),\n.mat-menu-item-submenu-trigger::after {\n  color: white; }\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item.cdk-program-focused:not([disabled]),\n.mat-menu-item.cdk-keyboard-focused:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(255, 255, 255, 0.04); }\n.mat-paginator {\n  background: #424242; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-paginator-decrement,\n.mat-paginator-increment {\n  border-top: 2px solid white;\n  border-right: 2px solid white; }\n.mat-paginator-first,\n.mat-paginator-last {\n  border-top: 2px solid white; }\n.mat-icon-button[disabled] .mat-paginator-decrement,\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-first,\n.mat-icon-button[disabled] .mat-paginator-last {\n  border-color: rgba(255, 255, 255, 0.5); }\n.mat-progress-bar-background {\n  fill: #ffcdd2; }\n.mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n.mat-progress-bar-fill::after {\n  background-color: #ff1744; }\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  fill: #ffcdd2; }\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #ff8a80; }\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  fill: #ffcdd2; }\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #f44336; }\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #ff1744; }\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #ff8a80; }\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #f44336; }\n.mat-radio-outer-circle {\n  border-color: rgba(255, 255, 255, 0.7); }\n.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(255, 255, 255, 0.5); }\n.mat-radio-disabled .mat-radio-ripple .mat-ripple-element, .mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(255, 255, 255, 0.5); }\n.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #ff1744; }\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #ff1744; }\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(255, 23, 68, 0.26); }\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #ff8a80; }\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #ff8a80; }\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(255, 138, 128, 0.26); }\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-select-content, .mat-select-panel-done-animating {\n  background: #424242; }\n.mat-select-value {\n  color: white; }\n.mat-select-placeholder {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-select-disabled .mat-select-value {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-select-arrow {\n  color: rgba(255, 255, 255, 0.7); }\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(255, 255, 255, 0.12); }\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #ff1744; }\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #ff8a80; }\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-drawer-container {\n  background-color: #303030;\n  color: white; }\n.mat-drawer {\n  background-color: #424242;\n  color: white; }\n.mat-drawer.mat-drawer-push {\n    background-color: #424242; }\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(189, 189, 189, 0.6); }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #ef9a9a; }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(239, 154, 154, 0.5); }\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(239, 154, 154, 0.12); }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #ef9a9a; }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(239, 154, 154, 0.5); }\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(239, 154, 154, 0.12); }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #ef9a9a; }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(239, 154, 154, 0.5); }\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(239, 154, 154, 0.12); }\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #424242; }\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n.mat-slide-toggle-bar {\n  background-color: rgba(255, 255, 255, 0.5); }\n.mat-slider-track-background {\n  background-color: rgba(255, 255, 255, 0.3); }\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #ff1744; }\n.mat-primary .mat-slider-thumb-label-text {\n  color: white; }\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #ff8a80; }\n.mat-accent .mat-slider-thumb-label-text {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #f44336; }\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n.mat-slider-focus-ring {\n  background-color: rgba(255, 138, 128, 0.2); }\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(255, 255, 255, 0.3); }\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(255, 255, 255, 0.3); }\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(255, 255, 255, 0.3); }\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: white; }\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(255, 255, 255, 0.3); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(255, 255, 255, 0.3);\n  background-color: transparent; }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(255, 255, 255, 0.3); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(255, 255, 255, 0.3); }\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(255, 255, 255, 0.7); }\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent); }\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent); }\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(255, 255, 255, 0.04); }\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(255, 255, 255, 0.5); }\n.mat-step-header .mat-step-icon {\n  background-color: #ff1744;\n  color: white; }\n.mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(255, 255, 255, 0.5);\n  color: white; }\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: white; }\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: #424242; }\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(255, 255, 255, 0.12); }\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12); }\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n  border-bottom: none; }\n.mat-tab-label, .mat-tab-link {\n  color: white; }\n.mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.5); }\n.mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.5); }\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n.mat-tab-group.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #ff1744; }\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #ff8a80; }\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-tab-group.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #f44336; }\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #ff1744; }\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #ff8a80; }\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.4); }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.4); }\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.12); }\n.mat-tab-group.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #f44336; }\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-toolbar {\n  background: #212121;\n  color: white; }\n.mat-toolbar.mat-primary {\n    background: #ff1744;\n    color: white; }\n.mat-toolbar.mat-accent {\n    background: #ff8a80;\n    color: rgba(0, 0, 0, 0.87); }\n.mat-toolbar.mat-warn {\n    background: #f44336;\n    color: white; }\n.mat-toolbar .mat-form-field-underline,\n  .mat-toolbar .mat-form-field-ripple,\n  .mat-toolbar .mat-focused .mat-form-field-ripple {\n    background-color: currentColor; }\n.mat-toolbar .mat-form-field-label,\n  .mat-toolbar .mat-focused .mat-form-field-label,\n  .mat-toolbar .mat-select-value,\n  .mat-toolbar .mat-select-arrow,\n  .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n    color: inherit; }\n.mat-toolbar .mat-input-element {\n    caret-color: currentColor; }\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n.mat-tree {\n  background: #424242; }\n.mat-tree-node {\n  color: white; }\n.mat-snack-bar-container {\n  background: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-simple-snackbar-action {\n  color: inherit; }\n.alternative .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1); }\n.alternative .mat-option {\n  color: white; }\n.alternative .mat-option:hover:not(.mat-option-disabled), .alternative .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(255, 255, 255, 0.04); }\n.alternative .mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(255, 255, 255, 0.04); }\n.alternative .mat-option.mat-active {\n    background: rgba(255, 255, 255, 0.04);\n    color: white; }\n.alternative .mat-option.mat-option-disabled {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #00e676; }\n.alternative .mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #64ffda; }\n.alternative .mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #f44336; }\n.alternative .mat-optgroup-label {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-pseudo-checkbox {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-pseudo-checkbox::after {\n    color: #303030; }\n.alternative .mat-pseudo-checkbox-checked,\n.alternative .mat-pseudo-checkbox-indeterminate,\n.alternative .mat-accent .mat-pseudo-checkbox-checked,\n.alternative .mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #64ffda; }\n.alternative .mat-primary .mat-pseudo-checkbox-checked,\n.alternative .mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #00e676; }\n.alternative .mat-warn .mat-pseudo-checkbox-checked,\n.alternative .mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #f44336; }\n.alternative .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.alternative .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #686868; }\n.alternative .mat-app-background, .alternative.mat-app-background {\n  background-color: #303030;\n  color: white; }\n.mat-theme-loaded-marker {\n  display: none; }\n.alternative .mat-autocomplete-panel {\n  background: #424242;\n  color: white; }\n.alternative .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: #424242; }\n.alternative .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: white; }\n.alternative .mat-badge-content {\n  color: rgba(0, 0, 0, 0.87);\n  background: #00e676; }\n.alternative .mat-badge-accent .mat-badge-content {\n  background: #64ffda;\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-badge-warn .mat-badge-content {\n  color: white;\n  background: #f44336; }\n.alternative .mat-badge {\n  position: relative; }\n.alternative .mat-badge-hidden .mat-badge-content {\n  display: none; }\n.alternative .mat-badge-content {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: -webkit-transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none; }\n.alternative .mat-badge-content.mat-badge-active {\n  -webkit-transform: none;\n          transform: none; }\n.alternative .mat-badge-small .mat-badge-content {\n  width: 16px;\n  height: 16px;\n  line-height: 16px; }\n@media screen and (-ms-high-contrast: active) {\n    .alternative .mat-badge-small .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.alternative .mat-badge-small.mat-badge-above .mat-badge-content {\n  top: -8px; }\n.alternative .mat-badge-small.mat-badge-below .mat-badge-content {\n  bottom: -8px; }\n.alternative .mat-badge-small.mat-badge-before {\n  margin-left: 16px; }\n.alternative .mat-badge-small.mat-badge-before .mat-badge-content {\n    left: -16px; }\n[dir='rtl'] .alternative .mat-badge-small.mat-badge-before {\n  margin-left: 0;\n  margin-right: 16px; }\n[dir='rtl'] .alternative .mat-badge-small.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -16px; }\n.alternative .mat-badge-small.mat-badge-after {\n  margin-right: 16px; }\n.alternative .mat-badge-small.mat-badge-after .mat-badge-content {\n    right: -16px; }\n[dir='rtl'] .alternative .mat-badge-small.mat-badge-after {\n  margin-right: 0;\n  margin-left: 16px; }\n[dir='rtl'] .alternative .mat-badge-small.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -16px; }\n.alternative .mat-badge-small.mat-badge-overlap.mat-badge-before {\n  margin-left: 8px; }\n.alternative .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: -8px; }\n[dir='rtl'] .alternative .mat-badge-small.mat-badge-overlap.mat-badge-before {\n  margin-left: 0;\n  margin-right: 8px; }\n[dir='rtl'] .alternative .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -8px; }\n.alternative .mat-badge-small.mat-badge-overlap.mat-badge-after {\n  margin-right: 8px; }\n.alternative .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: -8px; }\n[dir='rtl'] .alternative .mat-badge-small.mat-badge-overlap.mat-badge-after {\n  margin-right: 0;\n  margin-left: 16px; }\n[dir='rtl'] .alternative .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -8px; }\n.alternative .mat-badge-medium .mat-badge-content {\n  width: 22px;\n  height: 22px;\n  line-height: 22px; }\n@media screen and (-ms-high-contrast: active) {\n    .alternative .mat-badge-medium .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.alternative .mat-badge-medium.mat-badge-above .mat-badge-content {\n  top: -11px; }\n.alternative .mat-badge-medium.mat-badge-below .mat-badge-content {\n  bottom: -11px; }\n.alternative .mat-badge-medium.mat-badge-before {\n  margin-left: 22px; }\n.alternative .mat-badge-medium.mat-badge-before .mat-badge-content {\n    left: -22px; }\n[dir='rtl'] .alternative .mat-badge-medium.mat-badge-before {\n  margin-left: 0;\n  margin-right: 22px; }\n[dir='rtl'] .alternative .mat-badge-medium.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -22px; }\n.alternative .mat-badge-medium.mat-badge-after {\n  margin-right: 22px; }\n.alternative .mat-badge-medium.mat-badge-after .mat-badge-content {\n    right: -22px; }\n[dir='rtl'] .alternative .mat-badge-medium.mat-badge-after {\n  margin-right: 0;\n  margin-left: 22px; }\n[dir='rtl'] .alternative .mat-badge-medium.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -22px; }\n.alternative .mat-badge-medium.mat-badge-overlap.mat-badge-before {\n  margin-left: 11px; }\n.alternative .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: -11px; }\n[dir='rtl'] .alternative .mat-badge-medium.mat-badge-overlap.mat-badge-before {\n  margin-left: 0;\n  margin-right: 11px; }\n[dir='rtl'] .alternative .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -11px; }\n.alternative .mat-badge-medium.mat-badge-overlap.mat-badge-after {\n  margin-right: 11px; }\n.alternative .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: -11px; }\n[dir='rtl'] .alternative .mat-badge-medium.mat-badge-overlap.mat-badge-after {\n  margin-right: 0;\n  margin-left: 22px; }\n[dir='rtl'] .alternative .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -11px; }\n.alternative .mat-badge-large .mat-badge-content {\n  width: 28px;\n  height: 28px;\n  line-height: 28px; }\n@media screen and (-ms-high-contrast: active) {\n    .alternative .mat-badge-large .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.alternative .mat-badge-large.mat-badge-above .mat-badge-content {\n  top: -14px; }\n.alternative .mat-badge-large.mat-badge-below .mat-badge-content {\n  bottom: -14px; }\n.alternative .mat-badge-large.mat-badge-before {\n  margin-left: 28px; }\n.alternative .mat-badge-large.mat-badge-before .mat-badge-content {\n    left: -28px; }\n[dir='rtl'] .alternative .mat-badge-large.mat-badge-before {\n  margin-left: 0;\n  margin-right: 28px; }\n[dir='rtl'] .alternative .mat-badge-large.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -28px; }\n.alternative .mat-badge-large.mat-badge-after {\n  margin-right: 28px; }\n.alternative .mat-badge-large.mat-badge-after .mat-badge-content {\n    right: -28px; }\n[dir='rtl'] .alternative .mat-badge-large.mat-badge-after {\n  margin-right: 0;\n  margin-left: 28px; }\n[dir='rtl'] .alternative .mat-badge-large.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -28px; }\n.alternative .mat-badge-large.mat-badge-overlap.mat-badge-before {\n  margin-left: 14px; }\n.alternative .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: -14px; }\n[dir='rtl'] .alternative .mat-badge-large.mat-badge-overlap.mat-badge-before {\n  margin-left: 0;\n  margin-right: 14px; }\n[dir='rtl'] .alternative .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n    left: auto;\n    right: -14px; }\n.alternative .mat-badge-large.mat-badge-overlap.mat-badge-after {\n  margin-right: 14px; }\n.alternative .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: -14px; }\n[dir='rtl'] .alternative .mat-badge-large.mat-badge-overlap.mat-badge-after {\n  margin-right: 0;\n  margin-left: 28px; }\n[dir='rtl'] .alternative .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: auto;\n    left: -14px; }\n.alternative .mat-bottom-sheet-container {\n  background: #424242;\n  color: white; }\n.alternative .mat-button, .alternative .mat-icon-button, .alternative .mat-stroked-button {\n  color: inherit;\n  background: transparent; }\n.alternative .mat-button.mat-primary, .alternative .mat-icon-button.mat-primary, .alternative .mat-stroked-button.mat-primary {\n    color: #00e676; }\n.alternative .mat-button.mat-accent, .alternative .mat-icon-button.mat-accent, .alternative .mat-stroked-button.mat-accent {\n    color: #64ffda; }\n.alternative .mat-button.mat-warn, .alternative .mat-icon-button.mat-warn, .alternative .mat-stroked-button.mat-warn {\n    color: #f44336; }\n.alternative .mat-button.mat-primary[disabled], .alternative .mat-button.mat-accent[disabled], .alternative .mat-button.mat-warn[disabled], .alternative .mat-button[disabled][disabled], .alternative .mat-icon-button.mat-primary[disabled], .alternative .mat-icon-button.mat-accent[disabled], .alternative .mat-icon-button.mat-warn[disabled], .alternative .mat-icon-button[disabled][disabled], .alternative .mat-stroked-button.mat-primary[disabled], .alternative .mat-stroked-button.mat-accent[disabled], .alternative .mat-stroked-button.mat-warn[disabled], .alternative .mat-stroked-button[disabled][disabled] {\n    color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-button.mat-primary .mat-button-focus-overlay, .alternative .mat-icon-button.mat-primary .mat-button-focus-overlay, .alternative .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(0, 230, 118, 0.12); }\n.alternative .mat-button.mat-accent .mat-button-focus-overlay, .alternative .mat-icon-button.mat-accent .mat-button-focus-overlay, .alternative .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(100, 255, 218, 0.12); }\n.alternative .mat-button.mat-warn .mat-button-focus-overlay, .alternative .mat-icon-button.mat-warn .mat-button-focus-overlay, .alternative .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n.alternative .mat-button[disabled] .mat-button-focus-overlay, .alternative .mat-icon-button[disabled] .mat-button-focus-overlay, .alternative .mat-stroked-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n.alternative .mat-button.mat-primary .mat-ripple-element, .alternative .mat-icon-button.mat-primary .mat-ripple-element, .alternative .mat-stroked-button.mat-primary .mat-ripple-element {\n    background-color: rgba(0, 230, 118, 0.1); }\n.alternative .mat-button.mat-accent .mat-ripple-element, .alternative .mat-icon-button.mat-accent .mat-ripple-element, .alternative .mat-stroked-button.mat-accent .mat-ripple-element {\n    background-color: rgba(100, 255, 218, 0.1); }\n.alternative .mat-button.mat-warn .mat-ripple-element, .alternative .mat-icon-button.mat-warn .mat-ripple-element, .alternative .mat-stroked-button.mat-warn .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.1); }\n.alternative .mat-flat-button, .alternative .mat-raised-button, .alternative .mat-fab, .alternative .mat-mini-fab {\n  color: white;\n  background-color: #424242; }\n.alternative .mat-flat-button.mat-primary, .alternative .mat-raised-button.mat-primary, .alternative .mat-fab.mat-primary, .alternative .mat-mini-fab.mat-primary {\n    color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-flat-button.mat-accent, .alternative .mat-raised-button.mat-accent, .alternative .mat-fab.mat-accent, .alternative .mat-mini-fab.mat-accent {\n    color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-flat-button.mat-warn, .alternative .mat-raised-button.mat-warn, .alternative .mat-fab.mat-warn, .alternative .mat-mini-fab.mat-warn {\n    color: white; }\n.alternative .mat-flat-button.mat-primary[disabled], .alternative .mat-flat-button.mat-accent[disabled], .alternative .mat-flat-button.mat-warn[disabled], .alternative .mat-flat-button[disabled][disabled], .alternative .mat-raised-button.mat-primary[disabled], .alternative .mat-raised-button.mat-accent[disabled], .alternative .mat-raised-button.mat-warn[disabled], .alternative .mat-raised-button[disabled][disabled], .alternative .mat-fab.mat-primary[disabled], .alternative .mat-fab.mat-accent[disabled], .alternative .mat-fab.mat-warn[disabled], .alternative .mat-fab[disabled][disabled], .alternative .mat-mini-fab.mat-primary[disabled], .alternative .mat-mini-fab.mat-accent[disabled], .alternative .mat-mini-fab.mat-warn[disabled], .alternative .mat-mini-fab[disabled][disabled] {\n    color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-flat-button.mat-primary, .alternative .mat-raised-button.mat-primary, .alternative .mat-fab.mat-primary, .alternative .mat-mini-fab.mat-primary {\n    background-color: #00e676; }\n.alternative .mat-flat-button.mat-accent, .alternative .mat-raised-button.mat-accent, .alternative .mat-fab.mat-accent, .alternative .mat-mini-fab.mat-accent {\n    background-color: #64ffda; }\n.alternative .mat-flat-button.mat-warn, .alternative .mat-raised-button.mat-warn, .alternative .mat-fab.mat-warn, .alternative .mat-mini-fab.mat-warn {\n    background-color: #f44336; }\n.alternative .mat-flat-button.mat-primary[disabled], .alternative .mat-flat-button.mat-accent[disabled], .alternative .mat-flat-button.mat-warn[disabled], .alternative .mat-flat-button[disabled][disabled], .alternative .mat-raised-button.mat-primary[disabled], .alternative .mat-raised-button.mat-accent[disabled], .alternative .mat-raised-button.mat-warn[disabled], .alternative .mat-raised-button[disabled][disabled], .alternative .mat-fab.mat-primary[disabled], .alternative .mat-fab.mat-accent[disabled], .alternative .mat-fab.mat-warn[disabled], .alternative .mat-fab[disabled][disabled], .alternative .mat-mini-fab.mat-primary[disabled], .alternative .mat-mini-fab.mat-accent[disabled], .alternative .mat-mini-fab.mat-warn[disabled], .alternative .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-flat-button.mat-primary .mat-ripple-element, .alternative .mat-raised-button.mat-primary .mat-ripple-element, .alternative .mat-fab.mat-primary .mat-ripple-element, .alternative .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(0, 0, 0, 0.1); }\n.alternative .mat-flat-button.mat-accent .mat-ripple-element, .alternative .mat-raised-button.mat-accent .mat-ripple-element, .alternative .mat-fab.mat-accent .mat-ripple-element, .alternative .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(0, 0, 0, 0.1); }\n.alternative .mat-flat-button.mat-warn .mat-ripple-element, .alternative .mat-raised-button.mat-warn .mat-ripple-element, .alternative .mat-fab.mat-warn .mat-ripple-element, .alternative .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.alternative .mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(0, 230, 118, 0.2); }\n.alternative .mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(100, 255, 218, 0.2); }\n.alternative .mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.2); }\n.alternative .mat-button-toggle {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-button-toggle .mat-button-toggle-focus-overlay {\n    background-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-button-toggle-checked {\n  background-color: #212121;\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-button-toggle-disabled {\n  background-color: black;\n  color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #424242; }\n.alternative .mat-card {\n  background: #424242;\n  color: white; }\n.alternative .mat-card-subtitle {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-checkbox-frame {\n  border-color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-checkbox-checkmark {\n  fill: #303030; }\n.alternative .mat-checkbox-checkmark-path {\n  stroke: #303030 !important; }\n.alternative .mat-checkbox-mixedmark {\n  background-color: #303030; }\n.alternative .mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .alternative .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #00e676; }\n.alternative .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .alternative .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #64ffda; }\n.alternative .mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .alternative .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f44336; }\n.alternative .mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .alternative .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #686868; }\n.alternative .mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #686868; }\n.alternative .mat-checkbox-disabled .mat-checkbox-label {\n  color: #686868; }\n.alternative .mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(0, 230, 118, 0.26); }\n.alternative .mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(100, 255, 218, 0.26); }\n.alternative .mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.alternative .mat-chip.mat-standard-chip {\n  background-color: #616161;\n  color: white; }\n.alternative .mat-chip.mat-standard-chip .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.alternative .mat-chip.mat-standard-chip .mat-chip-remove:hover {\n    opacity: 0.54; }\n.alternative .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {\n  background-color: #00e676;\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n.alternative .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n.alternative .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {\n  background-color: #f44336;\n  color: white; }\n.alternative .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.alternative .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n.alternative .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {\n  background-color: #64ffda;\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n.alternative .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n.alternative .mat-table {\n  background: #424242; }\n.alternative mat-row, .alternative mat-header-row, .alternative mat-footer-row,\n.alternative th.mat-header-cell, .alternative td.mat-cell, .alternative td.mat-footer-cell {\n  border-bottom-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-header-cell {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-cell, .alternative .mat-footer-cell {\n  color: white; }\n.alternative .mat-calendar-arrow {\n  border-top-color: white; }\n.alternative .mat-datepicker-toggle,\n.alternative .mat-datepicker-popup .mat-calendar-next-button,\n.alternative .mat-datepicker-popup .mat-calendar-previous-button {\n  color: white; }\n.alternative .mat-calendar-table-header {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-calendar-table-header-divider::after {\n  background: rgba(255, 255, 255, 0.12); }\n.alternative .mat-calendar-body-label {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-calendar-body-cell-content {\n  color: white;\n  border-color: transparent; }\n.alternative .mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.alternative .cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.alternative .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(255, 255, 255, 0.04); }\n.alternative .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-calendar-body-selected {\n  background-color: #00e676;\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(0, 230, 118, 0.4); }\n.alternative .mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.87); }\n.alternative .mat-datepicker-content {\n  background-color: #424242;\n  color: white; }\n.alternative .mat-datepicker-content.mat-accent .mat-calendar-body-selected {\n    background-color: #64ffda;\n    color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-datepicker-content.mat-accent .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(100, 255, 218, 0.4); }\n.alternative .mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.87); }\n.alternative .mat-datepicker-content.mat-warn .mat-calendar-body-selected {\n    background-color: #f44336;\n    color: white; }\n.alternative .mat-datepicker-content.mat-warn .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(244, 67, 54, 0.4); }\n.alternative .mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.alternative .mat-datepicker-toggle-active {\n  color: #00e676; }\n.alternative .mat-datepicker-toggle-active.mat-accent {\n    color: #64ffda; }\n.alternative .mat-datepicker-toggle-active.mat-warn {\n    color: #f44336; }\n.alternative .mat-dialog-container {\n  background: #424242;\n  color: white; }\n.alternative .mat-divider {\n  border-top-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-divider-vertical {\n  border-right-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-expansion-panel {\n  background: #424242;\n  color: white; }\n.alternative .mat-action-row {\n  border-top-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .alternative .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .alternative .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(255, 255, 255, 0.04); }\n.alternative .mat-expansion-panel-header-title {\n  color: white; }\n.alternative .mat-expansion-panel-header-description,\n.alternative .mat-expansion-indicator::after {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .alternative .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n.alternative .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-hint {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-form-field.mat-focused .mat-form-field-label {\n  color: #00e676; }\n.alternative .mat-form-field.mat-focused .mat-form-field-label.mat-accent {\n    color: #64ffda; }\n.alternative .mat-form-field.mat-focused .mat-form-field-label.mat-warn {\n    color: #f44336; }\n.alternative .mat-focused .mat-form-field-required-marker {\n  color: #64ffda; }\n.alternative .mat-form-field-ripple {\n  background-color: white; }\n.alternative .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #00e676; }\n.alternative .mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {\n    background-color: #64ffda; }\n.alternative .mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {\n    background-color: #f44336; }\n.alternative .mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #f44336; }\n.alternative .mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .alternative .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #f44336; }\n.alternative .mat-form-field.mat-form-field-invalid .mat-form-field-ripple {\n  background-color: #f44336; }\n.alternative .mat-error {\n  color: #f44336; }\n.alternative .mat-form-field-appearance-legacy .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-form-field-appearance-legacy .mat-hint {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.alternative .mat-form-field-appearance-standard .mat-form-field-underline {\n  background-color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.alternative .mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: rgba(255, 255, 255, 0.1); }\n.alternative .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {\n  background-color: rgba(255, 255, 255, 0.05); }\n.alternative .mat-form-field-appearance-fill .mat-form-field-underline::before {\n  background-color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {\n  background-color: transparent; }\n.alternative .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: white; }\n.alternative .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #00e676; }\n.alternative .mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {\n  color: #64ffda; }\n.alternative .mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick {\n  color: #f44336; }\n.alternative .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #f44336; }\n.alternative .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {\n  color: rgba(255, 255, 255, 0.15); }\n.alternative .mat-icon.mat-primary {\n  color: #00e676; }\n.alternative .mat-icon.mat-accent {\n  color: #64ffda; }\n.alternative .mat-icon.mat-warn {\n  color: #f44336; }\n.alternative .mat-input-element:disabled {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-input-element {\n  caret-color: #00e676; }\n.alternative .mat-input-element::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-input-element:-ms-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-input-element::-ms-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-input-element::placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-input-element::-moz-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-input-element::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-input-element:-ms-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-accent .mat-input-element {\n  caret-color: #64ffda; }\n.alternative .mat-warn .mat-input-element,\n.alternative .mat-form-field-invalid .mat-input-element {\n  caret-color: #f44336; }\n.alternative .mat-list .mat-list-item, .alternative .mat-nav-list .mat-list-item, .alternative .mat-selection-list .mat-list-item {\n  color: white; }\n.alternative .mat-list .mat-list-option, .alternative .mat-nav-list .mat-list-option, .alternative .mat-selection-list .mat-list-option {\n  color: white; }\n.alternative .mat-list .mat-subheader, .alternative .mat-nav-list .mat-subheader, .alternative .mat-selection-list .mat-subheader {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-list-item-disabled {\n  background-color: black; }\n.alternative .mat-list-option:hover, .alternative .mat-list-option.mat-list-item-focus,\n.alternative .mat-nav-list .mat-list-item:hover,\n.alternative .mat-nav-list .mat-list-item.mat-list-item-focus {\n  background: rgba(255, 255, 255, 0.04); }\n.alternative .mat-menu-panel {\n  background: #424242; }\n.alternative .mat-menu-item {\n  background: transparent;\n  color: white; }\n.alternative .mat-menu-item[disabled], .alternative .mat-menu-item[disabled]::after {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-menu-item .mat-icon:not([color]),\n.alternative .mat-menu-item-submenu-trigger::after {\n  color: white; }\n.alternative .mat-menu-item:hover:not([disabled]),\n.alternative .mat-menu-item.cdk-program-focused:not([disabled]),\n.alternative .mat-menu-item.cdk-keyboard-focused:not([disabled]),\n.alternative .mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(255, 255, 255, 0.04); }\n.alternative .mat-paginator {\n  background: #424242; }\n.alternative .mat-paginator,\n.alternative .mat-paginator-page-size .mat-select-trigger {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-paginator-decrement,\n.alternative .mat-paginator-increment {\n  border-top: 2px solid white;\n  border-right: 2px solid white; }\n.alternative .mat-paginator-first,\n.alternative .mat-paginator-last {\n  border-top: 2px solid white; }\n.alternative .mat-icon-button[disabled] .mat-paginator-decrement,\n.alternative .mat-icon-button[disabled] .mat-paginator-increment,\n.alternative .mat-icon-button[disabled] .mat-paginator-first,\n.alternative .mat-icon-button[disabled] .mat-paginator-last {\n  border-color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-progress-bar-background {\n  fill: #c8e6c9; }\n.alternative .mat-progress-bar-buffer {\n  background-color: #c8e6c9; }\n.alternative .mat-progress-bar-fill::after {\n  background-color: #00e676; }\n.alternative .mat-progress-bar.mat-accent .mat-progress-bar-background {\n  fill: #b2dfdb; }\n.alternative .mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #b2dfdb; }\n.alternative .mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #64ffda; }\n.alternative .mat-progress-bar.mat-warn .mat-progress-bar-background {\n  fill: #ffcdd2; }\n.alternative .mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n.alternative .mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #f44336; }\n.alternative .mat-progress-spinner circle, .alternative .mat-spinner circle {\n  stroke: #00e676; }\n.alternative .mat-progress-spinner.mat-accent circle, .alternative .mat-spinner.mat-accent circle {\n  stroke: #64ffda; }\n.alternative .mat-progress-spinner.mat-warn circle, .alternative .mat-spinner.mat-warn circle {\n  stroke: #f44336; }\n.alternative .mat-radio-outer-circle {\n  border-color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-radio-disabled .mat-radio-ripple .mat-ripple-element, .alternative .mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-radio-disabled .mat-radio-label-content {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #00e676; }\n.alternative .mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #00e676; }\n.alternative .mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(0, 230, 118, 0.26); }\n.alternative .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #64ffda; }\n.alternative .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #64ffda; }\n.alternative .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(100, 255, 218, 0.26); }\n.alternative .mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #f44336; }\n.alternative .mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #f44336; }\n.alternative .mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.alternative .mat-select-content, .alternative .mat-select-panel-done-animating {\n  background: #424242; }\n.alternative .mat-select-value {\n  color: white; }\n.alternative .mat-select-placeholder {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-select-disabled .mat-select-value {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-select-arrow {\n  color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(255, 255, 255, 0.12); }\n.alternative .mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #00e676; }\n.alternative .mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #64ffda; }\n.alternative .mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #f44336; }\n.alternative .mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #f44336; }\n.alternative .mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-drawer-container {\n  background-color: #303030;\n  color: white; }\n.alternative .mat-drawer {\n  background-color: #424242;\n  color: white; }\n.alternative .mat-drawer.mat-drawer-push {\n    background-color: #424242; }\n.alternative .mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(189, 189, 189, 0.6); }\n.alternative .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #80cbc4; }\n.alternative .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(128, 203, 196, 0.5); }\n.alternative .mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(128, 203, 196, 0.12); }\n.alternative .mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #a5d6a7; }\n.alternative .mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(165, 214, 167, 0.5); }\n.alternative .mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(165, 214, 167, 0.12); }\n.alternative .mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #ef9a9a; }\n.alternative .mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(239, 154, 154, 0.5); }\n.alternative .mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(239, 154, 154, 0.12); }\n.alternative .mat-disabled .mat-slide-toggle-thumb {\n  background-color: #424242; }\n.alternative .mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n.alternative .mat-slide-toggle-bar {\n  background-color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-slider-track-background {\n  background-color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-primary .mat-slider-track-fill,\n.alternative .mat-primary .mat-slider-thumb,\n.alternative .mat-primary .mat-slider-thumb-label {\n  background-color: #00e676; }\n.alternative .mat-primary .mat-slider-thumb-label-text {\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-accent .mat-slider-track-fill,\n.alternative .mat-accent .mat-slider-thumb,\n.alternative .mat-accent .mat-slider-thumb-label {\n  background-color: #64ffda; }\n.alternative .mat-accent .mat-slider-thumb-label-text {\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-warn .mat-slider-track-fill,\n.alternative .mat-warn .mat-slider-thumb,\n.alternative .mat-warn .mat-slider-thumb-label {\n  background-color: #f44336; }\n.alternative .mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n.alternative .mat-slider-focus-ring {\n  background-color: rgba(100, 255, 218, 0.2); }\n.alternative .mat-slider:hover .mat-slider-track-background,\n.alternative .cdk-focused .mat-slider-track-background {\n  background-color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-slider-disabled .mat-slider-track-background,\n.alternative .mat-slider-disabled .mat-slider-track-fill,\n.alternative .mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.alternative .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: white; }\n.alternative .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.alternative .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(255, 255, 255, 0.3);\n  background-color: transparent; }\n.alternative .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .alternative .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .alternative .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(255, 255, 255, 0.3); }\n.alternative .mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(255, 255, 255, 0.7); }\n.alternative .mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent); }\n.alternative .mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent); }\n.alternative .mat-step-header.cdk-keyboard-focused, .alternative .mat-step-header.cdk-program-focused, .alternative .mat-step-header:hover {\n  background-color: rgba(255, 255, 255, 0.04); }\n.alternative .mat-step-header .mat-step-label,\n.alternative .mat-step-header .mat-step-optional {\n  color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-step-header .mat-step-icon {\n  background-color: #00e676;\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(255, 255, 255, 0.5);\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-step-header .mat-step-label.mat-step-label-active {\n  color: white; }\n.alternative .mat-stepper-horizontal, .alternative .mat-stepper-vertical {\n  background-color: #424242; }\n.alternative .mat-stepper-vertical-line::before {\n  border-left-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-stepper-horizontal-line {\n  border-top-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-tab-nav-bar,\n.alternative .mat-tab-header {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12); }\n.alternative .mat-tab-group-inverted-header .mat-tab-nav-bar,\n.alternative .mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n  border-bottom: none; }\n.alternative .mat-tab-label, .alternative .mat-tab-link {\n  color: white; }\n.alternative .mat-tab-label.mat-tab-disabled, .alternative .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.alternative .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.5); }\n.alternative .mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.alternative .mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n.alternative .mat-tab-group.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-group.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus, .alternative .mat-tab-nav-bar.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-nav-bar.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(200, 230, 201, 0.3); }\n.alternative .mat-tab-group.mat-primary .mat-ink-bar, .alternative .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #00e676; }\n.alternative .mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .alternative .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-tab-group.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-group.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus, .alternative .mat-tab-nav-bar.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-nav-bar.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(178, 223, 219, 0.3); }\n.alternative .mat-tab-group.mat-accent .mat-ink-bar, .alternative .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #64ffda; }\n.alternative .mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .alternative .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-tab-group.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-group.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus, .alternative .mat-tab-nav-bar.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-nav-bar.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n.alternative .mat-tab-group.mat-warn .mat-ink-bar, .alternative .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #f44336; }\n.alternative .mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .alternative .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n.alternative .mat-tab-group.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-group.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus, .alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(200, 230, 201, 0.3); }\n.alternative .mat-tab-group.mat-background-primary .mat-tab-header, .alternative .mat-tab-group.mat-background-primary .mat-tab-links, .alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #00e676; }\n.alternative .mat-tab-group.mat-background-primary .mat-tab-label, .alternative .mat-tab-group.mat-background-primary .mat-tab-link, .alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .alternative .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.4); }\n.alternative .mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .alternative .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.4); }\n.alternative .mat-tab-group.mat-background-primary .mat-ripple-element, .alternative .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.12); }\n.alternative .mat-tab-group.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-group.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus, .alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(178, 223, 219, 0.3); }\n.alternative .mat-tab-group.mat-background-accent .mat-tab-header, .alternative .mat-tab-group.mat-background-accent .mat-tab-links, .alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #64ffda; }\n.alternative .mat-tab-group.mat-background-accent .mat-tab-label, .alternative .mat-tab-group.mat-background-accent .mat-tab-link, .alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .alternative .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.4); }\n.alternative .mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .alternative .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.4); }\n.alternative .mat-tab-group.mat-background-accent .mat-ripple-element, .alternative .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.12); }\n.alternative .mat-tab-group.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-group.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus, .alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n.alternative .mat-tab-group.mat-background-warn .mat-tab-header, .alternative .mat-tab-group.mat-background-warn .mat-tab-links, .alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #f44336; }\n.alternative .mat-tab-group.mat-background-warn .mat-tab-label, .alternative .mat-tab-group.mat-background-warn .mat-tab-link, .alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n.alternative .mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .alternative .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.alternative .mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.alternative .mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .alternative .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.alternative .mat-tab-group.mat-background-warn .mat-ripple-element, .alternative .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.alternative .mat-toolbar {\n  background: #212121;\n  color: white; }\n.alternative .mat-toolbar.mat-primary {\n    background: #00e676;\n    color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-toolbar.mat-accent {\n    background: #64ffda;\n    color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-toolbar.mat-warn {\n    background: #f44336;\n    color: white; }\n.alternative .mat-toolbar .mat-form-field-underline,\n  .alternative .mat-toolbar .mat-form-field-ripple,\n  .alternative .mat-toolbar .mat-focused .mat-form-field-ripple {\n    background-color: currentColor; }\n.alternative .mat-toolbar .mat-form-field-label,\n  .alternative .mat-toolbar .mat-focused .mat-form-field-label,\n  .alternative .mat-toolbar .mat-select-value,\n  .alternative .mat-toolbar .mat-select-arrow,\n  .alternative .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n    color: inherit; }\n.alternative .mat-toolbar .mat-input-element {\n    caret-color: currentColor; }\n.alternative .mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n.alternative .mat-tree {\n  background: #424242; }\n.alternative .mat-tree-node {\n  color: white; }\n.alternative .mat-snack-bar-container {\n  background: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.alternative .mat-simple-snackbar-action {\n  color: inherit; }\n.mat-sidenav-container .mat-sidenav {\n  width: 200px;\n  background: #bdbdbd; }\n.icon {\n  padding: 0 14px; }\n.container {\n  font: 'Helvetica';\n  color: red; }\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n.center-unipark {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n.align-text-picture {\n  width: 250px;\n  height: 300px;\n  float: left;\n  text-align: center; }\n.mat-icon:hover {\n  background-color: #FF1744;\n  cursor: pointer; }\n"

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
        var _this = this;
        this.loginDialogRef = this.dialog.open(_app_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_2__["LoginDialogComponent"], {
            disableClose: true,
        });
        this.loginDialogRef.afterClosed().subscribe(function (loginData) {
            console.log('Dialog output:', loginData);
            _this.facilityNo = loginData.facilityNo;
            _this.userPass = loginData.userPass;
            console.log('doedoe: ', _this.facilityNo, '  ', _this.userPass);
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

module.exports = "  <!-- Display of login modal -->\r\n<img src=\"assets/images/login/login.png\" alt=\"Login\">\r\n  <hr>\r\n<mat-dialog-content [formGroup]=\"form\">\r\n  <!-- mat form feild: facilityNO -->\r\n  <mat-form-field>\r\n    <input matInput\r\n            placeholder=\"Facility Number\"\r\n            formControlName=\"facilityNo\">\r\n  </mat-form-field>\r\n    <br>\r\n  <!-- Mat form feild: password -->\r\n  <mat-form-field>\r\n    <input matInput \r\n            placeholder=\"Password\"\r\n            [type]=\"hide ? 'password' : 'text'\"\r\n            formControlName=\"userPass\">\r\n    <mat-icon matSuffix \r\n      (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n  </mat-form-field>\r\n</mat-dialog-content>\r\n  <br>\r\n<mat-dialog-actions>\r\n  <!-- Close button -->\r\n  <button mat-button (click)=\"closeDialog()\">\r\n    <mat-icon svgIcon=\"cancel\"></mat-icon>\r\n    Cancel\r\n  </button>\r\n  <!-- Login button -->\r\n  <button mat-button (click)=\"aquireLoginDetails()\">\r\n    <mat-icon svgIcon=\"login-variant\"></mat-icon> \r\n    Login\r\n  </button>  \r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/login-dialog/login-dialog.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/login-dialog/login-dialog.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n\n.mat-icon:hover {\n  background-color: #FF1744;\n  cursor: pointer; }\n"

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
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
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
    function LoginDialogComponent(router, fb, snackBar, dialogRef) {
        this.router = router;
        this.fb = fb;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        // Hides password
        this.hide = true;
    }
    LoginDialogComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            facilityNo: [this.facilityNo, []],
            userPass: [this.userPass, []]
        });
    };
    LoginDialogComponent.prototype.aquireLoginDetails = function () {
        // Set login information
        this.facilityNo = this.form.value.facilityNo;
        this.userPass = this.form.value.userPass;
        this.facilityNoDB = '123';
        this.userPassDB = '123';
        // If information is incorrect, will inform user
        if ((this.facilityNo !== this.facilityNoDB) && (this.userPass !== this.userPassDB)) {
            this.snackBar.open('Incorrect login details', 'OK', {
                duration: 2000,
            });
        }
        else {
            // Open unipark page, close modal
            this.dialogRef.close(this.form.value);
            this.router.navigateByUrl('/admin');
        }
    };
    // Closes the dialog
    LoginDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    // captures keyboard events
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
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], LoginDialogComponent);
    return LoginDialogComponent;
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

module.exports = "<div class=\"alternative\">\r\n  <mat-toolbar color=\"primary\">\r\n      <!-- Displays UniPark image -->\r\n      <img src=\"assets/images/branding/up.png\" alt=\"UniPark\">\r\n      <span class=\"spacer\"></span>\r\n      <p>{{ userName }} &nbsp; {{ userSur }}</p>\r\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\"\r\n              matTooltip=\"Menu\"\r\n              matTooltipPosition=\"before\">\r\n        <mat-icon>more_vert</mat-icon>\r\n      <!-- Menu button -->\r\n      </button>\r\n      <mat-menu #menu=\"matMenu\">\r\n        <!-- View User Information -->\r\n        <button mat-menu-item (click)=\"openUserInfoDialog()\">\r\n          <mat-icon svgIcon=\"account-card-details\"></mat-icon>\r\n          <span>User Information</span>\r\n        </button>\r\n        <!-- Update User Info -->\r\n        <button mat-menu-item (click)=\"openUpdateUserInfoDialog()\">\r\n          <mat-icon svgIcon=\"account-settings-variant\"></mat-icon>\r\n          <span>Update User Info</span>\r\n          </button>\r\n        <!-- View User Parking Area -->\r\n        <button mat-menu-item (click)=\"openAssignedParkingDialog()\">\r\n          <mat-icon svgIcon=\"parking\"></mat-icon>\r\n          <span>Assigned Parking</span>\r\n        </button>\r\n        <!-- Request Parking -->\r\n        <button mat-menu-item (click)=\"openRequestParkingDialog()\">\r\n            <mat-icon svgIcon=\"car-connected\"></mat-icon>\r\n            <span>Request Parking</span>\r\n          </button>\r\n        <!-- Logout -->\r\n        <button mat-menu-item>\r\n          <mat-icon svgIcon=\"logout\"></mat-icon>\r\n          <span routerLink=\"/\">Logout</span>\r\n        </button>\r\n        </mat-menu>\r\n  </mat-toolbar>\r\n  <!-- going to incorportate user options into dialogs, while on defualt unipark page\r\n      will display unipark shit etc \r\n  Tab group for all user options \r\n  <mat-tab-group>\r\n    User Information \r\n    <mat-tab label=\"User Information\">\r\n      Content 1\r\n    </mat-tab>\r\n    Parking area information\r\n    <mat-tab label=\"Parking Area\">\r\n      Content 2\r\n    </mat-tab>\r\n    <mat-tab label=\"U\">\r\n        Content 2\r\n      </mat-tab>\r\n  </mat-tab-group> -->\r\n  {{ myDatas }}\r\n</div>"

/***/ }),

/***/ "./src/app/unipark-page/unipark-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/unipark-page/unipark-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_user_options_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/user-options/user-info/user-info.component */ "./src/app/user-options/user-info/user-info.component.ts");
/* harmony import */ var _app_user_options_update_user_info_update_user_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/user-options/update-user-info/update-user-info.component */ "./src/app/user-options/update-user-info/update-user-info.component.ts");
/* harmony import */ var _app_user_options_view_assigned_parking_view_assigned_parking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/user-options/view-assigned-parking/view-assigned-parking.component */ "./src/app/user-options/view-assigned-parking/view-assigned-parking.component.ts");
/* harmony import */ var _app_user_options_request_parking_request_parking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/user-options/request-parking/request-parking.component */ "./src/app/user-options/request-parking/request-parking.component.ts");
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
    function UniparkPageComponent(dialog, http) {
        this.dialog = dialog;
        this.http = http;
    }
    UniparkPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://api.coinmarketcap.com/v2/ticker/?limit=2')
            .subscribe(function (response) { return _this.myDatas = response; });
    };
    // Displays user-info modal
    UniparkPageComponent.prototype.openUserInfoDialog = function () {
        this.userInfoDialogRef = this.dialog.open(_app_user_options_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_3__["UserInfoComponent"], {
            disableClose: true,
            // Sets data to appropriate variables
            data: {
                userName: this.myDatas.data[1].symbolname,
                userSur: this.myDatas.data[1].symbol,
                password: this.password,
                personelType: this.personelType,
                personelLevel: this.personelLevel
            }
        });
    };
    // Displays update-user-info modal
    UniparkPageComponent.prototype.openUpdateUserInfoDialog = function () {
        var _this = this;
        this.UpdateUserDialog = this.dialog.open(_app_user_options_update_user_info_update_user_info_component__WEBPACK_IMPORTED_MODULE_4__["UpdateUserInfoComponent"], {
            disableClose: true
        });
        // Sets data to appropriate variables
        this.UpdateUserDialog.afterClosed().subscribe(function (updateInfo) {
            console.log('Dialog output:', updateInfo);
            _this.cellNo = updateInfo.cellNo;
            _this.email = updateInfo.email;
            _this.newPass = updateInfo.newPass;
            _this.confirmNewPass = updateInfo.confirmNewPass;
        });
    };
    // Displays assigned-parking modal
    UniparkPageComponent.prototype.openAssignedParkingDialog = function () {
        this.AssignedParkingDialog = this.dialog.open(_app_user_options_view_assigned_parking_view_assigned_parking_component__WEBPACK_IMPORTED_MODULE_5__["ViewAssignedParkingComponent"], {
            disableClose: true,
            // Sets data to appropriate variables
            data: {
                parkingName: this.parkingName,
                parkingAL: this.parkingAL,
                parkingLocation: this.parkingLocation,
            }
        });
    };
    // Displays request-parking modal
    UniparkPageComponent.prototype.openRequestParkingDialog = function () {
        var _this = this;
        this.RequestParkingDialog = this.dialog.open(_app_user_options_request_parking_request_parking_component__WEBPACK_IMPORTED_MODULE_6__["RequestParkingComponent"], {
            disableClose: true
        });
        // Sets data to appropriate variables
        this.RequestParkingDialog.afterClosed().subscribe(function (requestParking) {
            console.log('Dialog output:', requestParking);
            _this.parkingArea = requestParking.parkingArea;
            _this.parkingSpot = requestParking.parkingSpot;
        });
    };
    UniparkPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unipark-page',
            template: __webpack_require__(/*! ./unipark-page.component.html */ "./src/app/unipark-page/unipark-page.component.html"),
            styles: [__webpack_require__(/*! ./unipark-page.component.scss */ "./src/app/unipark-page/unipark-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UniparkPageComponent);
    return UniparkPageComponent;
}());



/***/ }),

/***/ "./src/app/user-options/request-parking/request-parking.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/user-options/request-parking/request-parking.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alternative\">\r\n  <!-- Display of login modal -->\r\n  <!-- Displays request parking image -->\r\n  <img src=\"assets/images/user-options/request-parking/request-parking.png\" alt=\"User Info\">\r\n  <hr>\r\n  <div>\r\n    <mat-dialog-content [formGroup]=\"form\">\r\n    <!-- Mat form feild: parking area -->\r\n      <mat-form-field>\r\n        <input matInput\r\n                placeholder=\"Parking Area\"\r\n                formControlName=\"parkingArea\">\r\n      </mat-form-field>\r\n      <br>\r\n      <!-- Mat form feild: parking spot -->\r\n      <mat-form-field>\r\n        <input matInput\r\n                placeholder=\"Parking Spot\"\r\n                formControlName=\"parkingSpot\">\r\n      </mat-form-field>\r\n    </mat-dialog-content>\r\n    <br>\r\n  </div>\r\n  <hr>\r\n  <mat-dialog-actions>\r\n    <!-- Close button -->\r\n    <button mat-button (click)=\"closeDialog()\">\r\n      <mat-icon svgIcon=\"cancel\"></mat-icon>\r\n      Cancel\r\n    </button>\r\n    <!-- Update button -->\r\n    <button mat-button (click)=\"requestParking()\">\r\n      <mat-icon svgIcon=\"cube-send\"></mat-icon> \r\n      request\r\n    </button>\r\n  </mat-dialog-actions>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/user-options/request-parking/request-parking.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/user-options/request-parking/request-parking.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestParkingComponent = /** @class */ (function () {
    function RequestParkingComponent(fb, dialogRef) {
        this.fb = fb;
        this.dialogRef = dialogRef;
    }
    RequestParkingComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            parkingArea: [this.parkingArea, []],
            parkingSpot: [this.parkingSpot, []]
        });
    };
    RequestParkingComponent.prototype.requestParking = function () {
        this.dialogRef.close(this.form.value);
    };
    RequestParkingComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    RequestParkingComponent.prototype.enterKeyEvent = function (event) {
        switch (event.keyCode) {
            case 13:
                this.requestParking();
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
    ], RequestParkingComponent.prototype, "enterKeyEvent", null);
    RequestParkingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-parking',
            template: __webpack_require__(/*! ./request-parking.component.html */ "./src/app/user-options/request-parking/request-parking.component.html"),
            styles: [__webpack_require__(/*! ./request-parking.component.scss */ "./src/app/user-options/request-parking/request-parking.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
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

module.exports = "<div class=\"alternative\">\r\n    <!-- Display of login modal -->\r\n    <!-- Displays request parking image -->\r\n    <img src=\"assets/images/user-options/update-info/update-info.png\" alt=\"User Info\">\r\n    <hr>\r\n    <mat-dialog-content [formGroup]=\"form\">\r\n      <!-- Mat form feild: cell phone number -->\r\n      <mat-form-field hintLabel=\"Max 10 digits\">\r\n        <input matInput \r\n                #input maxlength=\"10\" \r\n                placeholder=\"Cell-Phone Number\"\r\n                formControlName=\"cellNo\">\r\n        <mat-hint align=\"end\">{{ input.value?.length || 0 }}/10</mat-hint>\r\n      </mat-form-field>\r\n      <br>\r\n      <!-- Mat form feild: email address -->\r\n      <mat-form-field>\r\n        <input matInput  \r\n                placeholder=\"E-mail Address\"\r\n                [formControl]=\"email\" required>\r\n        <mat-error *ngIf=\"email.invalid\">{{ getErrorMessage() }}</mat-error>\r\n      </mat-form-field>\r\n        <br>\r\n      <!-- Mat form feild: password -->\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"New Password\"\r\n                [type]=\"hide ? 'password' : 'text'\"\r\n                formControlName=\"newPass\">\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Confirm Password\"\r\n                [type]=\"hide ? 'password' : 'text'\"\r\n                formControlName=\"confirmNewPass\">\r\n        <mat-icon matSuffix\r\n          (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n      </mat-form-field>\r\n  </mat-dialog-content>\r\n    <hr>\r\n    <br>\r\n    <mat-dialog-actions>\r\n      <!-- Close button -->\r\n      <button mat-button (click)=\"closeDialog()\">\r\n        <mat-icon svgIcon=\"cancel\"></mat-icon>\r\n        Cancel\r\n      </button>\r\n      <!-- Update button -->\r\n      <button mat-button (click)=\"updateInfo()\">\r\n        <mat-icon svgIcon=\"cube-send\"></mat-icon> \r\n        Update\r\n      </button>\r\n    </mat-dialog-actions>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/user-options/update-user-info/update-user-info.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/user-options/update-user-info/update-user-info.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-icon:hover {\n  background-color: #00C853;\n  cursor: pointer; }\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateUserInfoComponent = /** @class */ (function () {
    function UpdateUserInfoComponent(fb, dialogRef) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        // Creates email form control
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        // Hides password
        this.hide = true;
    }
    // Finds if the email entered is correct or not
    UpdateUserInfoComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' : '';
    };
    UpdateUserInfoComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            cellNo: [this.cellNo, []],
            email: [this.email, []],
            newPass: [this.newPass, []],
            confirmNewPass: [this.confirmNewPass, []],
        });
    };
    UpdateUserInfoComponent.prototype.updateInfo = function () {
        this.dialogRef.close(this.form.value);
    };
    // Closes the dialog
    UpdateUserInfoComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    UpdateUserInfoComponent.prototype.enterKeyEvent = function (event) {
        switch (event.keyCode) {
            case 13:
                this.updateInfo();
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
    ], UpdateUserInfoComponent.prototype, "enterKeyEvent", null);
    UpdateUserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-user-info',
            template: __webpack_require__(/*! ./update-user-info.component.html */ "./src/app/user-options/update-user-info/update-user-info.component.html"),
            styles: [__webpack_require__(/*! ./update-user-info.component.scss */ "./src/app/user-options/update-user-info/update-user-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
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

module.exports = "<div class=\"alternative\">\r\n  <!-- Display of login modal -->\r\n  <!-- Displays user info image -->\r\n  <img src=\"assets/images/user-options/user-info/user-info.png\" alt=\"User Info\">\r\n  <hr>\r\n  <mat-dialog-content>\r\n    <!-- Mat list to display user info -->\r\n    <mat-list role=\"list\">\r\n      <mat-list-item role=\"listitem\">\r\n        <strong>Name: &nbsp;</strong> {{ data.userName }}\r\n      </mat-list-item>\r\n      <mat-list-item role=\"listitem\">\r\n        <strong>Surname: &nbsp;</strong> {{ data.userSur }}\r\n      </mat-list-item>\r\n      <mat-list-item role=\"listitem\">\r\n        <strong>Password: &nbsp;</strong> {{ data.password }}\r\n      </mat-list-item>\r\n      <mat-list-item role=\"listitem\">\r\n        <strong>Personel Type: &nbsp;</strong> {{ data.personelType }}\r\n      </mat-list-item>\r\n      <mat-list-item role=\"listitem\">\r\n        <strong>Personel Level: &nbsp;</strong> {{ data.personelLevel }}\r\n      </mat-list-item>\r\n    </mat-list> \r\n  </mat-dialog-content>\r\n  <hr>\r\n  <br>\r\n  <mat-dialog-actions>\r\n    <!-- Close button -->\r\n    <button mat-button (click)=\"closeDialog()\" class=\"center\">\r\n    <mat-icon svgIcon=\"close\"></mat-icon>\r\n      Close\r\n    </button>\r\n</mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-options/user-info/user-info.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/user-options/user-info/user-info.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n"

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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    // Closes the dialog
    UserInfoComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    UserInfoComponent.prototype.enterKeyEvent = function (event) {
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
    ], UserInfoComponent.prototype, "enterKeyEvent", null);
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/user-options/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.scss */ "./src/app/user-options/user-info/user-info.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
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

module.exports = "<div class=\"alternative\">\r\n    <!-- Display of login modal -->\r\n    <!-- Displays assigned parking image -->\r\n    <img src=\"assets/images/user-options/assigned-parking/assigned-parking.png\" alt=\"User Info\">\r\n    <hr>\r\n    <!-- Mat list to display assigned parking -->\r\n    <mat-list role=\"list\">\r\n      <mat-list-item role=\"listitem\">\r\n        <strong>Parking Name: &nbsp;</strong> {{ data.parkingName }}\r\n      </mat-list-item>\r\n      <mat-list-item role=\"listitem\">\r\n        <strong>Parking Access Level: &nbsp;</strong> {{ data.parkingAl }}\r\n      </mat-list-item>\r\n      <mat-list-item role=\"listitem\">\r\n        <strong>Location: &nbsp;</strong> {{ data.parkingLocation }}\r\n      </mat-list-item>\r\n    </mat-list>\r\n    <hr>\r\n    <br>\r\n    <!-- CLose button -->\r\n    <button mat-button (click)=\"closeDialog()\" class=\"center\">\r\n    <mat-icon svgIcon=\"close\"></mat-icon>\r\n      Close\r\n    </button>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/user-options/view-assigned-parking/view-assigned-parking.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/user-options/view-assigned-parking/view-assigned-parking.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n"

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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ViewAssignedParkingComponent = /** @class */ (function () {
    function ViewAssignedParkingComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ViewAssignedParkingComponent.prototype.ngOnInit = function () {
    };
    // Closes the dialog
    ViewAssignedParkingComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ViewAssignedParkingComponent.prototype.enterKeyEvent = function (event) {
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
    ], ViewAssignedParkingComponent.prototype, "enterKeyEvent", null);
    ViewAssignedParkingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-assigned-parking',
            template: __webpack_require__(/*! ./view-assigned-parking.component.html */ "./src/app/user-options/view-assigned-parking/view-assigned-parking.component.html"),
            styles: [__webpack_require__(/*! ./view-assigned-parking.component.scss */ "./src/app/user-options/view-assigned-parking/view-assigned-parking.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ViewAssignedParkingComponent);
    return ViewAssignedParkingComponent;
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