webpackJsonp([1],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_edit__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(20);
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
    function ProfilePage(navCtrl, loadingCtrl, toastCtrl, navParams, authService, app) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.app = app;
        this.items = [];
        this.profile = JSON.parse(localStorage.getItem('profile'));
        this.item = navParams.data.item;
        console.log(this.item);
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.authService.accounting(2).then(function (result) {
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
        }, function (err) {
        });
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
        selector: 'page-profile',template:/*ion-inline-start:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/profile/profile.html"*/'<div class="page">\n  <div class="page__bg">\n      <div>\n        <img class="page__image" src="assets/img/profile_img.png">\n      </div>\n    <img class="page__icon" src="{{this.profile.avatar}}">\n    <button class="page__menu" menuToggle></button>\n    <button class="page__logout" (click)="logout()"></button>\n    <div class="page__info">\n        <div class="page__info__text">\n            <p class="page__info__text--title">{{this.profile.firstname}} {{this.profile.lastname}}</p>\n            <p class="page__info__text--description">{{this.profile.username}}</p>\n        </div>\n  </div>\n  <div class="page__content">\n    <div class="page__stats">\n      <div class="page__stats-item">\n        <p class="page__stats-item--title">128</p>\n        <p class="page__stats-item--description">complete</p>\n        <div class="page__stats-item--green"></div>\n      </div>\n      <div class="page__stats-item">\n        <p class="page__stats-item--title">14</p>\n        <p class="page__stats-item--description">complete</p>\n        <div class="page__stats-item--rose"></div>\n      </div>\n      <div class="page__stats-item">\n        <p class="page__stats-item--title">28</p>\n        <p class="page__stats-item--description">complete</p>\n        <div class="page__stats-item--fiolet"></div>\n      </div>\n    </div>\n    <div class="page__list">\n      <div *ngFor="let item of items">\n          <div *ngFor="let data of item[1]">\n            <div class="page__list__item">\n                <div class="page__list__info">\n                  <p>{{ data.price }}</p>\n                  <span>uah</span>\n                </div>\n                <div class="page__list__image">\n                  <img src="assets/img/avatar_list.png">\n                </div>\n                <div class="page__list__title">\n                  <p>{{ data.name }}</p>\n                  <span>{{ item[0] }}</span>\n                </div>\n              </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(20);
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
        this.profile_info = JSON.parse(localStorage.getItem('profile'));
        console.log(this.profile_info);
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
        selector: 'page-edit',template:/*ion-inline-start:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/edit/edit.html"*/'<div class="page">\n    <div class="page__bg">\n        <img class="page__image" src="assets/img/settings_img.png">\n        <button class="page__menu" menuToggle left></button>\n        <p class="page__name">Settings</p>\n        <div class="page__info">\n            <div class="page__info__text">\n                <p class="page__info__text--title">{{this.profile_info.firstname}} {{this.profile_info.lastname}}</p>\n                <p class="page__info__text--description">{{this.profile_info.username}}</p>\n            </div>\n        </div>\n        <button class="page__add" (click)="getImage()">\n            <img src="{{this.profile_info.avatar}}">\n        </button>\n    </div>\n    <div class="page__form">\n        <form [formGroup]="editGroup" (ngSubmit)="doEdit(editGroup.value)">\n            <div class="page__form__group">\n                <label>firstname ({{this.profile_info.firstname}})</label>\n                <input class="page__form__elements" formControlName="firstname" name="firstname" type="text" >\n            </div>\n            <div class="page__form__group">\n                <label>lastname ({{this.profile_info.lastname}})</label>\n                <input class="page__form__elements" formControlName="lastname" name="lastname" type="text">\n            </div>\n            <div class="page__form__group">\n                <label>middlename ({{this.profile_info.middlename}})</label>\n                <input class="page__form__elements" formControlName="middlename" name="middlename" type="text">\n            </div>\n            <div class="page__form__group">\n                <label>gender ({{this.profile_info.gender}})</label>\n                <input class="page__form__elements" formControlName="gender" name="gender" type="text">\n            </div>\n        \n            <button class="page__form__elements" id="login-button1" type="submit" [disabled]="!editGroup.valid">Update Form</button>\n        </form>\n\n        <button class="page__form__elements" id="login-button2" type="submit" (click)="uploadFile()">Upload Image</button>\n    </div>\n</div>\n'/*ion-inline-end:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/edit/edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
], EditPage);

//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
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
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(204);
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

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_custom__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(60);
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
        selector: 'page-form',template:/*ion-inline-start:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/form/form.html"*/'<div class="page">\n    <div class="page__bg">\n        <div>\n            <img class="page__image" src="assets/img/create_img.png">\n        </div>\n        <button class="page__menu" menuToggle left></button>\n        <div class="page__info">\n            <div class="page__info__text">\n                <p class="page__info__text--title">Create</p>\n            </div>\n        </div>\n    </div>\n    <div class="page__form">\n        <form [formGroup]="addGroup" (ngSubmit)="doAddAcccounting(addGroup.value)">\n            <input class="page__form__elements" formControlName="name" name="name" type="text" placeholder="name" >\n            <input class="page__form__elements" formControlName="price" name="price" type="number" placeholder="price" >\n            <ion-item class="page__form__elements--datapicker">\n                <ion-datetime displayFormat="MMM/DD/YYYY" formControlName="dates" name="dates" placeholder="dates"></ion-datetime>\n            </ion-item>\n            <button class="page__form__elements" id="login-button1" type="submit" [disabled]="!addGroup.valid">Add</button>\n        </form>\n    </div>\n</div>\n'/*ion-inline-end:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/form/form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]
        //private diagnostic: Diagnostic
    ])
], FormPage);

//# sourceMappingURL=form.js.map

/***/ }),

