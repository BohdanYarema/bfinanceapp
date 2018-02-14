import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoadingController, ToastController, App } from 'ionic-angular';
import { ListPage } from '../list/list';
import { LoginPage } from '../login/login';
import { InjectableProvider } from '../../providers/injectable/injectable';
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

    console.log(this.translateService.getLangs());

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
        content: this.injectableProvider.searching
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
      console.log(this.injectableProvider.dismissed);
    });

    toast.present();
  }

  itemSelected(item: string) {
    this.navCtrl.push(ListPage, {
      item : item
    });
  }
}
