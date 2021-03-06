(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _up_pdf_up_pdf_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./up-pdf/up-pdf.component */ "./src/app/up-pdf/up-pdf.component.ts");
/* harmony import */ var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatbot/chatbot.component */ "./src/app/chatbot/chatbot.component.ts");
/* harmony import */ var _architecture_architecture_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./architecture/architecture.component */ "./src/app/architecture/architecture.component.ts");







const routes = [
    { path: '', redirectTo: '/architecture', pathMatch: 'full' },
    { path: 'architecture', component: _architecture_architecture_component__WEBPACK_IMPORTED_MODULE_4__["ArchitectureComponent"] },
    { path: 'upload', component: _up_pdf_up_pdf_component__WEBPACK_IMPORTED_MODULE_2__["UpPdfComponent"] },
    { path: 'chatbot', component: _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_3__["ChatbotComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const routingComponents = [_architecture_architecture_component__WEBPACK_IMPORTED_MODULE_4__["ArchitectureComponent"], _up_pdf_up_pdf_component__WEBPACK_IMPORTED_MODULE_2__["UpPdfComponent"], _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_3__["ChatbotComponent"]];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'PDF-chatbot';
        this.flagComponent = "UploadPDF";
        this.componentToDisplay = "Have any Questions? Ask the chatbot!";
    }
    toggleComponent() {
        if (this.flagComponent == 'UploadPDF') {
            this.flagComponent = 'ChatBot';
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  margin: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5e1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _up_pdf_up_pdf_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./up-pdf/up-pdf.component */ "./src/app/up-pdf/up-pdf.component.ts");
/* harmony import */ var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chatbot/chatbot.component */ "./src/app/chatbot/chatbot.component.ts");
/* harmony import */ var _architecture_architecture_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./architecture/architecture.component */ "./src/app/architecture/architecture.component.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _up_pdf_up_pdf_component__WEBPACK_IMPORTED_MODULE_6__["UpPdfComponent"],
        _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_7__["ChatbotComponent"],
        _architecture_architecture_component__WEBPACK_IMPORTED_MODULE_8__["ArchitectureComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _up_pdf_up_pdf_component__WEBPACK_IMPORTED_MODULE_6__["UpPdfComponent"],
                    _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_7__["ChatbotComponent"],
                    _architecture_architecture_component__WEBPACK_IMPORTED_MODULE_8__["ArchitectureComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/architecture/architecture.component.ts":
/*!********************************************************!*\
  !*** ./src/app/architecture/architecture.component.ts ***!
  \********************************************************/
/*! exports provided: ArchitectureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchitectureComponent", function() { return ArchitectureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ArchitectureComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ArchitectureComponent.ɵfac = function ArchitectureComponent_Factory(t) { return new (t || ArchitectureComponent)(); };
ArchitectureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArchitectureComponent, selectors: [["app-architecture"]], decls: 24, vars: 0, consts: [[1, "parent"], [1, "title_comp"], ["routerLink", "/chatbot", 1, "button"], [1, "arch_comp"], [1, "title"], ["src", "assets/SupportBot.png", "alt", "Architecture of the System", "id", "arch_img"]], template: function ArchitectureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Smart PDF Assistant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welcome to Smart PDF Assistant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Too tired to search a whole document for your queries?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Want a simpler way out?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "You are at the right place. Upload your document and ask your queries to the chatbot to get them answered.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Click to try it out!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Architecture of the system");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".parent[_ngcontent-%COMP%]{\r\n  position:relative;\r\n  height: auto;\r\n  border: 1px solid #666;\r\n  background-color: teal;\r\n}\r\n\r\n.title_comp[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  border: 1px solid #666;\r\n  top: auto;\r\n  left: auto;\r\n}\r\n\r\n.arch_comp[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  border: 1px solid #666;\r\n  top: auto;\r\n  left: auto;\r\n\r\n}\r\n\r\n.arch_comp[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  color: black;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\n#arch_img[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 70%;\r\n  height: 80%\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  padding: 15px 32px;\r\n  background-color: teal;\r\n  text-align: center;\r\n  color:white;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  color:white;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJjaGl0ZWN0dXJlL2FyY2hpdGVjdHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTs7QUFFWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdFQUF3RTtBQUMxRSIsImZpbGUiOiJzcmMvYXBwL2FyY2hpdGVjdHVyZS9hcmNoaXRlY3R1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnR7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxufVxyXG5cclxuLnRpdGxlX2NvbXB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcclxuICB0b3A6IGF1dG87XHJcbiAgbGVmdDogYXV0bztcclxufVxyXG5cclxuLmFyY2hfY29tcHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xyXG4gIHRvcDogYXV0bztcclxuICBsZWZ0OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLmFyY2hfY29tcCBoMXtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmgxe1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgye1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgze1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNhcmNoX2ltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgaGVpZ2h0OiA4MCVcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjp3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDRweCAycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5mb290ZXIgaDN7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbmgxLGgyLGgzLHB7XHJcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArchitectureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-architecture',
                templateUrl: './architecture.component.html',
                styleUrls: ['./architecture.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/chatbot/chatbot.component.ts":
/*!**********************************************!*\
  !*** ./src/app/chatbot/chatbot.component.ts ***!
  \**********************************************/
/*! exports provided: ChatbotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotComponent", function() { return ChatbotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../upload.service */ "./src/app/upload.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








const _c0 = ["scrollframe"];
const _c1 = ["msg"];
function ChatbotComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "time", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r2.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2022 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 2, msg_r2.date, "shortTime"), "");
} }
function ChatbotComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "time", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r2.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2022 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 2, msg_r2.date, "shortTime"), "");
} }
function ChatbotComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatbotComponent_div_9_div_2_Template, 8, 5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatbotComponent_div_9_div_3_Template, 8, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !msg_r2.reply);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r2.reply);
} }
/*
  This component provides the functions
   to add messages by both bot and user
*/
class ChatbotComponent {
    constructor(uploadService, http) {
        this.uploadService = uploadService;
        this.http = http;
        this.question = "";
        this.SERVER_URL = "http://127.0.0.1:5000/";
        this.messages = [];
    }
    ngOnInit() {
        this.addBotMessage('How can I help you?');
    }
    ngAfterViewInit() {
        this.scrollContainer = this.scrollFrame.nativeElement;
        this.messageElements.changes.subscribe(_ => this.onMessagesChanged());
    }
    //whenever msg added scroll to the bottom of the chat-panel
    onMessagesChanged() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        this.scrollContainer.scroll({
            top: this.scrollContainer.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
    }
    //when user enters the question or clicks the send button
    handleUserMessage() {
        if (this.question == "") {
            return;
        }
        this.addUserMessage();
        const formData = new FormData();
        formData.append('text', this.question);
        this.uploadService.askQuestion(formData)
            .subscribe(res => {
            this.addBotMessage(res.data.answer);
        });
        this.question = "";
    }
    //adding the msg to the msg array
    addUserMessage() {
        this.messages.push({
            text: this.question,
            sender: 'You',
            reply: false,
            date: new Date()
        });
    }
    addBotMessage(text) {
        this.messages.push({
            text: text,
            sender: 'Bot',
            reply: true,
            date: new Date()
        });
    }
}
ChatbotComponent.ɵfac = function ChatbotComponent_Factory(t) { return new (t || ChatbotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ChatbotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatbotComponent, selectors: [["app-chatbot"]], viewQuery: function ChatbotComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollFrame = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messageElements = _t);
    } }, decls: 14, vars: 2, consts: [[1, "chatbot-container"], [1, "chatbot-title"], [1, "panel-title"], [1, "upload_button"], ["routerLink", "/upload"], [1, "scrollbar_try"], ["scrollframe", ""], ["class", "panel-body msg_container_base", 4, "ngFor", "ngForOf"], [1, "text-send"], ["type", "text", "placeholder", "Write your message here...", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "send_button", 3, "click"], [1, "panel-body", "msg_container_base"], ["msg", ""], ["class", "row msg_container base_sent", 4, "ngIf"], ["class", "row msg_container base_receive", 4, "ngIf"], [1, "row", "msg_container", "base_sent"], [1, "col-md-10", "col-xs-10"], [1, "messages", "msg_sent"], ["datetime", "2009-11-13T20:00"], [1, "row", "msg_container", "base_receive"], [1, "messages", "msg_receive"]], template: function ChatbotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ChatBot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Upload PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatbotComponent_div_9_Template, 4, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatbotComponent_Template_input_ngModelChange_11_listener($event) { return ctx.question = $event; })("keyup.enter", function ChatbotComponent_Template_input_keyup_enter_11_listener() { return ctx.handleUserMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatbotComponent_Template_button_click_12_listener() { return ctx.handleUserMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.question);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".send_button[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    background: aqua;\r\n    position: absolute;\r\n    right: 0px;\r\n    width: 10%;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n  width: -webkit-fill-available;\r\n  height: -webkit-fill-available;\r\n}\r\n.chatbot-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 99%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    background: #f6f6f7;\r\n    outline: 3px solid #0ac4ca;\r\n    outline-offset: -2px;\r\n    bottom: 2px;\r\n    top: 2px;\r\n    position: absolute;\r\n\r\n}\r\n.chatbot-title[_ngcontent-%COMP%]{\r\n    border: 1px solid #0ac4ca;\r\n    flex-shrink: 0;\r\n    background: aqua;\r\n    padding: 5px;\r\n    width: -webkit-fill-available;\r\n    position: relative;\r\n}\r\n.upload_button[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 25%;\r\n    right: 2%;\r\n}\r\n.col-md-2[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%]{\r\n    padding:0;\r\n}\r\n.panel[_ngcontent-%COMP%]{\r\n    margin-bottom: 0px;\r\n    margin-right: 0px;\r\n}\r\n.chat-window[_ngcontent-%COMP%]{\r\n    bottom: 0;\r\n    float: right;\r\n    width: 100%;\r\n}\r\n.chat-window[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > .panel[_ngcontent-%COMP%]{\r\n    border-radius: 5px 5px 0 0;\r\n}\r\n.icon_minim[_ngcontent-%COMP%]{\r\n    padding:2px 10px;\r\n}\r\n.msg_container_base[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0 10px 10px;\r\n  max-height:300px;\r\n  overflow-x:hidden;\r\n}\r\n.top-bar[_ngcontent-%COMP%] {\r\n  background: #666;\r\n  color: white;\r\n  padding: 10px;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.msg_receive[_ngcontent-%COMP%]{\r\n    padding-left:0;\r\n    margin-left:0;\r\n}\r\n.msg_sent[_ngcontent-%COMP%]{\r\n    padding-bottom:20px !important;\r\n    margin-right:0;\r\n}\r\n.messages[_ngcontent-%COMP%] {\r\n  background: white;\r\n    padding: 10px;\r\n    border-radius: 2px;\r\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\r\n    max-width: 800px;\r\n    overflow-wrap: break-word;\r\n}\r\n.messages[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    margin: 0 0 0.2rem 0;\r\n  }\r\n.messages[_ngcontent-%COMP%]    > time[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    color: #ccc;\r\n}\r\n.msg_container[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    overflow: hidden;\r\n    display: flex;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n.avatar[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n.base_receive[_ngcontent-%COMP%]    > .avatar[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    width: 0;\r\n    height: 0;\r\n    border: 5px solid #FFF;\r\n    border-left-color: rgba(0, 0, 0, 0);\r\n    border-bottom-color: rgba(0, 0, 0, 0);\r\n}\r\n.base_sent[_ngcontent-%COMP%] {\r\n  justify-content: flex-end;\r\n  align-items: flex-end;\r\n}\r\n.base_sent[_ngcontent-%COMP%]    > .avatar[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 0;\r\n    height: 0;\r\n    border: 5px solid white;\r\n    border-right-color: transparent;\r\n    border-top-color: transparent;\r\n    box-shadow: 1px 1px 2px rgba(black, 0.2);\r\n}\r\n.msg_sent[_ngcontent-%COMP%]    > time[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\n.msg_container_base[_ngcontent-%COMP%]::-webkit-scrollbar-track\r\n{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n    background-color: #F5F5F5;\r\n}\r\n.msg_container_base[_ngcontent-%COMP%]::-webkit-scrollbar\r\n{\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n}\r\n.msg_container_base[_ngcontent-%COMP%]::-webkit-scrollbar-thumb\r\n{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n    background-color: #555;\r\n}\r\n.btn-group.dropup[_ngcontent-%COMP%]{\r\n    position:fixed;\r\n    left:0px;\r\n    bottom:0;\r\n}\r\n.scrollbar_try[_ngcontent-%COMP%]{\r\n    flex-grow: 1;\r\n    overflow: auto;\r\n    outline: 3px solid #0ac4ca;\r\n    outline-offset: -2px;\r\n}\r\n.text-send[_ngcontent-%COMP%]{\r\n   flex-shrink: 0;\r\n   height: 35px;\r\n   position: relative;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJvdC9jaGF0Ym90LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsOEJBQThCO0FBQ2hDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxRQUFRO0lBQ1Isa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztBQUNiO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UsU0FBUztFQUNULG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7RUFDdEI7QUFDRjtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLHFDQUFxQztBQUN6QztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0Isd0NBQXdDO0FBQzVDO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBSUE7O0lBRUksaURBQWlEO0lBQ2pELHlCQUF5QjtBQUM3QjtBQUVBOztJQUVJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7QUFFQTs7SUFFSSxnREFBZ0Q7SUFDaEQsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsUUFBUTtJQUNSLFFBQVE7QUFDWjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsb0JBQW9CO0FBQ3hCO0FBQ0E7R0FDRyxjQUFjO0dBQ2QsWUFBWTtHQUNaLGtCQUFrQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NoYXRib3QvY2hhdGJvdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbmRfYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogYXF1YTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAlO1xyXG59XHJcbmlucHV0e1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG4uY2hhdGJvdC1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTklO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGJhY2tncm91bmQ6ICNmNmY2Zjc7XHJcbiAgICBvdXRsaW5lOiAzcHggc29saWQgIzBhYzRjYTtcclxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xyXG4gICAgYm90dG9tOiAycHg7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbn1cclxuLmNoYXRib3QtdGl0bGV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGFjNGNhO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBhcXVhO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnVwbG9hZF9idXR0b257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHJpZ2h0OiAyJTtcclxufVxyXG4uY29sLW1kLTIsIC5jb2wtbWQtMTB7XHJcbiAgICBwYWRkaW5nOjA7XHJcbn1cclxuLnBhbmVse1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLmNoYXQtd2luZG93e1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNoYXQtd2luZG93ID4gZGl2ID4gLnBhbmVse1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbn1cclxuLmljb25fbWluaW17XHJcbiAgICBwYWRkaW5nOjJweCAxMHB4O1xyXG59XHJcbi5tc2dfY29udGFpbmVyX2Jhc2V7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4O1xyXG4gIG1heC1oZWlnaHQ6MzAwcHg7XHJcbiAgb3ZlcmZsb3cteDpoaWRkZW47XHJcbn1cclxuLnRvcC1iYXIge1xyXG4gIGJhY2tncm91bmQ6ICM2NjY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLm1zZ19yZWNlaXZle1xyXG4gICAgcGFkZGluZy1sZWZ0OjA7XHJcbiAgICBtYXJnaW4tbGVmdDowO1xyXG59XHJcbi5tc2dfc2VudHtcclxuICAgIHBhZGRpbmctYm90dG9tOjIwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDowO1xyXG59XHJcbi5tZXNzYWdlcyB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbi5tZXNzYWdlcyA+IHAge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luOiAwIDAgMC4ycmVtIDA7XHJcbiAgfVxyXG4ubWVzc2FnZXMgPiB0aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG59XHJcbi5tc2dfY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5pbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYXZhdGFyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYmFzZV9yZWNlaXZlID4gLmF2YXRhcjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNGRkY7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5iYXNlX3NlbnQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbi5iYXNlX3NlbnQgPiAuYXZhdGFyOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoYmxhY2ssIDAuMik7XHJcbn1cclxuXHJcbi5tc2dfc2VudCA+IHRpbWV7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcblxyXG5cclxuLm1zZ19jb250YWluZXJfYmFzZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcclxue1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbi5tc2dfY29udGFpbmVyX2Jhc2U6Oi13ZWJraXQtc2Nyb2xsYmFyXHJcbntcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG5cclxuLm1zZ19jb250YWluZXJfYmFzZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcclxue1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsLjMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxufVxyXG5cclxuLmJ0bi1ncm91cC5kcm9wdXB7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgYm90dG9tOjA7XHJcbn1cclxuLnNjcm9sbGJhcl90cnl7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG91dGxpbmU6IDNweCBzb2xpZCAjMGFjNGNhO1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XHJcbn1cclxuLnRleHQtc2VuZHtcclxuICAgZmxleC1zaHJpbms6IDA7XHJcbiAgIGhlaWdodDogMzVweDtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatbotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chatbot',
                templateUrl: './chatbot.component.html',
                styleUrls: ['./chatbot.component.css']
            }]
    }], function () { return [{ type: _upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, { scrollFrame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scrollframe', { static: false }]
        }], messageElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['msg']
        }] }); })();