/***/ 209:
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
        this.monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        this.item = navParams.data.item;
        var date = new Date(parseInt(this.item.dates) * 1000);
        var curr_date = date.getDate();
        var curr_month = date.getMonth() + 1;
        var curr_year = date.getFullYear();
        var result = (curr_date + "-" + curr_month + "-" + curr_year);
        this.item.dates = curr_date;
        this.item.mounth = this.monthNames[curr_month];
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
        selector: 'page-accounting',template:/*ion-inline-start:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/accounting/accounting.html"*/'<div class="page">\n  <div class="page__bg">\n      <div>\n          <img class="page__image" src="assets/img/create_img.png">\n      </div>\n      <button class="page__menu" menuToggle left></button>\n      <div class="page__info">\n          <div class="page__info__text">\n              <p class="page__info__text--title">{{item.name}}</p>\n          </div>\n      </div>\n  </div>\n  <div class="page__content">\n    <div class="page__stats">\n      <div class="page__stats-item">\n        <p class="page__stats-item--title">{{item.price}}</p>\n        <p class="page__stats-item--description">summ</p>\n        <div class="page__stats-item--green"></div>\n      </div>\n      <div class="page__stats-item">\n        <p class="page__stats-item--title">{{item.dates}}</p>\n        <p class="page__stats-item--description">{{item.mounth}}</p>\n        <div class="page__stats-item--rose"></div>\n      </div>\n      <div class="page__stats-item">\n        <p class="page__stats-item--title">28</p>\n        <p class="page__stats-item--description">count</p>\n        <div class="page__stats-item--fiolet"></div>\n      </div>\n    </div>\n    <div #map id="map">\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/accounting/accounting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], AccountingPage);

