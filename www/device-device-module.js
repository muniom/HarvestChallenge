(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-device-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/device/add-device/add-device.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device/add-device/add-device.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <mat-card class=\"blur mat-elevation-z10\">\r\n        <mat-card-header>\r\n            <mat-card-title>Add a Device</mat-card-title>\r\n            <mat-card-subtitle>Select a discovered device</mat-card-subtitle>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n            <form fxLayout=\"column\" fxLayoutGap=\"20px\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n                <alerts [messages]=\"alerts.messages\" [loading]=\"loading.partial || loading.full\"></alerts>\r\n\r\n                <mat-vertical-stepper #stepper *ngIf=\"!alerts.messages.info\" [linear]=\"true\">\r\n                    <!-- Devices -->\r\n                    <mat-step label=\"Discovered Devices\" [stepControl]=\"form.get('name')\">\r\n                        <mat-nav-list>\r\n                            <mat-list-item *ngFor=\"let device of discoveredDevices\"\r\n                                (click)=\"form.patchValue(device); stepper.next()\">\r\n                                <mat-icon matListIcon>{{ device.type?.icon }}</mat-icon>\r\n                                <h4 matLine>{{ device.name }}</h4>\r\n                                <p matLine>{{ device.description }}</p>\r\n                                <!-- <mat-icon>chevron_right</mat-icon> -->\r\n                            </mat-list-item>\r\n                        </mat-nav-list>\r\n                    </mat-step>\r\n                    \r\n                    <!-- Details -->\r\n                    <mat-step label=\"Device Details\" [stepControl]=\"form\">\r\n                        <div fxLayout=\"column\" class=\"padding-top-30\">\r\n                            <!-- Name -->\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Name\" formControlName=\"name\" type=\"text\" />\r\n                            </mat-form-field>\r\n                            \r\n                            <!-- Type -->\r\n                            <mat-form-field>\r\n                                <mat-select placeholder=\"Type\" formControlName=\"type\" [compareWith]=\"compareFn\">\r\n                                    <mat-select-trigger>\r\n                                        <mat-icon>{{ form.value.type?.icon }}</mat-icon>\r\n                                        {{ form.value.type?.label }}\r\n                                    </mat-select-trigger>\r\n\r\n                                    <mat-option *ngFor=\"let type of formOptions.deviceTypes\" [value]=\"type\">\r\n                                        <mat-icon>{{ type.icon }}</mat-icon>\r\n                                        {{ type.label }}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n\r\n                            <!-- Description -->\r\n                            <mat-form-field>\r\n                                <textarea matInput placeholder=\"Description\" formControlName=\"description\"></textarea>\r\n                            </mat-form-field>\r\n\r\n                            <!-- URL -->\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Url\" formControlName=\"url\" type=\"text\" />\r\n                            </mat-form-field>\r\n                            \r\n                            <div class=\"padding-top-30\">\r\n                                <button mat-flat-button color=\"primary\" type=\"submit\" fxFlex>Add Device</button>\r\n                            </div>\r\n                        </div>\r\n                    </mat-step>\r\n                </mat-vertical-stepper>\r\n            </form>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/device/edit-device/edit-device.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device/edit-device/edit-device.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"padding-0\">\r\n    <mat-card class=\"transparent mat-elevation-z0\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar><button mat-icon-button [routerLink]=\"['../']\"><mat-icon>chevron_left</mat-icon></button></div>\r\n            <mat-card-title>Edit Device</mat-card-title>\r\n        </mat-card-header>\r\n    </mat-card>\r\n</section>\r\n        \r\n<section>\r\n    <mat-card class=\"blur mat-elevation-z10\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar><mat-icon>{{ form.value.type?.icon }}</mat-icon></div>\r\n            <mat-card-title>{{ form.value.name || '&nbsp;' }}</mat-card-title>\r\n            <mat-card-subtitle>{{ form.value.description || '&nbsp;' }}</mat-card-subtitle>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n            <form fxLayout=\"column\" fxLayoutGap=\"20px\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n                <alerts [messages]=\"alerts.messages\" [loading]=\"loading.partial || loading.full\"></alerts>\r\n\r\n                <!-- Details -->\r\n                <div *ngIf=\"!alerts.messages.error\" fxLayout=\"column\" class=\"padding-top-30\">\r\n                    <!-- Name -->\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Name\" formControlName=\"name\" type=\"text\" />\r\n                    </mat-form-field>\r\n                    \r\n                    <!-- Type\r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Type\" formControlName=\"type\" [compareWith]=\"compareFn\">\r\n                            <mat-select-trigger>\r\n                                <mat-icon>{{ form.value.type?.icon }}</mat-icon>\r\n                                {{ form.value.type?.label }}\r\n                            </mat-select-trigger>\r\n\r\n                            <mat-option *ngFor=\"let type of formOptions.deviceTypes\" [value]=\"type\">\r\n                                <mat-icon>{{ type.icon }}</mat-icon>\r\n                                {{ type.label }}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n                    <!-- Description -->\r\n                    <mat-form-field>\r\n                        <textarea matInput placeholder=\"Description\" formControlName=\"description\"></textarea>\r\n                    </mat-form-field>\r\n\r\n                    <!-- URL -->\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Url\" formControlName=\"url\" type=\"text\" />\r\n                        <mat-error *ngIf=\"form.controls.url.errors\">{{ form.controls.url.errors?.hint }}</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <!-- Room -->\r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Room\" formControlName=\"room\" [compareWith]=\"compareFn\">\r\n                            <mat-select-trigger>\r\n                                <mat-icon>{{ form.value.room?.icon }}</mat-icon>\r\n                                {{ form.value.room?.name }}\r\n                            </mat-select-trigger>\r\n\r\n                            <mat-option *ngFor=\"let room of formOptions.rooms\" [value]=\"room\">\r\n                                <mat-icon>{{ room.icon }}</mat-icon>\r\n                                {{ room.name }}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    \r\n                    <div class=\"padding-top-30\">\r\n                        <button mat-flat-button color=\"delete\" type=\"button\" fxFlex (click)=\"delete()\">Delete</button>\r\n                        <button mat-flat-button color=\"primary\" type=\"submit\" fxFlex>Save</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/device/view-device/view-device.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device/view-device/view-device.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section fxFlex fxLayout=\"column\" class=\"padding-0\">\r\n    <mat-card class=\"dark square\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar><mat-icon>{{ form.value.type?.icon }}</mat-icon></div>\r\n            <mat-card-title>{{ form.value.name }}</mat-card-title>\r\n            <mat-card-subtitle>{{ form.value.description }}</mat-card-subtitle>\r\n            <button mat-icon-button [routerLink]=\"['edit']\" matTooltip=\"Edit\"><mat-icon>edit</mat-icon></button>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n            <alerts [messages]=\"alerts.messages\" [loading]=\"loading.partial || loading.full\"></alerts>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <!-- Player -->\r\n    <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"space-around\" class=\"player\">\r\n        <div *ngIf=\"!form.value.url && !loading.partial\" class=\"padding-30\">\r\n            <alerts [messages]=\"{ warning: 'There is an issue with the stream' }\"></alerts>\r\n        </div>\r\n        \r\n        <div *ngIf=\"form.value.url\">\r\n            <iframe id=\"ytplayer\"\r\n                [src]=\"form.value.url | safe:'resourceUrl'\"\r\n                frameborder=\"0\" allowfullscreen>\r\n            </iframe>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./src/app/device/add-device/add-device.page.scss":
/*!********************************************************!*\
  !*** ./src/app/device/add-device/add-device.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS9hZGQtZGV2aWNlL2FkZC1kZXZpY2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/device/add-device/add-device.page.ts":
/*!******************************************************!*\
  !*** ./src/app/device/add-device/add-device.page.ts ***!
  \******************************************************/
/*! exports provided: AddDevicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDevicePage", function() { return AddDevicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_shared/components/base.component */ "./src/app/_shared/components/base.component.ts");
/* harmony import */ var _shared_helpers_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared/helpers/forms */ "./src/app/_shared/helpers/forms.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _device_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../device.service */ "./src/app/device/device.service.ts");
/* harmony import */ var _models_device_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/device.model */ "./src/app/device/models/device.model.ts");
/* harmony import */ var _models_device_statuses_dictionary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/device-statuses.dictionary */ "./src/app/device/models/device-statuses.dictionary.ts");
/* harmony import */ var _models_device_types_dictionary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/device-types.dictionary */ "./src/app/device/models/device-types.dictionary.ts");











var AddDevicePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AddDevicePage, _super);
    function AddDevicePage(router, snackBar, authService, deviceService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.snackBar = snackBar;
        _this.authService = authService;
        _this.deviceService = deviceService;
        _this.form = new _models_device_model__WEBPACK_IMPORTED_MODULE_8__["DeviceForm"]();
        _this.formOptions = {
            deviceTypes: Object.values(_models_device_types_dictionary__WEBPACK_IMPORTED_MODULE_10__["DeviceTypes"])
        };
        return _this;
    }
    AddDevicePage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.refresh();
                return [2 /*return*/];
            });
        });
    };
    AddDevicePage.prototype.refresh = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var existingDevices;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.alerts.reset();
                        this.startLoading();
                        return [4 /*yield*/, this.deviceService.list({
                            // Filters / Pagination
                            })["catch"](function (error) { return _this.alerts.set('error', error); })];
                    case 1:
                        existingDevices = _a.sent();
                        // Would normally be a service call
                        this.discoveredDevices = [
                            // Example devices - filtered by previously stored (IndexDB)
                            new _models_device_model__WEBPACK_IMPORTED_MODULE_8__["DeviceModel"]({
                                serialNo: 'LHD-0000000001',
                                name: 'Logitech HD Cam',
                                type: _models_device_types_dictionary__WEBPACK_IMPORTED_MODULE_10__["DeviceTypes"].webcam,
                                status: _models_device_statuses_dictionary__WEBPACK_IMPORTED_MODULE_9__["DeviceStatuses"].online,
                                url: '//www.youtube.com/embed/bVk8XyjhTKo?autoplay=1'
                            }),
                            new _models_device_model__WEBPACK_IMPORTED_MODULE_8__["DeviceModel"]({
                                serialNo: 'YC5000-000000001',
                                name: 'Yahama ClearMic 5000',
                                type: _models_device_types_dictionary__WEBPACK_IMPORTED_MODULE_10__["DeviceTypes"].microphone,
                                status: _models_device_statuses_dictionary__WEBPACK_IMPORTED_MODULE_9__["DeviceStatuses"].online,
                                url: '//www.broadcastify.com/webPlayer/1432'
                            }),
                            new _models_device_model__WEBPACK_IMPORTED_MODULE_8__["DeviceModel"]({
                                serialNo: 'M-0000000001',
                                name: 'Mic #1',
                                type: _models_device_types_dictionary__WEBPACK_IMPORTED_MODULE_10__["DeviceTypes"].microphone
                            }),
                            new _models_device_model__WEBPACK_IMPORTED_MODULE_8__["DeviceModel"]({
                                serialNo: 'C-0000000001',
                                name: 'Cam #1',
                                type: _models_device_types_dictionary__WEBPACK_IMPORTED_MODULE_10__["DeviceTypes"].webcam,
                                url: '//www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
                            }),
                            new _models_device_model__WEBPACK_IMPORTED_MODULE_8__["DeviceModel"]({
                                serialNo: 'H-000000001',
                                name: 'Headset #1',
                                type: _models_device_types_dictionary__WEBPACK_IMPORTED_MODULE_10__["DeviceTypes"].headset
                            })
                        ].filter(function (device) {
                            var existingDevice = existingDevices.find(function (existingDevice) { return device.name === existingDevice.name; });
                            console.log('existingDevice', existingDevice);
                            return !existingDevice;
                        })
                            .map(function (device, i) { return Object.assign(device, {
                            // deviceId: i + existingDevices.length,
                            orgId: _this.authService.user.organisation.organisationId,
                            roomId: _this.authService.room.roomId
                        }); });
                        if (!this.discoveredDevices.length)
                            this.alerts.set('info', 'No devices discovered');
                        this.stopLoading();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddDevicePage.prototype.save = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Validate
                        this.alerts.reset();
                        if (!Object(_shared_helpers_forms__WEBPACK_IMPORTED_MODULE_5__["validateForm"])(this.form))
                            return [2 /*return*/];
                        // Go
                        return [4 /*yield*/, this.startLoading()];
                    case 1:
                        // Go
                        _a.sent();
                        return [4 /*yield*/, this.deviceService.save(this.form.value)
                                .then(function (device) {
                                _this.router.navigate(['device', device.deviceId]);
                                // Notify
                                _this.snackBar.open('Device Added', 'Close', { duration: 3000 });
                            })["catch"](function (error) { return _this.alerts.set('error', error); })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.stopLoading()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddDevicePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _device_service__WEBPACK_IMPORTED_MODULE_7__["DeviceService"] }
    ]; };
    AddDevicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-device',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-device.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/device/add-device/add-device.page.html"))["default"],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-device.page.scss */ "./src/app/device/add-device/add-device.page.scss"))["default"]]
        })
    ], AddDevicePage);
    return AddDevicePage;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/device/device.module.ts":
