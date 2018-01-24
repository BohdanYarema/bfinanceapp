webpackJsonp([1],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(23);
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
        selector: 'page-categories',template:/*ion-inline-start:"/Users/bohdan/bfinanceapp/src/pages/categories/categories.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n        Category\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding id="page">\n  <ion-list id="category-list" ion-item *ngFor="let item of data" (click)="itemSelected(item)">\n    <ion-item color="none" id="category-list-item1">\n        {{ item.name }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/bohdan/bfinanceapp/src/pages/categories/categories.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], CategoriesPage);

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_form__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accounting_accounting__ = __webpack_require__(211);
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
        selector: 'page-list',template:/*ion-inline-start:"/Users/bohdan/bfinanceapp/src/pages/list/list.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n        {{item.name}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="main_content">\n    <div class="list" ion-item *ngFor="let item of items">\n        <ion-item-group>\n          <ion-item-divider color="light">{{ item[0] }}</ion-item-divider>\n          <div ion-item *ngFor="let data of item[1]">\n            <ion-item>\n              <p (click)="itemSelected(data)" item-start>{{ data.name }}</p>\n              <p (click)="itemSelected(data)" item-end>{{ data.price }} uah</p>\n              <button item-end dark clear ion-button (click)="itemDelete(data)" icon-only>\n                <ion-icon name=\'trash\'></ion-icon>\n              </button>\n            </ion-item>\n            <!-- Only icon (no text) -->\n          </div>\n        </ion-item-group>\n    </div>\n</ion-content>\n\n<button class="btn_float_right" (click)="goForm(item)" ion-button color="secondary" round>\n  <ion-icon name="add"></ion-icon>\n</button>\n'/*ion-inline-end:"/Users/bohdan/bfinanceapp/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(23);
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
        selector: 'page-map',template:/*ion-inline-start:"/Users/bohdan/bfinanceapp/src/pages/map/map.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Map\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding>\n  <div #map id="map">\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/bohdan/bfinanceapp/src/pages/map/map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(212);
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
        selector: 'page-login',template:/*ion-inline-start:"/Users/bohdan/bfinanceapp/src/pages/login/login.html"*/'<div class="login">\n  <div class="login__bg">\n      <div>\n        <img class="login__image" src="assets/img/login-bg.png">\n      </div>\n    <img class="login__icon" src="assets/img/mark.png">\n  </div>\n  \n  <form class="login__form" [formGroup]="loginGroup" (ngSubmit)="doLogin(loginGroup.value)">\n    <div class="login__form__elements">\n        <label class="login__form__elements--label">Username</label>\n        <input class="login__form__elements--label" formControlName="username" name="username" type="text" placeholder="Your username">\n    </div>\n    <div class="login__form__elements">\n        <label class="login__form__elements--label">Password</label>\n        <input class="login__form__elements--label" formControlName="password" name="password" type="password" placeholder="Your password">\n    </div>\n    <button class="login__form__elements" id="login-button1" type="submit" [disabled]="!loginGroup.valid" block>Log in</button>\n    <button class="login__form__elements" id="login-button2" block (click)="register()">Or create an account</button>\n  </form>\n</div>\n\n<style>\n  .login{\n    height: 100%;\n  }\n\n  .login__image{\n    height: 24.375rem;\n    width: 100%;\n  }\n\n  .login__bg{\n    position: relative;\n  }\n\n  .login__icon{\n    height: 9.375rem;\n    width: 9.375rem;\n    position: absolute;\n    bottom: -1.40625rem;\n    left: 50%;\n    margin-left: -4.6875rem;\n  }\n\n  .login__form{\n    margin-top: 9.609375rem;\n    height: 100%;\n    text-align: center;\n  }\n\n  .login__form__elements{\n    width: 40rem;\n    height: 6.25rem;\n  }\n\n  .login__form__elements--label{\n    display: block;\n  }\n\n  .login__form__elements--input{\n    display: block;\n  }\n\n\n</style>\n'/*ion-inline-end:"/Users/bohdan/bfinanceapp/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(23);
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
        selector: 'page-charts',template:/*ion-inline-start:"/Users/bohdan/bfinanceapp/src/pages/charts/charts.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n        Charts\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Doughnut Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #doughnutCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Bar Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Line Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #lineCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/bohdan/bfinanceapp/src/pages/charts/charts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], ChartsPage);

//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the StatisticPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatisticPage = (function () {
    function StatisticPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StatisticPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatisticPage');
    };
    return StatisticPage;
}());
StatisticPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-statistic',template:/*ion-inline-start:"/Users/bohdan/bfinanceapp/src/pages/statistic/statistic.html"*/'<!--\n  Generated template for the StatisticPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<div class="login">\n  <div class="login--bg"></div>\n  <span class="login__icon"></span>\n  <form>\n    <input type="text">\n    <input type="text">\n    <button>Sign in</button>\n  </form>\n  <a href="">test</a>\n  <a href="">test</a>\n</div>\n\n\n<style>\n  .login--bg{\n    background-image: url(\'assets/img/login-bg.png\');\n    background-size: cover;\n    background-position: center;\n    height: 32rem;\n  }\n</style>'/*ion-inline-end:"/Users/bohdan/bfinanceapp/src/pages/statistic/statistic.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], StatisticPage);

//# sourceMappingURL=statistic.js.map

/***/ }),