//# sourceMappingURL=accounting.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(20);
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
        selector: 'page-register',template:/*ion-inline-start:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/register/register.html"*/'<div class="register">\n  <div class="register__bg">\n      <div>\n        <img class="register__image" src="assets/img/login.png">\n      </div>\n    <img class="register__icon" src="assets/img/mark.png">\n  </div>\n  \n  <form class="register__form" [formGroup]="singupGroup" (ngSubmit)="doSignup(singupGroup.value)">\n    <div class="register__form__elements">\n        <label class="register__form__elements--label">Username</label>\n        <input class="register__form__elements--input" formControlName="username" name="username" type="text" placeholder="Your username">\n    </div>\n    <div class="register__form__elements">\n        <label class="register__form__elements--label">Email</label>\n        <input class="register__form__elements--input" formControlName="email" name="email" type="text" placeholder="Your email">\n    </div>\n    <div class="register__form__elements">\n        <label class="register__form__elements--label">Password</label>\n        <input class="register__form__elements--input" formControlName="password" name="password" type="password" placeholder="Your password">\n    </div>\n    <button class="register__form__elements" id="register-button1" ion-button color="stable" block type="submit" [disabled]="!singupGroup.valid">Sign Up</button>\n  </form>\n</div>'/*ion-inline-end:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/register/register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(20);
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
        selector: 'page-map',template:/*ion-inline-start:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/map/map.html"*/'<div class="page">\n  <div class="page__bg">\n    <div>\n      <img class="page__image" src="assets/img/map_img.png">\n    </div>\n    <button class="page__menu" menuToggle left></button>\n    <div class="page__info">\n        <div class="page__info__text">\n            <p class="page__info__text--title">Map</p>\n        </div>\n    </div>\n  </div>\n  <div #map id="map">\n  </div>\n</div>\n'/*ion-inline-end:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/map/map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 332:
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
        selector: 'page-statistic',template:/*ion-inline-start:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/statistic/statistic.html"*/'<!--\n  Generated template for the StatisticPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<div class="login">\n  <div class="login--bg"></div>\n  <span class="login__icon"></span>\n  <form>\n    <input type="text">\n    <input type="text">\n    <button>Sign in</button>\n  </form>\n  <a href="">test</a>\n  <a href="">test</a>\n</div>\n\n\n<style>\n  .login--bg{\n    background-image: url(\'assets/img/login-bg.png\');\n    background-size: cover;\n    background-position: center;\n    height: 32rem;\n  }\n</style>'/*ion-inline-end:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/statistic/statistic.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], StatisticPage);

//# sourceMappingURL=statistic.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_categories_categories__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_form_form__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_accounting_accounting__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_map_map__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_charts_charts__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_edit_edit__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_statistic_statistic__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_diagnostic__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_transfer__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_camera__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_google_maps__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_injectable_injectable__ = __webpack_require__(457);
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
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_26__providers_injectable_injectable__["a" /* InjectableProvider */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_map_map__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_edit_edit__ = __webpack_require__(113);
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
    function MyApp(platform, loadingCtrl, toastCtrl, app) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
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
    MyApp.prototype.gotoMap = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_map_map__["a" /* MapPage */]);
    };
    MyApp.prototype.gotoEdit = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_edit_edit__["a" /* EditPage */]);
    };
    MyApp.prototype.logout = function () {
        localStorage.clear();
        this.showLoader();
        localStorage.clear();
        this.loading.dismiss();
        var nav = this.app.getRootNav();
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Serching...'
        });
        this.loading.present();
    };
    MyApp.prototype.presentToast = function (msg) {
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
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Bogdanek/Documents/bfinanceapp/src/app/app.html"*/'<ion-menu class="custom" [content]="content">\n  <button menuToggle (click)="gotoHome()">Home</button>\n  <button menuToggle (click)="gotoProfile()">Profile</button>\n  <button menuToggle (click)="gotoMap()">Map</button>\n  <button menuToggle class="toogle_button"><img src="assets/img/close_img.png"></button>\n  <div class="footer_button">\n    <button menuToggle (click)="gotoEdit()">Settings</button>\n    <button style="padding-left: 22.1rem;" menuToggle (click)="logout()">Logout</button>\n  </div>\n</ion-menu>\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Bogdanek/Documents/bfinanceapp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 400:
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

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(20);
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
        selector: 'page-categories',template:/*ion-inline-start:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/categories/categories.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n        Category\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding id="page">\n  <ion-list id="category-list" ion-item *ngFor="let item of data" (click)="itemSelected(item)">\n    <ion-item color="none" id="category-list-item1">\n        {{ item.name }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/categories/categories.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], CategoriesPage);

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(20);
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
        selector: 'page-charts',template:/*ion-inline-start:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/charts/charts.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n        Charts\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Doughnut Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #doughnutCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Bar Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Line Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #lineCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/charts/charts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], ChartsPage);

//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 217,
	"./af.js": 217,
	"./ar": 218,
	"./ar-dz": 219,
	"./ar-dz.js": 219,
	"./ar-kw": 220,
	"./ar-kw.js": 220,
	"./ar-ly": 221,
	"./ar-ly.js": 221,
	"./ar-ma": 222,
	"./ar-ma.js": 222,
	"./ar-sa": 223,
	"./ar-sa.js": 223,
	"./ar-tn": 224,
	"./ar-tn.js": 224,
	"./ar.js": 218,
	"./az": 225,
	"./az.js": 225,
	"./be": 226,
	"./be.js": 226,
	"./bg": 227,
	"./bg.js": 227,
	"./bn": 228,
	"./bn.js": 228,
	"./bo": 229,
	"./bo.js": 229,
	"./br": 230,
	"./br.js": 230,
	"./bs": 231,
	"./bs.js": 231,
	"./ca": 232,
	"./ca.js": 232,
	"./cs": 233,
	"./cs.js": 233,
	"./cv": 234,
	"./cv.js": 234,
	"./cy": 235,
	"./cy.js": 235,
	"./da": 236,
	"./da.js": 236,
	"./de": 237,
	"./de-at": 238,
	"./de-at.js": 238,
	"./de-ch": 239,
	"./de-ch.js": 239,
	"./de.js": 237,
	"./dv": 240,
	"./dv.js": 240,
	"./el": 241,
	"./el.js": 241,
	"./en-au": 242,
	"./en-au.js": 242,
	"./en-ca": 243,
	"./en-ca.js": 243,
	"./en-gb": 244,
	"./en-gb.js": 244,
	"./en-ie": 245,
	"./en-ie.js": 245,
	"./en-nz": 246,
	"./en-nz.js": 246,
	"./eo": 247,
	"./eo.js": 247,
	"./es": 248,
	"./es-do": 249,
	"./es-do.js": 249,
	"./es.js": 248,
	"./et": 250,
	"./et.js": 250,
	"./eu": 251,
	"./eu.js": 251,
	"./fa": 252,
	"./fa.js": 252,
	"./fi": 253,
	"./fi.js": 253,
	"./fo": 254,
	"./fo.js": 254,
	"./fr": 255,
	"./fr-ca": 256,
	"./fr-ca.js": 256,
	"./fr-ch": 257,
	"./fr-ch.js": 257,
	"./fr.js": 255,
	"./fy": 258,
	"./fy.js": 258,
	"./gd": 259,
	"./gd.js": 259,
	"./gl": 260,
	"./gl.js": 260,
	"./gom-latn": 261,
	"./gom-latn.js": 261,
	"./he": 262,
	"./he.js": 262,
	"./hi": 263,
	"./hi.js": 263,
	"./hr": 264,
	"./hr.js": 264,
	"./hu": 265,
	"./hu.js": 265,
	"./hy-am": 266,
	"./hy-am.js": 266,
	"./id": 267,
	"./id.js": 267,
	"./is": 268,
	"./is.js": 268,
	"./it": 269,
	"./it.js": 269,
	"./ja": 270,
	"./ja.js": 270,
	"./jv": 271,
	"./jv.js": 271,
	"./ka": 272,
	"./ka.js": 272,
	"./kk": 273,
	"./kk.js": 273,
	"./km": 274,
	"./km.js": 274,
	"./kn": 275,
	"./kn.js": 275,
	"./ko": 276,
	"./ko.js": 276,
	"./ky": 277,
	"./ky.js": 277,
	"./lb": 278,
	"./lb.js": 278,
	"./lo": 279,
	"./lo.js": 279,
	"./lt": 280,
	"./lt.js": 280,
	"./lv": 281,
	"./lv.js": 281,
	"./me": 282,
	"./me.js": 282,
	"./mi": 283,
	"./mi.js": 283,
	"./mk": 284,
	"./mk.js": 284,
	"./ml": 285,
	"./ml.js": 285,
	"./mr": 286,
	"./mr.js": 286,
	"./ms": 287,
	"./ms-my": 288,
	"./ms-my.js": 288,
	"./ms.js": 287,
	"./my": 289,
	"./my.js": 289,
	"./nb": 290,
	"./nb.js": 290,
	"./ne": 291,
	"./ne.js": 291,
	"./nl": 292,
	"./nl-be": 293,
	"./nl-be.js": 293,
	"./nl.js": 292,
	"./nn": 294,
	"./nn.js": 294,
	"./pa-in": 295,
	"./pa-in.js": 295,
	"./pl": 296,
	"./pl.js": 296,
	"./pt": 297,
	"./pt-br": 298,
	"./pt-br.js": 298,
	"./pt.js": 297,
	"./ro": 299,
	"./ro.js": 299,
	"./ru": 300,
	"./ru.js": 300,
	"./sd": 301,
	"./sd.js": 301,
	"./se": 302,
	"./se.js": 302,
	"./si": 303,
	"./si.js": 303,
	"./sk": 304,
	"./sk.js": 304,
	"./sl": 305,
	"./sl.js": 305,
	"./sq": 306,
	"./sq.js": 306,
	"./sr": 307,
	"./sr-cyrl": 308,
	"./sr-cyrl.js": 308,
	"./sr.js": 307,
	"./ss": 309,
	"./ss.js": 309,
	"./sv": 310,
	"./sv.js": 310,
	"./sw": 311,
	"./sw.js": 311,
	"./ta": 312,
	"./ta.js": 312,
	"./te": 313,
	"./te.js": 313,
	"./tet": 314,
	"./tet.js": 314,
	"./th": 315,
	"./th.js": 315,
	"./tl-ph": 316,
	"./tl-ph.js": 316,
	"./tlh": 317,
	"./tlh.js": 317,
	"./tr": 318,
	"./tr.js": 318,
	"./tzl": 319,
	"./tzl.js": 319,
	"./tzm": 320,
	"./tzm-latn": 321,
	"./tzm-latn.js": 321,
	"./tzm.js": 320,
	"./uk": 322,
	"./uk.js": 322,
	"./ur": 323,
	"./ur.js": 323,
	"./uz": 324,
	"./uz-latn": 325,
	"./uz-latn.js": 325,
	"./uz.js": 324,
	"./vi": 326,
	"./vi.js": 326,
	"./x-pseudo": 327,
	"./x-pseudo.js": 327,
	"./yo": 328,
	"./yo.js": 328,
	"./zh-cn": 329,
	"./zh-cn.js": 329,
	"./zh-hk": 330,
	"./zh-hk.js": 330,
	"./zh-tw": 331,
	"./zh-tw.js": 331
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
webpackContext.id = 434;

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InjectableProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(204);
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



/*
  Generated class for the InjectableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var InjectableProvider = (function () {
    function InjectableProvider(http) {
        this.http = http;
        console.log('Hello InjectableProvider Provider');
    }
    InjectableProvider.prototype.openMenu = function () {
        console.log(1);
    };
    InjectableProvider.prototype.closeMenu = function () {
        console.log(this);
    };
    return InjectableProvider;
}());
InjectableProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], InjectableProvider);

//# sourceMappingURL=injectable.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(61);
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
    function HomePage(navCtrl, authService, loadingCtrl, toastCtrl, app) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
    }
    HomePage.prototype.logout = function () {
        localStorage.clear();
        this.showLoader();
        localStorage.clear();
        this.loading.dismiss();
        var nav = this.app.getRootNav();
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.showLoader();
        this.authService.category().then(function (result) {
            _this.data = result;
            console.log(_this.data);
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
    HomePage.prototype.itemSelected = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */], {
            item: item
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/home/home.html"*/'<div class="page" [class.enableMenu] = "ApplyClass">\n  <div class="page__bg">\n      <div>\n        <img class="page__image" src="assets/img/list_bg.png">\n      </div>\n    <button class="page__menu" menuToggle left></button>\n    <div class="page__info">\n        <div class="page__info__text">\n            <p class="page__info__text--title">Categories</p>\n        </div>\n    </div>\n  </div>\n  <div class="page__list">\n      <div *ngFor="let item of data" (click)="itemSelected(item)">\n        <div class="page__list__item">\n          <div class="page__list__image">\n            <img src="{{item.thumbnail}}">\n            <div class="page__list__image--notify">\n              <p>2</p>\n            </div>\n          </div>\n          <div class="page__list__image--diagonal"></div>\n        </div>\n      </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_form__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accounting_accounting__ = __webpack_require__(209);
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
        selector: 'page-list',template:/*ion-inline-start:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/list/list.html"*/'<div class="page">\n    <div class="page__bg">\n        <button class="page__add" (click)="goForm(item)"><img src="assets/img/add.png"></button>\n        <div>\n          <img class="page__image" src="assets/img/list_bg.png">\n        </div>\n      <button class="page__menu" menuToggle left></button>\n      <div class="page__info">\n          <div class="page__info__text">\n              <p class="page__info__text--title">{{item.name}}</p>\n          </div>\n      </div>\n    </div>\n  \n    <div class="page__list">\n      <div *ngFor="let item of items">\n          <div *ngFor="let data of item[1]">\n            <div class="page__list__item" (click)="itemSelected(data)">\n                <div class="page__list__info">\n                  <p>{{ data.price }}</p>\n                  <span>uah</span>\n                </div>\n                <div class="page__list__image">\n                  <img src="assets/img/avatar_list.png">\n                </div>\n                <div class="page__list__title">\n                  <p>{{ data.name }}</p>\n                  <span>{{ item[0] }}</span>\n                </div>\n              </div>\n          </div>\n      </div>\n    </div>\n  </div>\n  \n  \n  <!-- <button item-end dark clear ion-button (click)="itemDelete(data)" icon-only>\n      <ion-icon name=\'trash\'></ion-icon>\n    </button> -->'/*ion-inline-end:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(20);
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
        selector: 'page-login',template:/*ion-inline-start:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/login/login.html"*/'<div class="login">\n  <div class="login__bg">\n      <div>\n        <img class="login__image" src="assets/img/login.png">\n      </div>\n    <img class="login__icon" src="assets/img/mark.png">\n  </div>\n  \n  <form class="login__form" [formGroup]="loginGroup" (ngSubmit)="doLogin(loginGroup.value)">\n    <div class="login__form__elements">\n        <label class="login__form__elements--label">Username</label>\n        <input class="login__form__elements--input" formControlName="username" name="username" type="text" placeholder="Your username">\n    </div>\n    <div class="login__form__elements">\n        <label class="login__form__elements--label">Password</label>\n        <input class="login__form__elements--input" formControlName="password" name="password" type="password" placeholder="Your password">\n    </div>\n    <button class="login__form__elements" id="login-button1" type="submit" [disabled]="!loginGroup.valid" block>Log in</button>\n    <div class="login__form__list">\n        <div class="login__form__elements--simple login__form__elements" id="login-button2" (click)="register()">Forgot password?</div>\n        <div class="login__form__elements--simple login__form__elements" id="login-button3" (click)="register()">Sign In</div>\n    </div>\n  </form>\n</div>'/*ion-inline-end:"/Users/Bogdanek/Documents/bfinanceapp/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[333]);
//# sourceMappingURL=main.js.map