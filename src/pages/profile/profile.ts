import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, App, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { EditPage } from '../edit/edit';
import { AccountingPage } from '../accounting/accounting';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { InjectableProvider } from '../../providers/injectable/injectable';
import { MapPage }        from '../map/map';
import { TimelinePage }   from '../timeline/timeline';
import { CategoriesPage } from '../categories/categories';
import { HomePage }       from '../home/home';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile: any;
  response: any;
  loading : any;
  item    : any;
  items   = [];
  data    : any;
  stats   : any;
  summary : any;
  count   : any;
  avg     : any;


  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    public authService: AuthServiceProvider, 
    public app: App,
    public injectableProvider: InjectableProvider
  ) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    this.authService.stats().then((result) => {
      this.stats = JSON.parse(JSON.stringify(result));
      this.summary  = Math.round(this.stats.summary.summary * 100) / 100;
      this.count    = this.stats.count.count;
      this.avg      = Math.round(this.stats.avg.avg * 100) / 100;
    }, (err) => {
    });

    this.authService.accounting_last().then((result) => {
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
    }, (err) => {
    });
  }

  logout() {
    localStorage.clear();
    this.showLoader();
    localStorage.clear();
    this.loading.dismiss();
    let nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
  }

  goEdit(){
    this.navCtrl.push(EditPage);
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({});
    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {});

    toast.present();
  }

  itemSelected(item: string) {
    this.navCtrl.push(AccountingPage, {
      item : item
    });
  }

  itemDelete(item) {
    this.showLoader();
    this.authService.deleteAccounting(item).then((result) => {
      this.data = result
      this.loading.dismiss();
      this.navCtrl.push(ProfilePage);
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
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