/*!*****************************************!*\
  !*** ./src/app/device/device.module.ts ***!
  \*****************************************/
/*! exports provided: DeviceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceModule", function() { return DeviceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var _add_device_add_device_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-device/add-device.page */ "./src/app/device/add-device/add-device.page.ts");
/* harmony import */ var _edit_device_edit_device_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-device/edit-device.page */ "./src/app/device/edit-device/edit-device.page.ts");
/* harmony import */ var _view_device_view_device_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-device/view-device.page */ "./src/app/device/view-device/view-device.page.ts");








var DeviceModule = /** @class */ (function () {
    function DeviceModule() {
    }
    DeviceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: 'add',
                        component: _add_device_add_device_page__WEBPACK_IMPORTED_MODULE_5__["AddDevicePage"]
                    },
                    {
                        path: ':deviceId',
                        component: _view_device_view_device_page__WEBPACK_IMPORTED_MODULE_7__["ViewDevicePage"]
                    },
                    {
                        path: ':deviceId/edit',
                        component: _edit_device_edit_device_page__WEBPACK_IMPORTED_MODULE_6__["EditDevicePage"]
                    }
                ])
            ],
            declarations: [
                _add_device_add_device_page__WEBPACK_IMPORTED_MODULE_5__["AddDevicePage"],
                _edit_device_edit_device_page__WEBPACK_IMPORTED_MODULE_6__["EditDevicePage"],
                _view_device_view_device_page__WEBPACK_IMPORTED_MODULE_7__["ViewDevicePage"]
            ]
        })
    ], DeviceModule);
    return DeviceModule;
}());



