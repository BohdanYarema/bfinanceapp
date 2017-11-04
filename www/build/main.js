webpackJsonp([1],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_form__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accounting_accounting__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListPage = (function () {
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
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{item.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="main_content">\n    <div class="list" ion-item *ngFor="let item of items">\n        <ion-item-group>\n          <ion-item-divider color="light">{{ item[0] }}</ion-item-divider>\n          <div ion-item *ngFor="let data of item[1]" (click)="itemSelected(data)">\n            <ion-item >\n              <p item-start>{{ data.name }}</p>\n              <p item-end>{{ data.price }} uah</p>\n            </ion-item>\n          </div>\n        </ion-item-group>\n    </div>\n</ion-content>\n\n<button class="btn_float_right" (click)="goForm(item)" ion-button color="secondary" round>\n  <ion-icon name="add"></ion-icon>\n</button>'/*ion-inline-end:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(334);
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
            localStorage.setItem('token', _this.response.access_token);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
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
        selector: 'page-login',template:/*ion-inline-start:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/pages/login/login.html"*/'<ion-content padding>\n  <h2>Please, Login</h2>\n\n  <form [formGroup]="loginGroup" (ngSubmit)="doLogin(loginGroup.value)">\n      <ion-item>\n        <ion-label stacked>Username</ion-label>\n        <ion-input formControlName="username" name="username" type="text" placeholder="Username" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input formControlName="password" name="password" type="password" placeholder="Password"></ion-input>\n      </ion-item>\n      \n      <button ion-button block type="submit" [disabled]="!loginGroup.valid">\n          Login\n      </button>\n  </form>\n\n  <button ion-button block clear (click)="register()">\n    No have an account? Register Now\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
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
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/test/test.module": [
		452,
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
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/pages/profile/profile.html"*/'<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(30);
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
    HomePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Serching...'
        });
        this.loading.present();
    };
    HomePage.prototype.presentToast = function (msg) {
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
    HomePage.prototype.setCharts = function (type, data) {
        switch (type) {
            case 'line':
                var collection = {
                    "label": [],
                    "data": []
                };
                for (var item in data) {
                    collection.label.push(data[item].name);
                    collection.data.push(data[item].count);
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
                var coolection = {
                    "label": [],
                    "data": [],
                    "color": []
                };
                for (var i = 0; i < data.length; i++) {
                    var element = data[i];
                    coolection.label.push(element.category.name);
                    coolection.data.push(parseInt(element.hour));
                    coolection.color.push(element.category.color);
                }
                this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: coolection.label,
                        datasets: [{
                                label: 'Most popular time to buy per category',
                                data: coolection.data,
                                backgroundColor: coolection.color,
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
                var coolection = {
                    "label": [],
                    "data": [],
                    "color": []
                };
                for (var i = 0; i < data.length; i++) {
                    var element = data[i];
                    coolection.label.push(element.name);
                    coolection.data.push(element.accountings.length);
                    coolection.color.push(element.color);
                }
                this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
                    type: 'doughnut',
                    data: {
                        labels: coolection.label,
                        datasets: [{
                                label: 'Count of by per category',
                                data: coolection.data,
                                backgroundColor: coolection.color,
                            }]
                    }
                });
                break;
        }
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
        selector: 'page-home',template:/*ion-inline-start:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/pages/home/home.html"*/'<ion-content padding>\n      <br><br><br>\n\n      <ion-card>\n        <ion-card-header>\n          Doughnut Chart\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #doughnutCanvas></canvas>\n        </ion-card-content>\n      </ion-card>\n\n      \n     <ion-card>\n       <ion-card-header>\n         Bar Chart\n       </ion-card-header>\n       <ion-card-content>\n         <canvas #barCanvas></canvas>\n       </ion-card-content>\n     </ion-card>\n  \n     <ion-card>\n       <ion-card-header>\n         Line Chart\n       </ion-card-header>\n       <ion-card-content>\n         <canvas #lineCanvas></canvas>\n       </ion-card-content>\n     </ion-card>\n  \n </ion-content>'/*ion-inline-end:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _e || Object])
], HomePage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(450);
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
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(30);
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
        selector: 'page-categories',template:/*ion-inline-start:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/pages/categories/categories.html"*/'<ion-content>\n    <div class="card-background-page" ion-item *ngFor="let item of data" (click)="itemSelected(item)">\n      <ion-card>\n        <img src="{{ item.thumbnail }}"/>\n        <div class="card-title">{{ item.name }}</div>\n      </ion-card>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/pages/categories/categories.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], CategoriesPage);

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_custom__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_diagnostic__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FormPage = (function () {
    function FormPage(navCtrl, navParams, http, formBuilder, geolocation, platform, authService, loadingCtrl, toastCtrl, diagnostic) {
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
        this.diagnostic = diagnostic;
        this.gps_x = 0;
        this.gps_y = 0;
        var successCallback = function (isAvailable) { alert('Is available? ' + isAvailable); };
        var errorCallback = function (e) { return alert(e); };
        this.diagnostic.isGpsLocationEnabled().then(successCallback, errorCallback);
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
            console.log(_this.response);
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
        selector: 'page-form',template:/*ion-inline-start:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/pages/form/form.html"*/'<ion-content padding>\n<h2>Add Accounting</h2>\n<form [formGroup]="addGroup" (ngSubmit)="doAddAcccounting(addGroup.value)">\n    <ion-item>\n        <ion-input formControlName="name" name="name" type="text" placeholder="name" ></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-input formControlName="price" name="price" type="number" placeholder="price" ></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-datetime displayFormat="MMM/DD/YYYY" formControlName="dates" name="dates" placeholder="dates"></ion-datetime>\n    </ion-item>\n    \n    <button ion-button block type="submit" [disabled]="!addGroup.valid">\n        Add\n    </button>\n</form>\n</ion-content>'/*ion-inline-end:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/pages/form/form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_diagnostic__["a" /* Diagnostic */]])
], FormPage);

//# sourceMappingURL=form.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(333);
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
            this.loadMap(this.item.gps_x, this.item.gps_y);
        }
    };
    AccountingPage.prototype.loadMap = function (gps_x, gps_y) {
        var _this = this;
        this.mapElement = document.getElementById('map');
        this.mapElement.innerHTML = '';
        var mapOptions = {
            camera: {
                target: {
                    lat: gps_x,
                    lng: gps_y
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMap */](this.mapElement, mapOptions);
        //this.map = this.googleMaps.create(this.mapElement, mapOptions);
        // Wait the MAP_READY before using any methods.
        this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MAP_READY).then(function () {
            console.log('Map is ready!');
            var icon = {
                url: 'assets/imgs/map.png',
                size: { width: "32px", height: "32px;" }
            };
            // Now you can use all methods safely.
            _this.map.addMarker({
                title: 'Ionic',
                icon: icon,
                animation: 'DROP',
                position: {
                    lat: gps_x,
                    lng: gps_y
                }
            })
                .then(function (marker) {
                marker.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MARKER_CLICK)
                    .subscribe(function () {
                    alert('clicked');
                });
            });
        });
    };
    return AccountingPage;
}());
AccountingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-accounting',template:/*ion-inline-start:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/pages/accounting/accounting.html"*/'<ion-content class="accounting--card">\n  <div #map id="map">\n    <ion-img style="width: 100%; height: 100%;" src="assets/imgs/squirrel.png"></ion-img>    \n  </div>\n  <ion-card>\n      <ion-item>\n        <ion-icon name="basket" item-left large></ion-icon>\n        <h2>{{ item.name }}</h2>\n        <p>{{ item.price }} uah</p>\n      </ion-item>\n      <ion-item>\n        <span item-left>{{ item.dates }}</span>\n      </ion-item>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/pages/accounting/accounting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], AccountingPage);

