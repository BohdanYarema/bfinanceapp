import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoadingController, ToastController } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import { MapPage } from '../map/map';
import { ProfilePage } from '../profile/profile';
import { ChartsPage } from '../charts/charts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;
  reponse: any;
  loading : any;

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public authService: AuthServiceProvider,
      public loadingCtrl: LoadingController,
      public toastCtrl: ToastController
    ) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
    }

    goToCharts(){
      this.navCtrl.push(ChartsPage);
    }

    goToCategory(){
      this.navCtrl.push(CategoriesPage);
    }

    goToMap(){
      this.navCtrl.push(MapPage);
    }

    goToProfile(){
      this.navCtrl.push(ProfilePage);
    }
}