/***/ }),

/***/ "./src/app/up-pdf/up-pdf.component.ts":
/*!********************************************!*\
  !*** ./src/app/up-pdf/up-pdf.component.ts ***!
  \********************************************/
/*! exports provided: UpPdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpPdfComponent", function() { return UpPdfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../upload.service */ "./src/app/upload.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







/*
  This component provides the functions to upload pdf
*/
class UpPdfComponent {
    constructor(uploadService) {
        this.uploadService = uploadService;
        this.fileData = null;
        this.uploadedFilePath = null;
        this.fileName = "";
    }
    // get input file
    fileProgress(fileInput) {
        this.fileData = fileInput.target.files[0];
        this.fileName = this.fileData.name;
    }
    //when submit button clicked call the upload service
    onSubmit() {
        if (this.fileData == null) {
            alert("select a file");
            return;
        }
        if (this.fileData.name.length > 4 && this.fileData.name.substr(-4, 4) != '.pdf') {
            alert("upload only pdf");
            return;
        }
        const formData = new FormData();
        formData.append('pdf', this.fileData);
        this.uploadService.upload(formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(event => {
            console.log("event");
            console.log(event);
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress:
                    //file.progress = Math.round(event.loaded * 100 / event.total);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response:
                    return event;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(`${this.fileData.name} upload failed.`);
        })).subscribe((event) => {
            if (typeof (event) === 'object') {
                if (event.body.data.status == "uploaded")
                    alert("File Uploaded Successfully!");
                console.log(event.body);
            }
            this.fileName = "";
        });
    }
    ngOnInit() {
    }
}
UpPdfComponent.ɵfac = function UpPdfComponent_Factory(t) { return new (t || UpPdfComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"])); };
UpPdfComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpPdfComponent, selectors: [["app-up-pdf"]], decls: 16, vars: 1, consts: [["id", "FileUpload"], [1, "wrapper"], [1, "upload"], [1, "upload__button"], ["type", "file", "accept", "application/pdf", 1, "input__button", 3, "change"], [1, "form-group"], [1, "btn", "btn-primary", 3, "click"], [1, "askPDFButton"], ["routerLink", "/chatbot"]], template: function UpPdfComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Upload Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpPdfComponent_Template_input_change_6_listener($event) { return ctx.fileProgress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpPdfComponent_Template_button_click_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Click to ask questions to the chatbot!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fileName);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: ["#FileUpload[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.askPDFButton[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: 60%;\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n.wrapper[_ngcontent-%COMP%] {\r\n  margin: 30px;\r\n  padding: 10px;\r\n  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\r\n  border-radius: 10px;\r\n  background-color: white;\r\n  width: 415px;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n  height: 85px;\r\n  border: 8px dashed #e6f5e9;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 5px;\r\n}\r\n.upload[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: 12px;\r\n  line-height: 0;\r\n  font-size: 22px;\r\n  color: #0c3214;\r\n  letter-spacing: 1.5px;\r\n}\r\n.upload__button[_ngcontent-%COMP%] {\r\n  background-color: #e6f5e9;\r\n  border-radius: 10px;\r\n  position:relative;\r\n  padding: 0px 8px 0px 10px;\r\n}\r\n.upload__button[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.8;\r\n}\r\n.input__button[_ngcontent-%COMP%]{\r\n  opacity: 0.0;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 100%; height:100%;\r\n}\r\n.input__button[_ngcontent-%COMP%]:hover{\r\n}\r\n\r\n.uploaded[_ngcontent-%COMP%] {\r\n  width: 375px;\r\n  margin: 10px;\r\n  background-color: #e6f5e9;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n.file[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.file__name[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n  width: 300px;\r\n  line-height: 0;\r\n  color: #0c3214;\r\n  font-size: 18px;\r\n  letter-spacing: 1.5px;\r\n}\r\n.fa-times[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n}\r\n.fa-file-pdf[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n  font-size: 40px;\r\n  color: #0c3214;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXAtcGRmL3VwLXBkZi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwyQkFBMkI7QUFDM0I7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0VBQXNFO0VBQ3RFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVyxFQUFFLFdBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3VwLXBkZi91cC1wZGYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiA9PT0gV3JhcHBlciBTdHlsZXMgPT09ICovXHJcbiNGaWxlVXBsb2FkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5hc2tQREZCdXR0b257XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ud3JhcHBlciB7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLDAsMCwwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgwLDAsMCwwLjIyKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA0MTVweDtcclxufVxyXG5cclxuLyogPT09IFVwbG9hZCBCb3ggPT09ICovXHJcbi51cGxvYWQge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBoZWlnaHQ6IDg1cHg7XHJcbiAgYm9yZGVyOiA4cHggZGFzaGVkICNlNmY1ZTk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4udXBsb2FkIHAge1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjMGMzMjE0O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxufVxyXG4udXBsb2FkX19idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmY1ZTk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAwcHggOHB4IDBweCAxMHB4O1xyXG59XHJcbi51cGxvYWRfX2J1dHRvbjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcbi5pbnB1dF9fYnV0dG9ue1xyXG4gIG9wYWNpdHk6IDAuMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlOyBoZWlnaHQ6MTAwJTtcclxufVxyXG4uaW5wdXRfX2J1dHRvbjpob3ZlcntcclxufVxyXG4vKiA9PT0gVXBsb2FkZWQgRmlsZXMgPT09ICovXHJcbi51cGxvYWRlZCB7XHJcbiAgd2lkdGg6IDM3NXB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmNWU5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5maWxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmZpbGVfX25hbWUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICBjb2xvcjogIzBjMzIxNDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG59XHJcbi5mYS10aW1lczpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG4uZmEtZmlsZS1wZGYge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGNvbG9yOiAjMGMzMjE0O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpPdfComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-up-pdf',
                templateUrl: './up-pdf.component.html',
                styleUrls: ['./up-pdf.component.css']
            }]
    }], function () { return [{ type: _upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/upload.service.ts":
/*!***********************************!*\
  !*** ./src/app/upload.service.ts ***!
  \***********************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



/*
  This service is used to call the api
  for uploading pdf and
  sending the question asked to the bot
*/
class UploadService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    upload(formData) {
        return this.httpClient.post('/handleUpload', formData, {
            reportProgress: true,
            observe: 'events'
        });
    }
    askQuestion(formData) {
        console.log("askQuestion");
        return this.httpClient.post('/questions', formData, {});
    }
}
UploadService.ɵfac = function UploadService_Factory(t) { return new (t || UploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UploadService, factory: UploadService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MAJOR\Smart-pdf-assistant\UI\PDFChatBot\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map