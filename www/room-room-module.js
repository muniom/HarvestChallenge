(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["room-room-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/room/view-room/view-room.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/room/view-room/view-room.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section fxFlex fxLayout=\"column\" class=\"padding-0\">\r\n    <mat-card class=\"dark square\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar><mat-icon>rooms</mat-icon></div>\r\n            <mat-card-title>All Devices</mat-card-title>\r\n            <!-- <mat-card-subtitle>{{ form.value.description }}</mat-card-subtitle> -->\r\n            <button mat-icon-button matTooltip=\"Add User\" (click)=\"addUser()\"><mat-icon>person_add</mat-icon></button>\r\n            <button mat-icon-button matTooltip=\"Assign Device\" (click)=\"assignDevice()\"><mat-icon>developer_mode</mat-icon></button>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n            <alerts [messages]=\"alerts.messages\" [loading]=\"loading.partial || loading.full\"></alerts>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <!-- Players fxLayoutAlign=\"space-around\" -->\r\n    <div fxFlex class=\"player\">\r\n        <div *ngIf=\"!devices?.length && !loading.partial\" fxLayout=\"column\" fxLayoutAlign=\"space-around\" class=\"padding-30\">\r\n            <alerts [messages]=\"{ info: 'No Devices in Room' }\"></alerts>\r\n            <div fxFlex></div>\r\n            <button mat-flat-button color=\"primary\" [routerLink]=\"['/device/add']\">Assign a Device</button>\r\n            <div fxFlex></div>\r\n        </div>\r\n        \r\n        <ng-container *ngFor=\"let device of devices\">\r\n            <div *ngIf=\"device.url\">\r\n                <iframe id=\"ytplayer\"\r\n                    [src]=\"device.url | safe:'resourceUrl'\"\r\n                    frameborder=\"0\" allowfullscreen>\r\n                </iframe>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./src/app/room/room.module.ts":
/*!*************************************!*\
  !*** ./src/app/room/room.module.ts ***!
  \*************************************/
/*! exports provided: RoomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomModule", function() { return RoomModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var _view_room_view_room_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-room/view-room.page */ "./src/app/room/view-room/view-room.page.ts");






var RoomModule = /** @class */ (function () {
    function RoomModule() {
    }
    RoomModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: ':roomId',
                        component: _view_room_view_room_page__WEBPACK_IMPORTED_MODULE_5__["ViewRoomPage"]
                    }
                ])
            ],
            declarations: [_view_room_view_room_page__WEBPACK_IMPORTED_MODULE_5__["ViewRoomPage"]]
        })
    ], RoomModule);
    return RoomModule;
}());



/***/ }),

/***/ "./src/app/room/view-room/view-room.page.scss":
/*!****************************************************!*\
  !*** ./src/app/room/view-room/view-room.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host::ng-deep .player {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  background-color: var(--dark);\n}\n:host::ng-deep .player > div {\n  position: relative;\n  flex: 1 1 50%;\n}\n:host::ng-deep .player > div iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vbS92aWV3LXJvb20vQzpcXFVzZXJzXFxNaWtlXFxXb3JrXFxTY3JhcFxcSGFydmVzdENoYWxsZW5nZS9zcmNcXGFwcFxccm9vbVxcdmlldy1yb29tXFx2aWV3LXJvb20ucGFnZS5zY3NzIiwic3JjL2FwcC9yb29tL3ZpZXctcm9vbS92aWV3LXJvb20ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDQVI7QURFUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQ0FaO0FESVk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGaEIiLCJmaWxlIjoic3JjL2FwcC9yb29tL3ZpZXctcm9vbS92aWV3LXJvb20ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Q6Om5nLWRlZXAge1xyXG4gICAgLnBsYXllciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xyXG5cclxuICAgICAgICAmID4gZGl2e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGZsZXg6IDEgMSA1MCU7XHJcbiAgICAgICAgICAgIC8vIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogMzMlO1xyXG5cclxuICAgICAgICAgICAgaWZyYW1lIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIjpob3N0OjpuZy1kZWVwIC5wbGF5ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XG59XG46aG9zdDo6bmctZGVlcCAucGxheWVyID4gZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxIDEgNTAlO1xufVxuOmhvc3Q6Om5nLWRlZXAgLnBsYXllciA+IGRpdiBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/room/view-room/view-room.page.ts":
/*!**************************************************!*\
  !*** ./src/app/room/view-room/view-room.page.ts ***!
  \**************************************************/
/*! exports provided: ViewRoomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRoomPage", function() { return ViewRoomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_shared/components/base.component */ "./src/app/_shared/components/base.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _device_device_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../device/device.service */ "./src/app/device/device.service.ts");
/* harmony import */ var _shared_components_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_shared/components/dialog/confirmation-dialog.component */ "./src/app/_shared/components/dialog/confirmation-dialog.component.ts");








var ViewRoomPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ViewRoomPage, _super);
    function ViewRoomPage(route, dialog, authService, 
    // private roomService: RoomService,
    deviceService) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.dialog = dialog;
        _this.authService = authService;
        _this.deviceService = deviceService;
        return _this;
    }
    ViewRoomPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.route.params.subscribe(function () {
                    _this.refresh();
                });
                return [2 /*return*/];
            });
        });
    };
    ViewRoomPage.prototype.refresh = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.alerts.reset();
                        // Go
                        return [4 /*yield*/, this.startLoading()];
                    case 1:
                        // Go
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.deviceService.list({
                                roomId: this.route.snapshot.params.roomId
                            })["catch"](function (error) { return _this.alerts.set('error', error); })];
                    case 2:
                        _a.devices = _b.sent();
                        return [4 /*yield*/, this.stopLoading()];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewRoomPage.prototype.addUser = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.dialog.open(_shared_components_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"], {
                    data: {
                        title: 'Add User',
                        msg: "Coming Soon"
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ViewRoomPage.prototype.assignDevice = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.dialog.open(_shared_components_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"], {
                    data: {
                        title: 'Assign Device',
                        msg: "Coming Soon"
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ViewRoomPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _device_device_service__WEBPACK_IMPORTED_MODULE_6__["DeviceService"] }
    ]; };
    ViewRoomPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-room',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-room.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/room/view-room/view-room.page.html"))["default"],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-room.page.scss */ "./src/app/room/view-room/view-room.page.scss"))["default"]]
        })
    ], ViewRoomPage);
    return ViewRoomPage;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=room-room-module.js.map