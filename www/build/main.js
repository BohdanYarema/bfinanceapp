webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_form__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accounting_accounting__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.items = [];
        this.item = navParams.data.item;
    }
    ListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.showLoader();
        this.authService.accounting(this.item.id).then(function (result) {
            _this.data = result;
            for (var variable in _this.data) {
                var date = new Date(parseInt(variable) * 1000);
                var curr_date = date.getDate();
                var curr_month = date.getMonth() + 1;
                var curr_year = date.getFullYear();
                var test = (curr_date + "-" + curr_month + "-" + curr_year);
                _this.items.push([
                    test, _this.data[variable]
                ]);
            }
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    ListPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Serching...'
        });
        this.loading.present();
    };
    ListPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ListPage.prototype.goForm = function (category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__form_form__["a" /* FormPage */], {
            category: category
        });
    };
    ListPage.prototype.itemSelected = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__accounting_accounting__["a" /* AccountingPage */], {
            item: item
        });
    };
    ListPage.prototype.itemDelete = function (item) {
        var _this = this;
        this.authService.deleteAccounting(item).then(function (result) {
            _this.data = result;
            _this.loading.dismiss();
            _this.navCtrl.push(ListPage_1, {
                item: _this.item
            });
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/Bogdanek/bfinanceapp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n        {{item.name}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="main_content">\n    <div class="list" ion-item *ngFor="let item of items">\n        <ion-item-group>\n          <ion-item-divider color="light">{{ item[0] }}</ion-item-divider>\n          <div ion-item *ngFor="let data of item[1]">\n            <ion-item>\n              <p (click)="itemSelected(data)" item-start>{{ data.name }}</p>\n              <p (click)="itemSelected(data)" item-end>{{ data.price }} uah</p>\n              <button item-end dark clear ion-button (click)="itemDelete(data)" icon-only>\n                <ion-icon name=\'trash\'></ion-icon>\n              </button>\n            </ion-item>\n            <!-- Only icon (no text) -->\n          </div>\n        </ion-item-group>\n    </div>\n</ion-content>\n\n<button class="btn_float_right" (click)="goForm(item)" ion-button color="secondary" round>\n  <ion-icon name="add"></ion-icon>\n</button>'/*ion-inline-end:"/Users/Bogdanek/bfinanceapp/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, authService, loadingCtrl, toastCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        // formbuilder for form
        this.loginGroup = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.username = this.loginGroup.controls['username'];
        this.password = this.loginGroup.controls['password'];
    }
    LoginPage.prototype.doLogin = function (data) {
        var _this = this;
        this.showLoader();
        this.authService.login(data).then(function (result) {
            _this.loading.dismiss();
            _this.response = result;
            _this.profile = {
                username: _this.response.username,
                email: _this.response.email,
                avatar: _this.response.avatar,
                firstname: _this.response.firstname,
                lastname: _this.response.lastname,
                middlename: _this.response.middlename,
                gender: _this.response.gender,
                created_at: _this.response.created_at
            };
            localStorage.setItem('token', _this.response.access_token);
            localStorage.setItem('profile', JSON.stringify(_this.profile));
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/Bogdanek/bfinanceapp/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <form [formGroup]="loginGroup" (ngSubmit)="doLogin(loginGroup.value)">\n    <ion-list id="login-list1">\n      <ion-item class="login-input">\n        <ion-label>\n          Username\n        </ion-label>\n        <ion-input formControlName="username" name="username" type="text" placeholder="Your username" ></ion-input>\n      </ion-item>\n      <ion-item class="login-input">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input formControlName="password" name="password" type="password" placeholder="Your password"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <button id="login-button1" type="submit" [disabled]="!loginGroup.valid" ion-button color="stable" block>\n      Log in\n    </button>\n    <button id="login-button2" ion-button clear color="positive" block (click)="register()">\n      Or create an account\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/Bogdanek/bfinanceapp/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoriesPage = (function () {
    function CategoriesPage(navCtrl, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    CategoriesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.showLoader();
        this.authService.category().then(function (result) {
            _this.data = result;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    CategoriesPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Serching...'
        });
        this.loading.present();
    };
    CategoriesPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    CategoriesPage.prototype.itemSelected = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */], {
            item: item
        });
    };
    return CategoriesPage;
}());
CategoriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-categories',template:/*ion-inline-start:"/Users/Bogdanek/bfinanceapp/src/pages/categories/categories.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Category\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page">\n  <ion-list id="category-list" ion-item *ngFor="let item of data" (click)="itemSelected(item)">\n    <ion-item color="none" id="category-list-item1">\n        {{ item.name }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Bogdanek/bfinanceapp/src/pages/categories/categories.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], CategoriesPage);

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_custom__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { Diagnostic } from '@ionic-native/diagnostic';
var FormPage = (function () {
    function FormPage(navCtrl, navParams, http, formBuilder, geolocation, platform, authService, loadingCtrl, toastCtrl
        //private diagnostic: Diagnostic
    ) {
        // let successCallback = (isAvailable) => { alert('Is available? ' + isAvailable); };
        // let errorCallback = (e) => alert(e);
        // this.diagnostic.isGpsLocationEnabled().then(successCallback, errorCallback);
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.formBuilder = formBuilder;
        this.geolocation = geolocation;
        this.platform = platform;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.gps_x = 0;
        this.gps_y = 0;
        // data from category page
        this.navCtrl = navCtrl;
        this.category = navParams.data.category;
        this.category_id = navParams.data.category.id;
        // formbuilder for form
        this.addGroup = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            price: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_6__validators_custom__["a" /* CustomValidators */].negativeNumber,
                ])],
            dates: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        this.name = this.addGroup.controls['name'];
        this.price = this.addGroup.controls['price'];
        this.dates = this.addGroup.controls['dates'];
        // init getting gps coords from native plugin
        //this.showLoader("Catching you gps coords");
        platform.ready().then(function () {
            geolocation.getCurrentPosition().then(function (location) {
                _this.presentToast("Your coordinate are catching, we are watching you!");
                _this.gps_x = location.coords.latitude;
                _this.gps_y = location.coords.longitude;
            }).catch(function (error) {
                _this.presentToast("Your disallow gps tracking i aour app");
                _this.gps_x = null;
                _this.gps_y = null;
            });
        });
    }
    // sending form data function
    FormPage.prototype.doAddAcccounting = function (data) {
        var _this = this;
        this.showLoader("Sending data ...");
        data.category_id = this.category_id;
        data.gps_x = this.gps_x;
        data.gps_y = this.gps_y;
        this.authService.addAccounting(data).then(function (result) {
            _this.loading.dismiss();
            _this.response = result;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */], {
                item: _this.category
            });
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    // loader show function
    FormPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    // toast function
    FormPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    return FormPage;
}());
FormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-form',template:/*ion-inline-start:"/Users/Bogdanek/bfinanceapp/src/pages/form/form.html"*/'<ion-content padding>\n<h2>Add Accounting</h2>\n<form [formGroup]="addGroup" (ngSubmit)="doAddAcccounting(addGroup.value)">\n    <ion-item>\n        <ion-input formControlName="name" name="name" type="text" placeholder="name" ></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-input formControlName="price" name="price" type="number" placeholder="price" ></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-datetime displayFormat="MMM/DD/YYYY" formControlName="dates" name="dates" placeholder="dates"></ion-datetime>\n    </ion-item>\n    \n    <button ion-button block type="submit" [disabled]="!addGroup.valid">\n        Add\n    </button>\n</form>\n</ion-content>'/*ion-inline-end:"/Users/Bogdanek/bfinanceapp/src/pages/form/form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]
        //private diagnostic: Diagnostic
    ])
], FormPage);

