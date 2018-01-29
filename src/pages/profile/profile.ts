import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, App, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { EditPage } from '../edit/edit';
import { AccountingPage } from '../accounting/accounting';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

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


  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    public authService: AuthServiceProvider, 
    public app: App
  ) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.item = navParams.data.item;
    console.log(this.item);
  }

  ionViewDidLoad() {
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
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  itemSelected(item: string) {
    this.navCtrl.push(AccountingPage, {
      item : item
    });
  }
}
