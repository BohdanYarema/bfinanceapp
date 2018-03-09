import { Component } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { NavController, NavParams, Platform, LoadingController, ToastController  } from 'ionic-angular';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CustomValidators } from '../../validators/custom';
import { ListPage } from '../../pages/list/list';
import { InjectableProvider } from '../../providers/injectable/injectable';
import { MapPage }        from '../map/map';
import { TimelinePage }   from '../timeline/timeline';
import { CategoriesPage } from '../categories/categories';
import { HomePage }       from '../home/home';


@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})


export class FormPage {
  addGroup: FormGroup;
  name  : AbstractControl;
  price : AbstractControl;
  type  : AbstractControl;
  //dates : AbstractControl;
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
        private toastCtrl: ToastController,
        public injectableProvider: InjectableProvider
    ) {

        // data from category page
        this.navCtrl    = navCtrl;
        this.category    = navParams.data.category;
        this.category_id = navParams.data.category.id;

        // formbuilder for form
        this.addGroup = formBuilder.group({
            name:['', Validators.required],
            type:[],
            price:['', Validators.compose([
                Validators.required, 
                CustomValidators.negativeNumber,
            ])]
            //dates:['', Validators.required]
        });

        this.name   = this.addGroup.controls['name'];
        this.price  = this.addGroup.controls['price'];
        this.type   = this.addGroup.controls['type'];
        //this.dates  = this.addGroup.controls['dates'];

        //this.showLoader("Catching you gps coords");
        platform.ready().then(() => {
            geolocation.getCurrentPosition().then((location) => {
                this.gps_x = location.coords.latitude;
                this.gps_y = location.coords.longitude;

            }).catch((error) => {
                this.gps_x = null;
                this.gps_y = null;
            });
        });      
    }

    // sending form data function
    doAddAcccounting(data) {
        data.category_id    = this.category_id;
        data.gps_x          = this.gps_x;
        data.gps_y          = this.gps_y;
    
        this.authService.addAccounting(data).then((result) => {
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
        toast.onDidDismiss(() => {});
        toast.present();
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