//# sourceMappingURL=form.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountingPage = (function () {
    function AccountingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = navParams.data.item;
        var date = new Date(parseInt(this.item.dates) * 1000);
        var curr_date = date.getDate();
        var curr_month = date.getMonth() + 1;
        var curr_year = date.getFullYear();
        var result = (curr_date + "-" + curr_month + "-" + curr_year);
        this.item.dates = result;
    }
    AccountingPage.prototype.ionViewDidLoad = function () {
        if (this.item.gps_x !== null || this.item.gps_y !== null) {
            this.loadmap(this.item.gps_x, this.item.gps_y, this.item.name);
        }
    };
    AccountingPage.prototype.loadmap = function (x, y, title) {
        var mapOprions = {
            center: {
                lat: parseFloat(x),
                lng: parseFloat(y)
            },
            zoom: 12,
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOprions);
        this.addMarker(parseFloat(x), parseFloat(y), title);
    };
    AccountingPage.prototype.addMarker = function (x, y, title) {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.Drop,
            position: {
                lat: x,
                lng: y
            },
            icon: {
                url: 'assets/imgs/map.png',
            }
        });
        var content = title;
        this.addInfoWidnow(marker, content);
    };
    AccountingPage.prototype.addInfoWidnow = function (marker, content) {
        var infowindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(this.map, marker);
        });
    };
    return AccountingPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("map"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], AccountingPage.prototype, "mapElement", void 0);
AccountingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-accounting',template:/*ion-inline-start:"/Users/Bogdanek/bfinanceapp/src/pages/accounting/accounting.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{ item.name }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <ion-list>\n      <ion-item id="item-list-item-container16">\n        <div id="item-markdown18" class="show-list-numbers-and-dots">\n          <p>\n            {{ item.name }} {{ item.dates }}\n          </p>\n        </div>\n      </ion-item>\n      <div style="width:100%;height:350px;" #map id="map">\n          <ion-img style="width: 100%; height:350px;" src="assets/imgs/squirrel.png"></ion-img>    \n      </div>\n      <ion-item>\n        <ion-icon name="basket" item-left></ion-icon>\n        {{ item.price }} uah\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/Bogdanek/bfinanceapp/src/pages/accounting/accounting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AccountingPage);

//# sourceMappingURL=accounting.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapPage = (function () {
    function MapPage(navCtrl, navParams, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.showLoader();
        this.authService.maps().then(function (result) {
            _this.reponse = result;
            if (_this.reponse.length >= 1) {
                _this.loadmap(_this.reponse);
            }
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    MapPage.prototype.loadmap = function (data) {
        var mapOprions = {
            center: {
                lat: parseFloat(data[0].gps_x),
                lng: parseFloat(data[0].gps_y)
            },
            zoom: 12,
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOprions);
        for (var i = 0; i < data.length; i++) {
            var element = data[i];
            this.addMarker(parseFloat(element.gps_x), parseFloat(element.gps_y), element["Count(id)"]);
        }
    };
    MapPage.prototype.addMarker = function (x, y, title) {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.Drop,
            position: {
                lat: x,
                lng: y
            },
            icon: {
                url: 'assets/imgs/map.png',
            }
        });
        var content = title;
        this.addInfoWidnow(marker, content);
    };
    MapPage.prototype.addInfoWidnow = function (marker, content) {
        var infowindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(this.map, marker);
        });
    };
    MapPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading map...'
        });
        this.loading.present();
    };
    MapPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    return MapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("map"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MapPage.prototype, "mapElement", void 0);
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"/Users/Bogdanek/bfinanceapp/src/pages/map/map.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Map\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding>\n  <div #map id="map">\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Bogdanek/bfinanceapp/src/pages/map/map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_edit__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, loadingCtrl, toastCtrl, app) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.profile = JSON.parse(localStorage.getItem('profile'));
        console.log('1');
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
    };
    ProfilePage.prototype.logout = function () {
        localStorage.clear();
        this.showLoader();
        localStorage.clear();
        this.loading.dismiss();
        var nav = this.app.getRootNav();
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ProfilePage.prototype.goEdit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_edit__["a" /* EditPage */]);
    };
    ProfilePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    ProfilePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/Bogdanek/bfinanceapp/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  <ion-card id="profile-card26">\n    <ion-list>\n      <ion-item color="none" id="profile-list-item53">\n        <h2>{{this.profile.username}}</h2>\n        <button item-right ion-button clear (click)="goEdit()">\n          <ion-icon ios="ios-create" md="md-create"></ion-icon>\n        </button>\n        <button item-right ion-button clear (click)="logout()">\n          <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-item>\n      <img src="{{this.profile.avatar}}">\n      <ion-item id="profile-list-item-container14">\n        <div id="profile-markdown16" class="show-list-numbers-and-dots">\n          <p style="margin-top:0px;color:#000000;">\n            <strong>\n              Email\n            </strong> :\n            {{this.profile.email}}\n          </p>\n          <p style="margin-top:10px;color:#000000;">\n            <strong>\n              Firstname\n            </strong> :\n            {{this.profile.firstname}}\n          </p>\n          <p style="margin-top:10px;color:#000000;">\n            <strong>\n              Lastname\n            </strong> :\n            {{this.profile.lastname}}\n          </p>\n          <p style="margin-top:10px;color:#000000;">\n            <strong>\n              Middlename\n            </strong> :\n            {{this.profile.middilename}}\n          </p>\n          <p style="margin-top:10px;color:#000000;">\n            <strong>\n              Create_at\n            </strong> :\n            {{this.profile.created_at}}\n          </p>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Bogdanek/bfinanceapp/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _d || Object])
], ProfilePage);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, authService, loadingCtrl, toastCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        // formbuilder for form
        this.singupGroup = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(255)
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6),
                ])],
        });
        this.username = this.singupGroup.controls['username'];
        this.email = this.singupGroup.controls['email'];
        this.password = this.singupGroup.controls['password'];
    }
    RegisterPage.prototype.doSignup = function (data) {
        var _this = this;
        this.showLoader();
        this.authService.register(data).then(function (result) {
            _this.loading.dismiss();
            _this.response = result;
            _this.profile = {
                username: _this.response.username,
                email: _this.response.email,
                avatar: _this.response.avatar,
                firstname: _this.response.firstname,
                lastname: _this.response.lastname,
                middlename: _this.response.middlename,
                gender: _this.response.gender,
                created_at: _this.response.created_at
            };
            localStorage.setItem('token', _this.response.access_token);
            localStorage.setItem('profile', JSON.stringify(_this.profile));
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    RegisterPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Sending data...'
        });
        this.loading.present();
    };
    RegisterPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/Bogdanek/bfinanceapp/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Signup\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <form [formGroup]="singupGroup" (ngSubmit)="doSignup(singupGroup.value)">\n    <ion-list id="signup-list2">\n      <ion-item class="signup-input">\n        <ion-label>\n          Username\n        </ion-label>\n        <ion-input formControlName="username" name="username" type="text" placeholder="Your username"></ion-input>\n      </ion-item>\n      <ion-item class="signup-input">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input formControlName="email" name="email" type="text" placeholder="Your email"></ion-input>\n      </ion-item>\n      <ion-item class="signup-input">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input formControlName="password" name="password" type="password" placeholder="Your password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button id="signup-button3" ion-button color="stable" block type="submit" [disabled]="!singupGroup.valid">\n      Sign up\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/Bogdanek/bfinanceapp/src/pages/register/register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPage = (function () {
    function EditPage(navCtrl, camera, loadingCtrl, toastCtrl, transfer) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.transfer = transfer;
    }
    EditPage.prototype.ionViewDidLoad = function () {
    };
    EditPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
            console.log(_this.imageURI);
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    EditPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    EditPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    EditPage.prototype.uploadFile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        //loader.present();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        };
        fileTransfer.upload(this.imageURI, 'http://devservice.pro/api/upload/upload', options)
            .then(function (data) {
            _this.response = JSON.parse(data.response);
            _this.profile = JSON.parse(localStorage.getItem('profile'));
            _this.profile.avatar = _this.response.image;
            localStorage.setItem('profile', JSON.stringify(_this.profile));
            _this.imageFileName = _this.response.image;
            loader.dismiss();
            _this.presentToast("Image uploaded successfully");
        }, function (err) {
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    return EditPage;
}());
EditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit',template:/*ion-inline-start:"/Users/Bogdanek/bfinanceapp/src/pages/edit/edit.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Profile\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n        <br><br><br><br>\n<ion-item>\n    <p>{{imageURI}}</p>\n    <button ion-button color="secondary" (click)="getImage()">Get Image</button>\n</ion-item>\n<ion-item>\n    <h4>Image Preview</h4>\n    <img src="{{imageFileName}}" *ngIf="imageFileName" alt="Ionic File" width="300" />\n</ion-item>\n<ion-item>\n    <button ion-button (click)="uploadFile()">Upload</button>\n</ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/Bogdanek/bfinanceapp/src/pages/edit/edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */]])
], EditPage);

