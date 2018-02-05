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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = null;
  loading:any;
  
  constructor(
      platform  : Platform,
      public loadingCtrl: LoadingController, 
      private toastCtrl: ToastController,
      public app: App
    ) {
    if(!localStorage.getItem("token")) {
      this.rootPage = LoginPage;
    } else {
      this.rootPage = HomePage;
    }
    platform.ready().then(() => {
      // platform.registerBackButtonAction(() => {
      //     console.log(this.nav.getActive());
      // });
    });
  }

  gotoProfile() {
    this.nav.push(ProfilePage);
  }

  gotoHome() {
    this.nav.push(HomePage);
  }

  gotoMap() {
    this.nav.push(MapPage);
  }

  gotoTimeline() {
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
    this.loading = this.loadingCtrl.create({
        content: 'Serching...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
