import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { ChartsPage } from '../pages/charts/charts';
import { MapPage } from '../pages/map/map';
import { CategoriesPage } from '../pages/categories/categories';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = null;
  constructor(
      platform: Platform,
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

  gotoCharts() {
    this.nav.push(ChartsPage);
  }

  gotoMap() {
    this.nav.push(MapPage);
  }

  gotoCategories() {
    this.nav.push(CategoriesPage);
  }
}
