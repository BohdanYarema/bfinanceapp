import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AccountingPage } from '../accounting/accounting';
import { InjectableProvider } from '../../providers/injectable/injectable';
import { MapPage }        from '../map/map';
import { CategoriesPage } from '../categories/categories';
import { FormPage }       from '../form/form';
import { HomePage }       from '../home/home';

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
  date        : any;
  month       : any;
  month_name  : any;
  year        : any;
  loading     : any;
  data        : any;
  item        : any;
  items       = [];
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthServiceProvider, 
    public loadingCtrl: LoadingController, 
    private toastCtrl: ToastController,
    public injectableProvider: InjectableProvider
  ) {
    
  }

  ionViewDidLoad() {
    var date = new Date();
    this.month_name   = this.monthNames[date.getMonth()];
    this.month        = date.getMonth()+1;
    this.year         = date.getFullYear();

    this.showLoader();

    this.authService.timeline(this.year, this.month).then((result) => {
      this.data = Object.keys(result).map(function (key) { 
        return {"name": key, 'data': result[key]}; 
      });
      this.loading.dismiss();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  date_Value(){
    this.date = new Date(this['dateValue']);
    this.month_name   = this.monthNames[this.date.getMonth()];
    this.month        = this.date.getMonth()+1;
    this.year         = this.date.getFullYear();
  
  
    this.showLoader();

    this.authService.timeline(this.year, this.month).then((result) => {
      this.data = Object.keys(result).map(function (key) { 
        return {"name": key, 'data': result[key]}; 
      });
      console.log(this.data);
      this.loading.dismiss();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
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

  itemSelected(item: string) {
    this.navCtrl.push(AccountingPage, {
      item : item
    });
  }

  gotoHome(){
    this.navCtrl.push(HomePage);
  }

  gotoCategories(category : object){
    this.navCtrl.push(CategoriesPage);
  }

  gotoMap(){
    this.navCtrl.push(MapPage);
  }

  gotoTimeline(){
    this.navCtrl.push(TimelinePage);
  }

}
