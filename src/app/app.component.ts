import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, LoadingController, App, ToastController } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { MapPage } from '../pages/map/map';
import { EditPage } from '../pages/edit/edit';
import { TimelinePage } from '../pages/timeline/timeline';
import { TranslateService } from '@ngx-translate/core';
import { CategoriesPage } from '../pages/categories/categories';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = null;
  loading:any;
  searching:any;
  language:any;
  profile: any;

  constructor(
      platform  : Platform,
      public loadingCtrl: LoadingController, 
      private toastCtrl: ToastController,
      public app: App,
      private translateService: TranslateService
    ) {
      
    if(!localStorage.getItem("token")) {
      this.rootPage = LoginPage;
    } else {
      this.rootPage = HomePage;
    }

    if(localStorage.getItem("language") !== null) {
      this.language = localStorage.getItem("language");
    } else {
      localStorage.setItem('language', 'en');
      this.language = localStorage.getItem("language");
    }

    this.profile = JSON.parse(localStorage.getItem('profile'));

    platform.ready().then(() => {
      this.translateService.setDefaultLang(this.language);
      this.translateService.use(this.language);
    });
  }

  gotoProfile() {
    this.nav.push(ProfilePage);
  }

  gotoHome(){
    this.nav.push(HomePage);
  }

  gotoCategories(category : object){
    this.nav.push(CategoriesPage);
  }

  gotoMap(){
    this.nav.push(MapPage);
  }

  gotoTimeline(){
    this.nav.push(TimelinePage);
  }

  gotoEdit() {
    this.nav.push(EditPage);
  }

  logout() {
    localStorage.clear();
    this.showLoader();
    localStorage.clear();
    this.loading.dismiss();
    let nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({});

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {});

    toast.present();
  }
}