//# sourceMappingURL=accounting.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(58);
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
            localStorage.setItem('token', _this.response.access_token);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
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
        selector: 'page-register',template:/*ion-inline-start:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/pages/register/register.html"*/'<ion-content padding>\n  <h2>Register Here</h2>\n  <form [formGroup]="singupGroup" (ngSubmit)="doSignup(singupGroup.value)">\n\n      <ion-item>\n        <ion-label stacked>Username</ion-label>\n        <ion-input formControlName="username" name="username" type="text" placeholder="Your username" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input formControlName="email" name="email" type="text" placeholder="Your email" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input formControlName="password" name="password" type="password" placeholder="Your password"></ion-input>\n      </ion-item>\n      \n      <button ion-button block type="submit" [disabled]="!singupGroup.valid">\n          Register\n      </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/pages/register/register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(354);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_categories_categories__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_form_form__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_accounting_accounting__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_auth_service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_diagnostic__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_google_maps__ = __webpack_require__(333);
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
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_form_form__["a" /* FormPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_accounting_accounting__["a" /* AccountingPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_18__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_categories_categories__["a" /* CategoriesPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_form_form__["a" /* FormPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_accounting_accounting__["a" /* AccountingPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_google_maps__["b" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_diagnostic__["a" /* Diagnostic */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = null;
        if (!localStorage.getItem("token")) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        }
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 213,
	"./af.js": 213,
	"./ar": 214,
	"./ar-dz": 215,
	"./ar-dz.js": 215,
	"./ar-kw": 216,
	"./ar-kw.js": 216,
	"./ar-ly": 217,
	"./ar-ly.js": 217,
	"./ar-ma": 218,
	"./ar-ma.js": 218,
	"./ar-sa": 219,
	"./ar-sa.js": 219,
	"./ar-tn": 220,
	"./ar-tn.js": 220,
	"./ar.js": 214,
	"./az": 221,
	"./az.js": 221,
	"./be": 222,
	"./be.js": 222,
	"./bg": 223,
	"./bg.js": 223,
	"./bn": 224,
	"./bn.js": 224,
	"./bo": 225,
	"./bo.js": 225,
	"./br": 226,
	"./br.js": 226,
	"./bs": 227,
	"./bs.js": 227,
	"./ca": 228,
	"./ca.js": 228,
	"./cs": 229,
	"./cs.js": 229,
	"./cv": 230,
	"./cv.js": 230,
	"./cy": 231,
	"./cy.js": 231,
	"./da": 232,
	"./da.js": 232,
	"./de": 233,
	"./de-at": 234,
	"./de-at.js": 234,
	"./de-ch": 235,
	"./de-ch.js": 235,
	"./de.js": 233,
	"./dv": 236,
	"./dv.js": 236,
	"./el": 237,
	"./el.js": 237,
	"./en-au": 238,
	"./en-au.js": 238,
	"./en-ca": 239,
	"./en-ca.js": 239,
	"./en-gb": 240,
	"./en-gb.js": 240,
	"./en-ie": 241,
	"./en-ie.js": 241,
	"./en-nz": 242,
	"./en-nz.js": 242,
	"./eo": 243,
	"./eo.js": 243,
	"./es": 244,
	"./es-do": 245,
	"./es-do.js": 245,
	"./es.js": 244,
	"./et": 246,
	"./et.js": 246,
	"./eu": 247,
	"./eu.js": 247,
	"./fa": 248,
	"./fa.js": 248,
	"./fi": 249,
	"./fi.js": 249,
	"./fo": 250,
	"./fo.js": 250,
	"./fr": 251,
	"./fr-ca": 252,
	"./fr-ca.js": 252,
	"./fr-ch": 253,
	"./fr-ch.js": 253,
	"./fr.js": 251,
	"./fy": 254,
	"./fy.js": 254,
	"./gd": 255,
	"./gd.js": 255,
	"./gl": 256,
	"./gl.js": 256,
	"./gom-latn": 257,
	"./gom-latn.js": 257,
	"./he": 258,
	"./he.js": 258,
	"./hi": 259,
	"./hi.js": 259,
	"./hr": 260,
	"./hr.js": 260,
	"./hu": 261,
	"./hu.js": 261,
	"./hy-am": 262,
	"./hy-am.js": 262,
	"./id": 263,
	"./id.js": 263,
	"./is": 264,
	"./is.js": 264,
	"./it": 265,
	"./it.js": 265,
	"./ja": 266,
	"./ja.js": 266,
	"./jv": 267,
	"./jv.js": 267,
	"./ka": 268,
	"./ka.js": 268,
	"./kk": 269,
	"./kk.js": 269,
	"./km": 270,
	"./km.js": 270,
	"./kn": 271,
	"./kn.js": 271,
	"./ko": 272,
	"./ko.js": 272,
	"./ky": 273,
	"./ky.js": 273,
	"./lb": 274,
	"./lb.js": 274,
	"./lo": 275,
	"./lo.js": 275,
	"./lt": 276,
	"./lt.js": 276,
	"./lv": 277,
	"./lv.js": 277,
	"./me": 278,
	"./me.js": 278,
	"./mi": 279,
	"./mi.js": 279,
	"./mk": 280,
	"./mk.js": 280,
	"./ml": 281,
	"./ml.js": 281,
	"./mr": 282,
	"./mr.js": 282,
	"./ms": 283,
	"./ms-my": 284,
	"./ms-my.js": 284,
	"./ms.js": 283,
	"./my": 285,
	"./my.js": 285,
	"./nb": 286,
	"./nb.js": 286,
	"./ne": 287,
	"./ne.js": 287,
	"./nl": 288,
	"./nl-be": 289,
	"./nl-be.js": 289,
	"./nl.js": 288,
	"./nn": 290,
	"./nn.js": 290,
	"./pa-in": 291,
	"./pa-in.js": 291,
	"./pl": 292,
	"./pl.js": 292,
	"./pt": 293,
	"./pt-br": 294,
	"./pt-br.js": 294,
	"./pt.js": 293,
	"./ro": 295,
	"./ro.js": 295,
	"./ru": 296,
	"./ru.js": 296,
	"./sd": 297,
	"./sd.js": 297,
	"./se": 298,
	"./se.js": 298,
	"./si": 299,
	"./si.js": 299,
	"./sk": 300,
	"./sk.js": 300,
	"./sl": 301,
	"./sl.js": 301,
	"./sq": 302,
	"./sq.js": 302,
	"./sr": 303,
	"./sr-cyrl": 304,
	"./sr-cyrl.js": 304,
	"./sr.js": 303,
	"./ss": 305,
	"./ss.js": 305,
	"./sv": 306,
	"./sv.js": 306,
	"./sw": 307,
	"./sw.js": 307,
	"./ta": 308,
	"./ta.js": 308,
	"./te": 309,
	"./te.js": 309,
	"./tet": 310,
	"./tet.js": 310,
	"./th": 311,
	"./th.js": 311,
	"./tl-ph": 312,
	"./tl-ph.js": 312,
	"./tlh": 313,
	"./tlh.js": 313,
	"./tr": 314,
	"./tr.js": 314,
	"./tzl": 315,
	"./tzl.js": 315,
	"./tzm": 316,
	"./tzm-latn": 317,
	"./tzm-latn.js": 317,
	"./tzm.js": 316,
	"./uk": 318,
	"./uk.js": 318,
	"./ur": 319,
	"./ur.js": 319,
	"./uz": 320,
	"./uz-latn": 321,
	"./uz-latn.js": 321,
	"./uz.js": 320,
	"./vi": 322,
	"./vi.js": 322,
	"./x-pseudo": 323,
	"./x-pseudo.js": 323,
	"./yo": 324,
	"./yo.js": 324,
	"./zh-cn": 325,
	"./zh-cn.js": 325,
	"./zh-hk": 326,
	"./zh-hk.js": 326,
	"./zh-tw": 327,
	"./zh-tw.js": 327
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
webpackContext.id = 432;

/***/ }),

/***/ 451:
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

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories_categories__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = (function () {
    function TabsPage(navCtrl, authService, app, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.app = app;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__categories_categories__["a" /* CategoriesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
        // if(!localStorage.getItem("token")) {
        //   navCtrl.setRoot(LoginPage);
        // }
    }
    TabsPage.prototype.logout = function () {
        this.showLoader();
        localStorage.clear();
        this.loading.dismiss();
        var nav = this.app.getRootNav();
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    TabsPage.prototype.presentToast = function (msg) {
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
    TabsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/pages/tabs/tabs.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title start>BFinance</ion-title>\n\n    <ion-buttons end>\n      <button ion-button clear (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Categories" tabIcon="list"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/Bogdanek/Documents/projects/bfinanceapp/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

},[335]);
//# sourceMappingURL=main.js.map