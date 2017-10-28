import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { ListPage } from '../list/list';
import { Geolocation } from '@ionic-native/geolocation';
import { LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})


export class FormPage {
  authForm: FormGroup;
  loading: any;
  addData = { name:'', price:'', dates:'', category_id:'', gps_lat:null, gps_lon:null };
  data: any;
  category;
  category_id;
  gps_lat = 0;
  gps_lon = 0;
  
    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams, 
        public http: Http, 
        public formBuilder: FormBuilder,
        public geolocation: Geolocation,
        public platform: Platform,
        public authService: AuthServiceProvider, 
        public loadingCtrl: LoadingController, 
        private toastCtrl: ToastController
    ) {
        this.navCtrl = navCtrl;
        this.category    = navParams.data.category;
        this.category_id = navParams.data.category.id;

        platform.ready().then(() => {
            geolocation.getCurrentPosition().then((location) => {
            
                console.log(location);
                this.gps_lat = location.coords.latitude;
                this.gps_lon = location.coords.longitude;

            }).catch((error) => {
            
                this.gps_lat = null;
                this.gps_lon = null;
              
            });
          });      
    }

    doAddAcccounting() {
        this.showLoader();

        this.addData.category_id    = this.category_id;
        this.addData.gps_lat        = this.gps_lat;
        this.addData.gps_lon        = this.gps_lon;

        this.authService.addAccounting(this.addData).then((result) => {
            this.loading.dismiss();
            this.data = result;

            console.log(this.data);

            this.navCtrl.push(ListPage, {
                item : this.category
            });

        }, (err) => {
            this.loading.dismiss();
            this.presentToast(err);
        });
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
          position: 'bottom',
          dismissOnPageChange: true
        });
    
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
    
        toast.present();
      }
}