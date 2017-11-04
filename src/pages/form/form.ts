import { Component } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { NavController, NavParams, Platform, LoadingController, ToastController  } from 'ionic-angular';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CustomValidators } from '../../validators/custom';
import { ListPage } from '../../pages/list/list';
//import { Diagnostic } from '@ionic-native/diagnostic';


@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})


export class FormPage {
  addGroup: FormGroup;
  name  : AbstractControl;
  price : AbstractControl;
  dates : AbstractControl;
  loading: any;
  response: any;
  category;
  category_id;
  gps_x = 0;
  gps_y = 0;
  
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
        //private diagnostic: Diagnostic
    ) {
        // let successCallback = (isAvailable) => { alert('Is available? ' + isAvailable); };
        // let errorCallback = (e) => alert(e);
        // this.diagnostic.isGpsLocationEnabled().then(successCallback, errorCallback);


        // data from category page
        this.navCtrl    = navCtrl;
        this.category    = navParams.data.category;
        this.category_id = navParams.data.category.id;

        // formbuilder for form
        this.addGroup = formBuilder.group({
            name:['', Validators.required],
            price:['', Validators.compose([
                Validators.required, 
                CustomValidators.negativeNumber,
            ])],
            dates:['', Validators.required]
        });

        this.name   = this.addGroup.controls['name'];
        this.price  = this.addGroup.controls['price'];
        this.dates  = this.addGroup.controls['dates'];


        // init getting gps coords from native plugin
        //this.showLoader("Catching you gps coords");
        platform.ready().then(() => {
            geolocation.getCurrentPosition().then((location) => {
                this.presentToast("Your coordinate are catching, we are watching you!");
                this.gps_x = location.coords.latitude;
                this.gps_y = location.coords.longitude;

            }).catch((error) => {
                this.presentToast("Your disallow gps tracking i aour app");
                this.gps_x = null;
                this.gps_y = null;
            });
        });      
    }

    // sending form data function
    doAddAcccounting(data) {
        this.showLoader("Sending data ...");

        data.category_id    = this.category_id;
        data.gps_x          = this.gps_x;
        data.gps_y          = this.gps_y;
    

        this.authService.addAccounting(data).then((result) => {
            this.loading.dismiss();
            this.response = result;

            this.navCtrl.push(ListPage, {
                item : this.category
            });

        }, (err) => {
            this.loading.dismiss();
            this.presentToast(err);
        });
    }

    // loader show function
    showLoader(msg){
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    }
    
    // toast function
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