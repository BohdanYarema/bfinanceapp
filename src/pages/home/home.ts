import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoadingController, ToastController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AccountingPage } from '../accounting/accounting';
import { InjectableProvider } from '../../providers/injectable/injectable';
import { TranslateService } from '@ngx-translate/core';

import { MapPage }        from '../map/map';
import { TimelinePage }   from '../timeline/timeline';
import { CategoriesPage } from '../categories/categories';
import { ListPage }       from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  loading   : any;
  data      : any;
  translate : any;
  items   = [];
  last      : any;

  constructor(
    public navCtrl: NavController, 
    public authService: AuthServiceProvider, 
    public loadingCtrl: LoadingController, 
    private toastCtrl: ToastController,
    public app: App,
    public injectableProvider: InjectableProvider,
    public translateService:TranslateService
  ) {
    
  }
  

  logout() {
    localStorage.clear();
    this.showLoader();
    localStorage.clear();
    this.loading.dismiss();
    let nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
  }

  ionViewDidLoad() {
    this.showLoader();

    this.authService.category().then((result) => {
      this.data = result;
      this.loading.dismiss();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });

    this.authService.accounting_last().then((result) => {
      this.last = result
    }, (err) => {
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
    this.navCtrl.push(ListPage, {
      item : item
    });
  }

  accSelected(item: string) {
    this.navCtrl.push(AccountingPage, {
      item : item
    });
  }

  gotoCategories(category : object){
    this.navCtrl.push(CategoriesPage);
  }

  gotoMap(){
    this.navCtrl.push(MapPage);
  }

  gotoHome(){
    this.navCtrl.push(HomePage);
  }

  gotoTimeline(){
    this.navCtrl.push(TimelinePage);
  }
}
