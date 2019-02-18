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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Reroute app component to home component.-->\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cookdev';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");






//create route to homecomponent
var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\r\n\r\nbody {\r\n  background: lightblue;\r\n  background-size: cover;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.navigation {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  height: 70px;\r\n  background: black;\r\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.nav-container {\r\n  max-width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\nnav {\r\n  float: left;\r\n}\r\n\r\nnav ul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nnav ul li {\r\n  float: left;\r\n  position: relative;\r\n}\r\n\r\nnav ul li a,\r\nnav ul li a:visited {\r\n  font-family: arial;\r\n  display: block;\r\n  padding: 0 20px;\r\n  line-height: 70px;\r\n  background: black;\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\nnav ul li a:hover,\r\nnav ul li a:visited:hover {\r\n  text-decoration: none;\r\n  color: #fe7f18;\r\n}\r\n\r\nnav ul li a:not(:only-child):after,\r\nnav ul li a:visited:not(:only-child):after {\r\n  padding-left: 4px;\r\n  content: ' ▾';\r\n}\r\n\r\nnav ul li ul li {\r\n  min-width: 190px;\r\n}\r\n\r\nnav ul li ul li a {\r\n  padding: 15px;\r\n  line-height: 20px;\r\n}\r\n\r\n.nav-dropdown {\r\n  position: absolute;\r\n  display: none;\r\n  z-index: 1;\r\n  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.nav-mobile {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  background: black;\r\n  height: 70px;\r\n  width: 70px;\r\n}\r\n\r\n/* Mobile */\r\n\r\n@media only screen and (max-width: 798px) {\r\n  .nav-mobile {\r\n    display: block;\r\n  }\r\n\r\n  nav {\r\n    width: 100%;\r\n    padding: 70px 0 15px;\r\n  }\r\n\r\n  nav ul {\r\n    display: none;\r\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);\r\n  }\r\n\r\n  nav ul li {\r\n    float: none;\r\n  }\r\n\r\n  nav ul li a {\r\n    padding: 15px;\r\n    line-height: 20px;\r\n  }\r\n\r\n  nav ul li ul li a {\r\n    padding-left: 30px;\r\n  }\r\n\r\n  .nav-dropdown {\r\n    position: static;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 799px) {\r\n  .nav-list {\r\n    display: block !important;\r\n  }\r\n}\r\n\r\n#nav-toggle {\r\n  position: absolute;\r\n  left: 18px;\r\n  top: 22px;\r\n  cursor: pointer;\r\n  padding: 10px 35px 16px 0px;\r\n}\r\n\r\n#nav-toggle span,\r\n#nav-toggle span:before,\r\n#nav-toggle span:after {\r\n  cursor: pointer;\r\n  border-radius: 1px;\r\n  height: 5px;\r\n  width: 35px;\r\n  background: #ffffff;\r\n  position: absolute;\r\n  display: block;\r\n  content: '';\r\n  transition: all 300ms ease-in-out;\r\n}\r\n\r\n#nav-toggle span:before {\r\n  top: -10px;\r\n}\r\n\r\n#nav-toggle span:after {\r\n  bottom: -10px;\r\n}\r\n\r\n#nav-toggle.active span {\r\n  background-color: transparent;\r\n}\r\n\r\n#nav-toggle.active span:before, #nav-toggle.active span:after {\r\n  top: 0;\r\n}\r\n\r\n#nav-toggle.active span:before {\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n}\r\n\r\n#nav-toggle.active span:after {\r\n  -webkit-transform: rotate(-45deg);\r\n          transform: rotate(-45deg);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCOztBQUVoQjtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7RUFDViwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUEsV0FBVzs7QUFDWDtFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsMENBQTBDO0VBQzVDOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7OztFQUdFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsTUFBTTtBQUNSOztBQUVBO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcblxyXG4ubmF2LWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbm5hdiB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxubmF2IHVsIGxpIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSBhLFxyXG5uYXYgdWwgbGkgYTp2aXNpdGVkIHtcclxuICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubmF2IHVsIGxpIGE6aG92ZXIsXHJcbm5hdiB1bCBsaSBhOnZpc2l0ZWQ6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI2ZlN2YxODtcclxufVxyXG5cclxubmF2IHVsIGxpIGE6bm90KDpvbmx5LWNoaWxkKTphZnRlcixcclxubmF2IHVsIGxpIGE6dmlzaXRlZDpub3QoOm9ubHktY2hpbGQpOmFmdGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICBjb250ZW50OiAnIOKWvic7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSB1bCBsaSB7XHJcbiAgbWluLXdpZHRoOiAxOTBweDtcclxufVxyXG5cclxubmF2IHVsIGxpIHVsIGxpIGEge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5uYXYtZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcblxyXG4ubmF2LW1vYmlsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGhlaWdodDogNzBweDtcclxuICB3aWR0aDogNzBweDtcclxufVxyXG5cclxuLyogTW9iaWxlICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzk4cHgpIHtcclxuICAubmF2LW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDcwcHggMCAxNXB4O1xyXG4gIH1cclxuXHJcbiAgbmF2IHVsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG5cclxuICBuYXYgdWwgbGkge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBuYXYgdWwgbGkgYSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBuYXYgdWwgbGkgdWwgbGkgYSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAubmF2LWRyb3Bkb3duIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3OTlweCkge1xyXG4gIC5uYXYtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuI25hdi10b2dnbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxOHB4O1xyXG4gIHRvcDogMjJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAzNXB4IDE2cHggMHB4O1xyXG59XHJcblxyXG4jbmF2LXRvZ2dsZSBzcGFuLFxyXG4jbmF2LXRvZ2dsZSBzcGFuOmJlZm9yZSxcclxuI25hdi10b2dnbGUgc3BhbjphZnRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICB3aWR0aDogMzVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb250ZW50OiAnJztcclxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNuYXYtdG9nZ2xlIHNwYW46YmVmb3JlIHtcclxuICB0b3A6IC0xMHB4O1xyXG59XHJcblxyXG4jbmF2LXRvZ2dsZSBzcGFuOmFmdGVyIHtcclxuICBib3R0b206IC0xMHB4O1xyXG59XHJcblxyXG4jbmF2LXRvZ2dsZS5hY3RpdmUgc3BhbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiNuYXYtdG9nZ2xlLmFjdGl2ZSBzcGFuOmJlZm9yZSwgI25hdi10b2dnbGUuYWN0aXZlIHNwYW46YWZ0ZXIge1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuI25hdi10b2dnbGUuYWN0aXZlIHNwYW46YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbiNuYXYtdG9nZ2xlLmFjdGl2ZSBzcGFuOmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\n<html lang=\"en\">\n\n<body>\n  <section class=\"navigation\">\n    <div class=\"nav-container\">\n      <nav>\n        <ul class=\"nav-list\">\n          <li><a href=\"#\" id=\"home\">Home</a></li>\n        </ul>\n      </nav>\n    </div>\n  </section>\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\cookdev\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map