/***/ }),

/***/ "./src/app/device/edit-device/edit-device.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/device/edit-device/edit-device.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS9lZGl0LWRldmljZS9lZGl0LWRldmljZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/device/edit-device/edit-device.page.ts":
/*!********************************************************!*\
  !*** ./src/app/device/edit-device/edit-device.page.ts ***!
  \********************************************************/
/*! exports provided: EditDevicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDevicePage", function() { return EditDevicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_shared/components/base.component */ "./src/app/_shared/components/base.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _device_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../device.service */ "./src/app/device/device.service.ts");
/* harmony import */ var _models_device_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/device.model */ "./src/app/device/models/device.model.ts");
/* harmony import */ var _shared_helpers_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_shared/helpers/forms */ "./src/app/_shared/helpers/forms.ts");
/* harmony import */ var _shared_components_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_shared/components/dialog/confirmation-dialog.component */ "./src/app/_shared/components/dialog/confirmation-dialog.component.ts");
/* harmony import */ var _room_room_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../room/room.service */ "./src/app/room/room.service.ts");













var EditDevicePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditDevicePage, _super);
    function EditDevicePage(route, router, snackBar, dialog, authService, deviceService, roomService) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.router = router;
        _this.snackBar = snackBar;
        _this.dialog = dialog;
        _this.authService = authService;
        _this.deviceService = deviceService;
        _this.roomService = roomService;
        _this.form = new _models_device_model__WEBPACK_IMPORTED_MODULE_9__["DeviceForm"];
        _this.formOptions = {};
        return _this;
    }
    EditDevicePage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.startLoading()];
                    case 1:
                        _b.sent();
                        _a = this.formOptions;
                        return [4 /*yield*/, this.roomService.list({})["catch"](function (error) { return _this.alerts.set('error', error); })];
                    case 2:
                        _a.rooms = _b.sent();
                        return [4 /*yield*/, this.stopLoading()];
                    case 3:
                        _b.sent();
                        this.route.params.subscribe(function () {
                            _this.refresh();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EditDevicePage.prototype.refresh = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var device;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.alerts.reset();
                        // Go
                        return [4 /*yield*/, this.startLoading()];
                    case 1:
                        // Go
                        _a.sent();
                        return [4 /*yield*/, this.deviceService.get(+this.route.snapshot.params.deviceId)["catch"](function (error) { return _this.alerts.set('error', error); })];
                    case 2:
                        device = _a.sent();
                        if (device) {
                            console.log(device);
                            this.form.reset(device);
                        }
                        return [4 /*yield*/, this.stopLoading()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditDevicePage.prototype["delete"] = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.alerts.reset();
                this.dialog.open(_shared_components_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"], {
                    data: {
                        title: 'Confirm Delete',
                        msg: "Are you sure you want to Delete \"" + this.form.value.name + "\"?",
                        onClose: function (response) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var _this = this;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!response)
                                            return [2 /*return*/];
                                        // Go
                                        return [4 /*yield*/, this.deviceService["delete"](this.form.value.deviceId)
                                                .then(function () { return _this.router.navigate(['/']); })
                                            // Notify
                                        ];
                                    case 1:
                                        // Go
                                        _a.sent();
                                        // Notify
                                        this.snackBar.open('Device Deleted', 'Close', { duration: 3000 });
                                        return [2 /*return*/];
                                }
                            });
                        }); }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    EditDevicePage.prototype.save = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.alerts.reset();
                        if (!Object(_shared_helpers_forms__WEBPACK_IMPORTED_MODULE_10__["validateForm"])(this.form))
                            return [2 /*return*/];
                        // Go
                        return [4 /*yield*/, this.startLoading()];
                    case 1:
                        // Go
                        _a.sent();
                        return [4 /*yield*/, this.deviceService.save(this.form.value)
                                .then(function (device) {
                                // this.form.patchValue(device);
                                _this.router.navigate(['/device', _this.route.snapshot.params.deviceId]);
                                // Notify
                                _this.snackBar.open('Device Saved', 'Close', { duration: 3000 });
                            })["catch"](function (error) { return _this.alerts.set('error', error); })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.stopLoading()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // TODO: Make generic
    EditDevicePage.prototype.compareFn = function (a, b) {
        var property = 'roomId'; // Usually an Input within wrapping component
        if (!a || !b || !Object(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"])(a, property) || !Object(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"])(b, property))
            return false;
        return Object(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"])(a, property) === Object(lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"])(b, property);
    };
    EditDevicePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _device_service__WEBPACK_IMPORTED_MODULE_8__["DeviceService"] },
        { type: _room_room_service__WEBPACK_IMPORTED_MODULE_12__["RoomService"] }
    ]; };
    EditDevicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-device',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-device.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/device/edit-device/edit-device.page.html"))["default"],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-device.page.scss */ "./src/app/device/edit-device/edit-device.page.scss"))["default"]]
        })
    ], EditDevicePage);
    return EditDevicePage;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ "./src/app/device/view-device/view-device.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/device/view-device/view-device.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host::ng-deep .player {\n  position: relative;\n  background-color: var(--dark);\n}\n:host::ng-deep .player iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2aWNlL3ZpZXctZGV2aWNlL0M6XFxVc2Vyc1xcTWlrZVxcV29ya1xcU2NyYXBcXEhhcnZlc3RDaGFsbGVuZ2Uvc3JjXFxhcHBcXGRldmljZVxcdmlldy1kZXZpY2VcXHZpZXctZGV2aWNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGV2aWNlL3ZpZXctZGV2aWNlL3ZpZXctZGV2aWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7QUNBUjtBREVRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQVoiLCJmaWxlIjoic3JjL2FwcC9kZXZpY2Uvdmlldy1kZXZpY2Uvdmlldy1kZXZpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Q6Om5nLWRlZXAge1xyXG4gICAgLnBsYXllciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xyXG5cclxuICAgICAgICBpZnJhbWUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCI6aG9zdDo6bmctZGVlcCAucGxheWVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcbn1cbjpob3N0OjpuZy1kZWVwIC5wbGF5ZXIgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/device/view-device/view-device.page.ts":