//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChartsPage = (function () {
    function ChartsPage(navCtrl, navParams, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    ChartsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad HomePage');
        this.showLoader();
        this.authService.charts().then(function (result) {
            _this.reponse = result;
            var doughnut = _this.reponse.doughnut;
            var bar = _this.reponse.bar;
            var line = _this.reponse.line;
            _this.setCharts("doughnut", doughnut);
            _this.setCharts("bar", bar);
            _this.setCharts("line", line);
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    ChartsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Serching...'
        });
        this.loading.present();
    };
    ChartsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ChartsPage.prototype.setCharts = function (type, data) {
        var element;
        var i;
        var collection;
        switch (type) {
            case 'line':
                collection = {
                    "label": [],
                    "data": []
                };
                for (element in data) {
                    collection.label.push(data[element].name);
                    collection.data.push(data[element].count);
                }
                this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement, {
                    type: 'line',
                    data: {
                        labels: collection.label,
                        datasets: [
                            {
                                label: "Count of accounting per month",
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: "#00ffff",
                                borderColor: "#00ffff",
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: "#0000ff",
                                pointBackgroundColor: "#fff",
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "#0000ff",
                                pointHoverBorderColor: "#0000ff",
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: collection.data,
                                spanGaps: false,
                            }
                        ]
                    }
                });
                break;
            case 'bar':
                collection = {
                    "label": [],
                    "data": [],
                    "color": []
                };
                for (i = 0; i < data.length; i++) {
                    element = data[i];
                    collection.label.push(element.category.name);
                    collection.data.push(parseInt(element.hour));
                    collection.color.push(element.category.color);
                }
                this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: collection.label,
                        datasets: [{
                                label: 'Most popular time to buy per category',
                                data: collection.data,
                                backgroundColor: collection.color,
                                borderWidth: 1
                            }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                        }
                    }
                });
                break;
            case 'doughnut':
                collection = {
                    "label": [],
                    "data": [],
                    "color": []
                };
                for (i = 0; i < data.length; i++) {
                    element = data[i];
                    collection.label.push(element.name);
                    collection.data.push(element.accountings.length);
                    collection.color.push(element.color);
                }
                this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
                    type: 'doughnut',
                    data: {
                        labels: collection.label,
                        datasets: [{
                                label: 'Count of by per category',
                                data: collection.data,
                                backgroundColor: collection.color,
                            }]
                    }
                });
                break;
        }
    };
    return ChartsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('barCanvas'),
    __metadata("design:type", Object)
], ChartsPage.prototype, "barCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('doughnutCanvas'),
    __metadata("design:type", Object)
], ChartsPage.prototype, "doughnutCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('lineCanvas'),
    __metadata("design:type", Object)
], ChartsPage.prototype, "lineCanvas", void 0);
ChartsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-charts',template:/*ion-inline-start:"/Users/Bogdanek/bfinanceapp/src/pages/charts/charts.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Charts\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Doughnut Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #doughnutCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n    <ion-card-header>\n      Bar Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Line Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #lineCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/Bogdanek/bfinanceapp/src/pages/charts/charts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], ChartsPage);

