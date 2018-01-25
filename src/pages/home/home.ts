import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoadingController, ToastController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  loading : any;
  data    : any;

  constructor(
    public navCtrl: NavController, 
    public authService: AuthServiceProvider, 
    public loadingCtrl: LoadingController, 
    private toastCtrl: ToastController
  ) {
    
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