/*!********************************************************!*\
  !*** ./src/app/device/view-device/view-device.page.ts ***!
  \********************************************************/
/*! exports provided: ViewDevicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDevicePage", function() { return ViewDevicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_shared/components/base.component */ "./src/app/_shared/components/base.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _device_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../device.service */ "./src/app/device/device.service.ts");
/* harmony import */ var _models_device_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/device.model */ "./src/app/device/models/device.model.ts");







var ViewDevicePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ViewDevicePage, _super);
    function ViewDevicePage(route, authService, deviceService) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.authService = authService;
        _this.deviceService = deviceService;
        _this.form = new _models_device_model__WEBPACK_IMPORTED_MODULE_6__["DeviceForm"];
        return _this;
    }
    ViewDevicePage.prototype.ngOnInit = function () {
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
    ViewDevicePage.prototype.refresh = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var device;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.alerts.reset();
                        // Go
                        return [4 /*yield*/, this.startLoading()];
                    case 1:
                        // Go
                        _a.sent();
                        return [4 /*yield*/, this.deviceService.get(+this.route.snapshot.params.deviceId)["catch"](function (error) { return _this.alerts.set('error', error); })];
                    case 2:
                        device = _a.sent();
                        if (device) {
                            console.log(device);
                            this.form.reset(device);
                        }
                        return [4 /*yield*/, this.stopLoading()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewDevicePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _device_service__WEBPACK_IMPORTED_MODULE_5__["DeviceService"] }
    ]; };
    ViewDevicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-device',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-device.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/device/view-device/view-device.page.html"))["default"],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-device.page.scss */ "./src/app/device/view-device/view-device.page.scss"))["default"]]
        })
    ], ViewDevicePage);
    return ViewDevicePage;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=device-device-module.js.map