//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'http://devservice.pro/api/';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http) {
        this.http = http;
    }
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(apiUrl + 'auth/login', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.register = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(apiUrl + 'auth/signup', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.category = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', 'Bearer ' + localStorage.getItem("token"));
            _this.http.get(apiUrl + 'category/index', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.accounting = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', 'Bearer ' + localStorage.getItem("token"));
            _this.http.get(apiUrl + 'accounting/list?id=' + id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.charts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', 'Bearer ' + localStorage.getItem("token"));
            _this.http.get(apiUrl + 'accounting/index', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.maps = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', 'Bearer ' + localStorage.getItem("token"));
            _this.http.get(apiUrl + 'accounting/map', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.addAccounting = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', 'Bearer ' + localStorage.getItem("token"));
            _this.http.post(apiUrl + 'accounting/create', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.deleteAccounting = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', 'Bearer ' + localStorage.getItem("token"));
            _this.http.post(apiUrl + 'accounting/delete?id=' + data.id, JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_categories_categories__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_form_form__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_accounting_accounting__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_map_map__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_charts_charts__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_edit_edit__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_diagnostic__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_transfer__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_file__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_google_maps__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_categories_categories__["a" /* CategoriesPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_form_form__["a" /* FormPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_accounting_accounting__["a" /* AccountingPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_charts_charts__["a" /* ChartsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_edit_edit__["a" /* EditPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_23__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_categories_categories__["a" /* CategoriesPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_form_form__["a" /* FormPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_accounting_accounting__["a" /* AccountingPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_charts_charts__["a" /* ChartsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_edit_edit__["a" /* EditPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_17__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_transfer__["b" /* FileTransferObject */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["a" /* Camera */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';


var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = null;
        if (!localStorage.getItem("token")) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        }
        platform.ready().then(function () {
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Bogdanek/bfinanceapp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Bogdanek/bfinanceapp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _a || Object])
], MyApp);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomValidators; });
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.negativeNumber = function (control) {
        var valid = parseFloat(control.value);
        if (valid < 0) {
            return {
                negativeNumber: {
                    valid: false
                }
            };
        }
    };
    return CustomValidators;
}());

//# sourceMappingURL=custom.js.map

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 218,
	"./af.js": 218,
	"./ar": 219,
	"./ar-dz": 220,
	"./ar-dz.js": 220,
	"./ar-kw": 221,
	"./ar-kw.js": 221,
	"./ar-ly": 222,
	"./ar-ly.js": 222,
	"./ar-ma": 223,
	"./ar-ma.js": 223,
	"./ar-sa": 224,
	"./ar-sa.js": 224,
	"./ar-tn": 225,
	"./ar-tn.js": 225,
	"./ar.js": 219,
	"./az": 226,
	"./az.js": 226,
	"./be": 227,
	"./be.js": 227,
	"./bg": 228,
	"./bg.js": 228,
	"./bn": 229,
	"./bn.js": 229,
	"./bo": 230,
	"./bo.js": 230,
	"./br": 231,
	"./br.js": 231,
	"./bs": 232,
	"./bs.js": 232,
	"./ca": 233,
	"./ca.js": 233,
	"./cs": 234,
	"./cs.js": 234,
	"./cv": 235,
	"./cv.js": 235,
	"./cy": 236,
	"./cy.js": 236,
	"./da": 237,
	"./da.js": 237,
	"./de": 238,
	"./de-at": 239,
	"./de-at.js": 239,
	"./de-ch": 240,
	"./de-ch.js": 240,
	"./de.js": 238,
	"./dv": 241,
	"./dv.js": 241,
	"./el": 242,
	"./el.js": 242,
	"./en-au": 243,
	"./en-au.js": 243,
	"./en-ca": 244,
	"./en-ca.js": 244,
	"./en-gb": 245,
	"./en-gb.js": 245,
	"./en-ie": 246,
	"./en-ie.js": 246,
	"./en-nz": 247,
	"./en-nz.js": 247,
	"./eo": 248,
	"./eo.js": 248,
	"./es": 249,
	"./es-do": 250,
	"./es-do.js": 250,
	"./es.js": 249,
	"./et": 251,
	"./et.js": 251,
	"./eu": 252,
	"./eu.js": 252,
	"./fa": 253,
	"./fa.js": 253,
	"./fi": 254,
	"./fi.js": 254,
	"./fo": 255,
	"./fo.js": 255,
	"./fr": 256,
	"./fr-ca": 257,
	"./fr-ca.js": 257,
	"./fr-ch": 258,
	"./fr-ch.js": 258,
	"./fr.js": 256,
	"./fy": 259,
	"./fy.js": 259,
	"./gd": 260,
	"./gd.js": 260,
	"./gl": 261,
	"./gl.js": 261,
	"./gom-latn": 262,
	"./gom-latn.js": 262,
	"./he": 263,
	"./he.js": 263,
	"./hi": 264,
	"./hi.js": 264,
	"./hr": 265,
	"./hr.js": 265,
	"./hu": 266,
	"./hu.js": 266,
	"./hy-am": 267,
	"./hy-am.js": 267,
	"./id": 268,
	"./id.js": 268,
	"./is": 269,
	"./is.js": 269,
	"./it": 270,
	"./it.js": 270,
	"./ja": 271,
	"./ja.js": 271,
	"./jv": 272,
	"./jv.js": 272,
	"./ka": 273,
	"./ka.js": 273,
	"./kk": 274,
	"./kk.js": 274,
	"./km": 275,
	"./km.js": 275,
	"./kn": 276,
	"./kn.js": 276,
	"./ko": 277,
	"./ko.js": 277,
	"./ky": 278,
	"./ky.js": 278,
	"./lb": 279,
	"./lb.js": 279,
	"./lo": 280,
	"./lo.js": 280,
	"./lt": 281,
	"./lt.js": 281,
	"./lv": 282,
	"./lv.js": 282,
	"./me": 283,
	"./me.js": 283,
	"./mi": 284,
	"./mi.js": 284,
	"./mk": 285,
	"./mk.js": 285,
	"./ml": 286,
	"./ml.js": 286,
	"./mr": 287,
	"./mr.js": 287,
	"./ms": 288,
	"./ms-my": 289,
	"./ms-my.js": 289,
	"./ms.js": 288,
	"./my": 290,
	"./my.js": 290,
	"./nb": 291,
	"./nb.js": 291,
	"./ne": 292,
	"./ne.js": 292,
	"./nl": 293,
	"./nl-be": 294,
	"./nl-be.js": 294,
	"./nl.js": 293,
	"./nn": 295,
	"./nn.js": 295,
	"./pa-in": 296,
	"./pa-in.js": 296,
	"./pl": 297,
	"./pl.js": 297,
	"./pt": 298,
	"./pt-br": 299,
	"./pt-br.js": 299,
	"./pt.js": 298,
	"./ro": 300,
	"./ro.js": 300,
	"./ru": 301,
	"./ru.js": 301,
	"./sd": 302,
	"./sd.js": 302,
	"./se": 303,
	"./se.js": 303,
	"./si": 304,
	"./si.js": 304,
	"./sk": 305,
	"./sk.js": 305,
	"./sl": 306,
	"./sl.js": 306,
	"./sq": 307,
	"./sq.js": 307,
	"./sr": 308,
	"./sr-cyrl": 309,
	"./sr-cyrl.js": 309,
	"./sr.js": 308,
	"./ss": 310,
	"./ss.js": 310,
	"./sv": 311,
	"./sv.js": 311,
	"./sw": 312,
	"./sw.js": 312,
	"./ta": 313,
	"./ta.js": 313,
	"./te": 314,
	"./te.js": 314,
	"./tet": 315,
	"./tet.js": 315,
	"./th": 316,
	"./th.js": 316,
	"./tl-ph": 317,
	"./tl-ph.js": 317,
	"./tlh": 318,
	"./tlh.js": 318,
	"./tr": 319,
	"./tr.js": 319,
	"./tzl": 320,
	"./tzl.js": 320,
	"./tzm": 321,
	"./tzm-latn": 322,
	"./tzm-latn.js": 322,
	"./tzm.js": 321,
	"./uk": 323,
	"./uk.js": 323,
	"./ur": 324,
	"./ur.js": 324,
	"./uz": 325,
	"./uz-latn": 326,
	"./uz-latn.js": 326,
	"./uz.js": 325,
	"./vi": 327,
	"./vi.js": 327,
	"./x-pseudo": 328,
	"./x-pseudo.js": 328,
	"./yo": 329,
	"./yo.js": 329,
	"./zh-cn": 330,
	"./zh-cn.js": 330,
	"./zh-hk": 331,
	"./zh-hk.js": 331,
	"./zh-tw": 332,
	"./zh-tw.js": 332
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 433;

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories_categories__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__charts_charts__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, navParams, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.goToCharts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__charts_charts__["a" /* ChartsPage */]);
    };
    HomePage.prototype.goToCategory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__categories_categories__["a" /* CategoriesPage */]);
    };
    HomePage.prototype.goToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__map_map__["a" /* MapPage */]);
    };
    HomePage.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
    };
    HomePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    HomePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('barCanvas'),
    __metadata("design:type", Object)
], HomePage.prototype, "barCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('doughnutCanvas'),
    __metadata("design:type", Object)
], HomePage.prototype, "doughnutCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('lineCanvas'),
    __metadata("design:type", Object)
], HomePage.prototype, "lineCanvas", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Bogdanek/bfinanceapp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1">\n  <ion-list id="home-list11">\n    <ion-item color="none" on-click="goToCharts()" id="home-list-item47">\n      <ion-thumbnail item-left>\n        <img src="assets/img/QmnR3sRpSgzv8qEb3rdw_charts.png" />\n      </ion-thumbnail>\n      <h2>\n        Charts\n      </h2>\n    </ion-item>\n    <ion-item color="none" on-click="goToCategory()" id="home-list-item48">\n      <ion-thumbnail item-left>\n        <img src="assets/img/lkkeOZkLTUK15GPs3apS_category.png" />\n      </ion-thumbnail>\n      <h2>\n        Category\n      </h2>\n    </ion-item>\n    <ion-item color="none" on-click="goToMap()" id="home-list-item49">\n      <ion-thumbnail item-left>\n        <img src="assets/img/76Szzj9VSg6LYQRvi6jV_map.png" />\n      </ion-thumbnail>\n      <h2>\n        Map\n      </h2>\n    </ion-item>\n    <ion-item color="none" on-click="goToProfile()" id="home-list-item50">\n      <ion-thumbnail item-left>\n        <img src="assets/img/opvUfGcAQeqO5xDc4tmQ_user.png" />\n      </ion-thumbnail>\n      <h2>\n        Profile\n      </h2>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Bogdanek/bfinanceapp/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[333]);
//# sourceMappingURL=main.js.map