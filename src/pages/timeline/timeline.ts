import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the TimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {
  date    :any;
  loading : any;
  data    : any;
  item    : any;
  items   = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthServiceProvider, 
    public loadingCtrl: LoadingController, 
    private toastCtrl: ToastController
  ) {
    
  }

  ionViewDidLoad() {
    this.showLoader();

    this.authService.timeline(2018, 0).then((result) => {
      this.data = result;
      console.log(this.data);
      this.loading.dismiss();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  date_Value(){
    this.date = new Date(this['dateValue']);
    console.log(this.date.getMonth());
    console.log(this.date.getFullYear());
    
    this.showLoader();

    this.authService.timeline(this.date.getFullYear(), this.date.getMonth()).then((result) => {
      this.data = result;
      console.log(this.data);
      this.loading.dismiss();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
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
