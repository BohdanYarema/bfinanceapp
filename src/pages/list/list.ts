import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import { FormPage } from '../form/form';
import { IonicPage } from 'ionic-angular';
import { LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';
import { AccountingPage } from '../accounting/accounting';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {
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
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    this.showLoader();
    this.authService.accounting(this.item.id).then((result) => {
      this.data = result

      for (var variable in this.data) {
        
        var date = new Date(parseInt(variable) * 1000);
      
        var curr_date   = date.getDate();
        var curr_month  = date.getMonth() + 1;
        var curr_year   = date.getFullYear();
        
        var test = (curr_date + "-" + curr_month + "-" + curr_year);
        
        this.items.push([
          test, this.data[variable]
        ]);
      }

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

  goForm(category : object) {
    this.navCtrl.push(FormPage, {
      category : category
    });
  }

  itemSelected(item: string) {
    this.navCtrl.push(AccountingPage, {
      item : item
    });
  }
}