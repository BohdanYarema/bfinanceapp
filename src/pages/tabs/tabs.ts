import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { CategoriesPage } from '../categories/categories';
import { LoginPage } from '../login/login';
import { MapPage } from '../map/map';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { App, LoadingController, ToastController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = CategoriesPage;
  tab3Root: any = MapPage;
  tab4Root: any = ProfilePage;
  loading:  any;

  constructor(
    public navCtrl: NavController, 
    public authService: AuthServiceProvider, 
    public app: App, 
    private toastCtrl: ToastController, 
    private loadingCtrl: LoadingController
  ) {
    // if(!localStorage.getItem("token")) {
    //   navCtrl.setRoot(LoginPage);
    // }
  }

  logout() {
    this.showLoader();
    localStorage.clear();
    this.loading.dismiss();
    let nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
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

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
  }
}