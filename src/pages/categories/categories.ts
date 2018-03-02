import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { InjectableProvider } from '../../providers/injectable/injectable';
import { MapPage }        from '../map/map';
import { TimelinePage }   from '../timeline/timeline';
import { FormPage }       from '../form/form';
import { HomePage }       from '../home/home';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  loading : any;
  data    : any;

  constructor(
    public navCtrl: NavController, 
    public authService: AuthServiceProvider, 
    public loadingCtrl: LoadingController, 
    private toastCtrl: ToastController,
    public injectableProvider: InjectableProvider
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