/***/ 125:
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
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/statistic/statistic.module": [
		458,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_custom__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(111);
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
        selector: 'page-form',template:/*ion-inline-start:"/Users/bohdan/bfinanceapp/src/pages/form/form.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n        Add Accounting\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n<form [formGroup]="addGroup" (ngSubmit)="doAddAcccounting(addGroup.value)">\n    <ion-item>\n        <ion-input formControlName="name" name="name" type="text" placeholder="name" ></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-input formControlName="price" name="price" type="number" placeholder="price" ></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-datetime displayFormat="MMM/DD/YYYY" formControlName="dates" name="dates" placeholder="dates"></ion-datetime>\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="!addGroup.valid">\n        Add\n    </button>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/bohdan/bfinanceapp/src/pages/form/form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]
        //private diagnostic: Diagnostic
    ])
], FormPage);

//# sourceMappingURL=form.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        selector: 'page-accounting',template:/*ion-inline-start:"/Users/bohdan/bfinanceapp/src/pages/accounting/accounting.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n        {{ item.name }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <ion-list>\n      <ion-item id="item-list-item-container16">\n        <div id="item-markdown18" class="show-list-numbers-and-dots">\n          <p>\n            {{ item.name }} {{ item.dates }}\n          </p>\n        </div>\n      </ion-item>\n      <div style="width:100%;height:350px;" #map id="map">\n          <ion-img style="width: 100%; height:350px;" src="assets/imgs/squirrel.png"></ion-img>\n      </div>\n      <ion-item>\n        <ion-icon name="basket" item-left></ion-icon>\n        {{ item.price }} uah\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/bohdan/bfinanceapp/src/pages/accounting/accounting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AccountingPage);

//# sourceMappingURL=accounting.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(23);
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
        selector: 'page-register',template:/*ion-inline-start:"/Users/bohdan/bfinanceapp/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Signup\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <form [formGroup]="singupGroup" (ngSubmit)="doSignup(singupGroup.value)">\n    <ion-list id="signup-list2">\n      <ion-item class="signup-input">\n        <ion-label>\n          Username\n        </ion-label>\n        <ion-input formControlName="username" name="username" type="text" placeholder="Your username"></ion-input>\n      </ion-item>\n      <ion-item class="signup-input">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input formControlName="email" name="email" type="text" placeholder="Your email"></ion-input>\n      </ion-item>\n      <ion-item class="signup-input">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input formControlName="password" name="password" type="password" placeholder="Your password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button id="signup-button3" ion-button color="stable" block type="submit" [disabled]="!singupGroup.valid">\n      Sign up\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/bohdan/bfinanceapp/src/pages/register/register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(23);
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
    function EditPage(navCtrl, camera, loadingCtrl, toastCtrl, authService, transfer, formBuilder) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.transfer = transfer;
        this.formBuilder = formBuilder;
        // formbuilder for form
        this.editGroup = formBuilder.group({
            firstname: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(255),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')
                ])],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(255),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')
                ])],
            middlename: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(255),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')
                ])],
            gender: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[0-9]*')
                ])],
        });
        this.firstname = this.editGroup.controls['firstname'];
        this.lastname = this.editGroup.controls['lastname'];
        this.middlename = this.editGroup.controls['middlename'];
        this.gender = this.editGroup.controls['gender'];
    }
    EditPage.prototype.ionViewDidLoad = function () {
    };
    EditPage.prototype.doEdit = function (data) {
        var _this = this;
        this.showLoader();
        this.authService.editProfile(data).then(function (result) {
            _this.loading.dismiss();
            _this.response = result;
            _this.profile = JSON.parse(localStorage.getItem('profile'));
            _this.profile.firstname = _this.response.profile.firstname;
            _this.profile.lastname = _this.response.profile.lastname;
            _this.profile.middlename = _this.response.profile.middlename;
            _this.profile.gender = _this.response.profile.gender;
            localStorage.setItem('profile', JSON.stringify(_this.profile));
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
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
        }, function (err) {
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
        this.profile = JSON.parse(localStorage.getItem('profile'));
        var options = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            params: {
                username: this.profile.username
            }
        };
        fileTransfer.upload(this.imageURI, 'http://devservice.pro/api/upload/upload', options)
            .then(function (data) {
            console.log(JSON.stringify(data));
            _this.response = JSON.parse(data.response);
            _this.profile = JSON.parse(localStorage.getItem('profile'));
            _this.profile.avatar = _this.response.image;
            localStorage.setItem('profile', JSON.stringify(_this.profile));
            loader.dismiss();
            _this.presentToast("Image uploaded successfully");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
        }, function (err) {
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    return EditPage;
}());
EditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit',template:/*ion-inline-start:"/Users/bohdan/bfinanceapp/src/pages/edit/edit.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n        Edit Profile\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n        <button ion-start ion-button color="secondary" (click)="getImage()">Get Image</button>\n        <button ion-end ion-button (click)="uploadFile()">Upload</button>\n    </ion-item>\n    \n    <form [formGroup]="editGroup" (ngSubmit)="doEdit(editGroup.value)">\n        <ion-list>\n            <ion-item class="edit-input">\n                <ion-label>\n                    First name\n                </ion-label>\n                <ion-input formControlName="firstname" name="firstname" type="text" placeholder="Your firstname"></ion-input>\n            </ion-item>\n\n            <ion-item class="edit-input">\n                <ion-label>\n                    Last name\n                </ion-label>\n                <ion-input formControlName="lastname" name="lastname" type="text" placeholder="Your lastname"></ion-input>\n            </ion-item>\n\n            <ion-item class="edit-input">\n                <ion-label>\n                    Middle name\n                </ion-label>\n                <ion-input formControlName="middlename" name="middlename" type="text" placeholder="Your middlename"></ion-input>\n            </ion-item>\n\n            <ion-item class="edit-input">\n                <ion-label>\n                    Gender\n                </ion-label>\n                <ion-input formControlName="gender" name="gender" type="text" placeholder="Your gender"></ion-input>\n            </ion-item>\n          \n        </ion-list>\n        <button ion-button color="stable" block type="submit" [disabled]="!editGroup.valid">\n          Update\n        </button>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/bohdan/bfinanceapp/src/pages/edit/edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
], EditPage);

//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(396);
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
    AuthServiceProvider.prototype.editProfile = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', 'Bearer ' + localStorage.getItem("token"));
            _this.http.post(apiUrl + 'upload/profile', JSON.stringify(data), { headers: headers })
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

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(355);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_categories_categories__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_form_form__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_accounting_accounting__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_map_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_charts_charts__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_edit_edit__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_statistic_statistic__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_diagnostic__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_transfer__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_camera__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_google_maps__ = __webpack_require__(457);
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
            __WEBPACK_IMPORTED_MODULE_14__pages_edit_edit__["a" /* EditPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_statistic_statistic__["a" /* StatisticPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/statistic/statistic.module#StatisticPageModule', name: 'StatisticPage', segment: 'statistic', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_24__angular_http__["c" /* HttpModule */]
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
            __WEBPACK_IMPORTED_MODULE_14__pages_edit_edit__["a" /* EditPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_statistic_statistic__["a" /* StatisticPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_transfer__["b" /* FileTransferObject */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_camera__["a" /* Camera */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_charts_charts__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_categories_categories__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_statistic_statistic__ = __webpack_require__(116);
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
            // platform.registerBackButtonAction(() => {
            //     console.log(this.nav.getActive());
            // });
        });
    }
    MyApp.prototype.gotoProfile = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__["a" /* ProfilePage */]);
    };
    MyApp.prototype.gotoHome = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.gotoCharts = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_charts_charts__["a" /* ChartsPage */]);
    };
    MyApp.prototype.gotoMap = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */]);
    };
    MyApp.prototype.gotoCategories = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_categories_categories__["a" /* CategoriesPage */]);
    };
    MyApp.prototype.gotoStatistic = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_statistic_statistic__["a" /* StatisticPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/bohdan/bfinanceapp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="gotoHome()">\n        Home\n      </button>\n      <button ion-item (click)="gotoProfile()">\n        Profile\n      </button>\n      <button ion-item (click)="gotoCategories()">\n        Categories\n      </button>\n      <button ion-item (click)="gotoCharts()">\n        Charts\n      </button>\n      <button ion-item (click)="gotoMap()">\n        Map\n      </button>\n      <button ion-item (click)="gotoStatistic()">\n        Statistic\n      </button>\n      <button ion-item menuToggle>Toggle Menu</button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/bohdan/bfinanceapp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 404:
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

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 221,
	"./af.js": 221,
	"./ar": 222,
	"./ar-dz": 223,
	"./ar-dz.js": 223,
	"./ar-kw": 224,
	"./ar-kw.js": 224,
	"./ar-ly": 225,
	"./ar-ly.js": 225,
	"./ar-ma": 226,
	"./ar-ma.js": 226,
	"./ar-sa": 227,
	"./ar-sa.js": 227,
	"./ar-tn": 228,
	"./ar-tn.js": 228,
	"./ar.js": 222,
	"./az": 229,
	"./az.js": 229,
	"./be": 230,
	"./be.js": 230,
	"./bg": 231,
	"./bg.js": 231,
	"./bn": 232,
	"./bn.js": 232,
	"./bo": 233,
	"./bo.js": 233,
	"./br": 234,
	"./br.js": 234,
	"./bs": 235,
	"./bs.js": 235,
	"./ca": 236,
	"./ca.js": 236,
	"./cs": 237,
	"./cs.js": 237,
	"./cv": 238,
	"./cv.js": 238,
	"./cy": 239,
	"./cy.js": 239,
	"./da": 240,
	"./da.js": 240,
	"./de": 241,
	"./de-at": 242,
	"./de-at.js": 242,
	"./de-ch": 243,
	"./de-ch.js": 243,
	"./de.js": 241,
	"./dv": 244,
	"./dv.js": 244,
	"./el": 245,
	"./el.js": 245,
	"./en-au": 246,
	"./en-au.js": 246,
	"./en-ca": 247,
	"./en-ca.js": 247,
	"./en-gb": 248,
	"./en-gb.js": 248,
	"./en-ie": 249,
	"./en-ie.js": 249,
	"./en-nz": 250,
	"./en-nz.js": 250,
	"./eo": 251,
	"./eo.js": 251,
	"./es": 252,
	"./es-do": 253,
	"./es-do.js": 253,
	"./es.js": 252,
	"./et": 254,
	"./et.js": 254,
	"./eu": 255,
	"./eu.js": 255,
	"./fa": 256,
	"./fa.js": 256,
	"./fi": 257,
	"./fi.js": 257,
	"./fo": 258,
	"./fo.js": 258,
	"./fr": 259,
	"./fr-ca": 260,
	"./fr-ca.js": 260,
	"./fr-ch": 261,
	"./fr-ch.js": 261,
	"./fr.js": 259,
	"./fy": 262,
	"./fy.js": 262,
	"./gd": 263,
	"./gd.js": 263,
	"./gl": 264,
	"./gl.js": 264,
	"./gom-latn": 265,
	"./gom-latn.js": 265,
	"./he": 266,
	"./he.js": 266,
	"./hi": 267,
	"./hi.js": 267,
	"./hr": 268,
	"./hr.js": 268,
	"./hu": 269,
	"./hu.js": 269,
	"./hy-am": 270,
	"./hy-am.js": 270,
	"./id": 271,
	"./id.js": 271,
	"./is": 272,
	"./is.js": 272,
	"./it": 273,
	"./it.js": 273,
	"./ja": 274,
	"./ja.js": 274,
	"./jv": 275,
	"./jv.js": 275,
	"./ka": 276,
	"./ka.js": 276,
	"./kk": 277,
	"./kk.js": 277,
	"./km": 278,
	"./km.js": 278,
	"./kn": 279,
	"./kn.js": 279,
	"./ko": 280,
	"./ko.js": 280,
	"./ky": 281,
	"./ky.js": 281,
	"./lb": 282,
	"./lb.js": 282,
	"./lo": 283,
	"./lo.js": 283,
	"./lt": 284,
	"./lt.js": 284,
	"./lv": 285,
	"./lv.js": 285,
	"./me": 286,
	"./me.js": 286,
	"./mi": 287,
	"./mi.js": 287,
	"./mk": 288,
	"./mk.js": 288,
	"./ml": 289,
	"./ml.js": 289,
	"./mr": 290,
	"./mr.js": 290,
	"./ms": 291,
	"./ms-my": 292,
	"./ms-my.js": 292,
	"./ms.js": 291,
	"./my": 293,
	"./my.js": 293,
	"./nb": 294,
	"./nb.js": 294,
	"./ne": 295,
	"./ne.js": 295,
	"./nl": 296,
	"./nl-be": 297,
	"./nl-be.js": 297,
	"./nl.js": 296,
	"./nn": 298,
	"./nn.js": 298,
	"./pa-in": 299,
	"./pa-in.js": 299,
	"./pl": 300,
	"./pl.js": 300,
	"./pt": 301,
	"./pt-br": 302,
	"./pt-br.js": 302,
	"./pt.js": 301,
	"./ro": 303,
	"./ro.js": 303,
	"./ru": 304,
	"./ru.js": 304,
	"./sd": 305,
	"./sd.js": 305,
	"./se": 306,
	"./se.js": 306,
	"./si": 307,
	"./si.js": 307,
	"./sk": 308,
	"./sk.js": 308,
	"./sl": 309,
	"./sl.js": 309,
	"./sq": 310,
	"./sq.js": 310,
	"./sr": 311,
	"./sr-cyrl": 312,
	"./sr-cyrl.js": 312,
	"./sr.js": 311,
	"./ss": 313,
	"./ss.js": 313,
	"./sv": 314,
	"./sv.js": 314,
	"./sw": 315,
	"./sw.js": 315,
	"./ta": 316,
	"./ta.js": 316,
	"./te": 317,
	"./te.js": 317,
	"./tet": 318,
	"./tet.js": 318,
	"./th": 319,
	"./th.js": 319,
	"./tl-ph": 320,
	"./tl-ph.js": 320,
	"./tlh": 321,
	"./tlh.js": 321,
	"./tr": 322,
	"./tr.js": 322,
	"./tzl": 323,
	"./tzl.js": 323,
	"./tzm": 324,
	"./tzm-latn": 325,
	"./tzm-latn.js": 325,
	"./tzm.js": 324,
	"./uk": 326,
	"./uk.js": 326,
	"./ur": 327,
	"./ur.js": 327,
	"./uz": 328,
	"./uz-latn": 329,
	"./uz-latn.js": 329,
	"./uz.js": 328,
	"./vi": 330,
	"./vi.js": 330,
	"./x-pseudo": 331,
	"./x-pseudo.js": 331,
	"./yo": 332,
	"./yo.js": 332,
	"./zh-cn": 333,
	"./zh-cn.js": 333,
	"./zh-hk": 334,
	"./zh-hk.js": 334,
	"./zh-tw": 335,
	"./zh-tw.js": 335
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
webpackContext.id = 435;

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories_categories__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__charts_charts__ = __webpack_require__(115);
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
    function HomePage(navCtrl, navParams, authService, loadingCtrl, toastCtrl, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.menu = menu;
        menu.enable(true);
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
        selector: 'page-home',template:/*ion-inline-start:"/Users/bohdan/bfinanceapp/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n        Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding id="page1">\n  <ion-list id="home-list11">\n    <ion-item color="none" on-click="goToCharts()" id="home-list-item47">\n      <ion-thumbnail item-left>\n        <img src="assets/img/QmnR3sRpSgzv8qEb3rdw_charts.png" />\n      </ion-thumbnail>\n      <h2>\n        Charts\n      </h2>\n    </ion-item>\n    <ion-item color="none" on-click="goToCategory()" id="home-list-item48">\n      <ion-thumbnail item-left>\n        <img src="assets/img/lkkeOZkLTUK15GPs3apS_category.png" />\n      </ion-thumbnail>\n      <h2>\n        Category\n      </h2>\n    </ion-item>\n    <ion-item color="none" on-click="goToMap()" id="home-list-item49">\n      <ion-thumbnail item-left>\n        <img src="assets/img/76Szzj9VSg6LYQRvi6jV_map.png" />\n      </ion-thumbnail>\n      <h2>\n        Map\n      </h2>\n    </ion-item>\n    <ion-item color="none" on-click="goToProfile()" id="home-list-item50">\n      <ion-thumbnail item-left>\n        <img src="assets/img/opvUfGcAQeqO5xDc4tmQ_user.png" />\n      </ion-thumbnail>\n      <h2>\n        Profile\n      </h2>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/bohdan/bfinanceapp/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_edit__ = __webpack_require__(213);
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
    ProfilePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/bohdan/bfinanceapp/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n        Profile\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding id="page8">\n  <ion-card id="profile-card26">\n    <ion-list>\n      <ion-item color="none" id="profile-list-item53">\n        <h2>{{this.profile.username}}</h2>\n        <button item-right ion-button clear (click)="goEdit()">\n          <ion-icon ios="ios-create" md="md-create"></ion-icon>\n        </button>\n        <button item-right ion-button clear (click)="logout()">\n          <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-item>\n\n\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n\n\n      <img src="{{this.profile.avatar}}">\n      <ion-item id="profile-list-item-container14">\n        <div id="profile-markdown16" class="show-list-numbers-and-dots">\n          <p style="margin-top:0px;color:#000000;">\n            <strong>\n              Email\n            </strong> :\n            {{this.profile.email}}\n          </p>\n          <p style="margin-top:10px;color:#000000;">\n            <strong>\n              Firstname\n            </strong> :\n            {{this.profile.firstname}}\n          </p>\n          <p style="margin-top:10px;color:#000000;">\n            <strong>\n              Lastname\n            </strong> :\n            {{this.profile.lastname}}\n          </p>\n          <p style="margin-top:10px;color:#000000;">\n            <strong>\n              Middlename\n            </strong> :\n            {{this.profile.middilename}}\n          </p>\n          <p style="margin-top:10px;color:#000000;">\n            <strong>\n              Create_at\n            </strong> :\n            {{this.profile.created_at}}\n          </p>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/bohdan/bfinanceapp/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ })

},[336]);
//# sourceMappingURL=main.js.map