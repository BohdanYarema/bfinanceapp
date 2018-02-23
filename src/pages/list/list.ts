import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormPage } from '../form/form';
import { LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AccountingPage } from '../accounting/accounting';
import { InjectableProvider } from '../../providers/injectable/injectable';

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
    private toastCtrl: ToastController,
    public injectableProvider: InjectableProvider
  ) {
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    this.showLoader();
    this.authService.accounting(this.item.id).then((result) => {
      this.data = result;
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

  itemDelete(item) {
    this.authService.deleteAccounting(item).then((result) => {
      this.data = result
      this.loading.dismiss();
      this.navCtrl.push(ListPage, {
        item : this.item
      });
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }
}