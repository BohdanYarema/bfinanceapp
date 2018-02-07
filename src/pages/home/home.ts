import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoadingController, ToastController, App } from 'ionic-angular';
import { ListPage } from '../list/list';
import { LoginPage } from '../login/login';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  loading   : any;
  data      : any;

  constructor(
    public navCtrl: NavController, 
    public authService: AuthServiceProvider, 
    public loadingCtrl: LoadingController, 
    private toastCtrl: ToastController,
    public app: App, 
    private translateService: TranslateService
  ) {
    
  }

  segmentChanged(event) {
    this.translateService.use(event._value);
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

  itemSelected(item: string) {
    this.navCtrl.push(ListPage, {
      item : item
    });
  }
}
