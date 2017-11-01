import { Component } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  singupGroup : FormGroup;
  username    : AbstractControl;
  email       : AbstractControl;
  password    : AbstractControl;
  loading     : any;
  response    : any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public authService: AuthServiceProvider, 
    public loadingCtrl: LoadingController, 
    private toastCtrl: ToastController,
    public formBuilder: FormBuilder,
  ) {
    // formbuilder for form
    this.singupGroup = formBuilder.group({
        username:['', Validators.compose([
            Validators.required, 
            Validators.pattern('[a-zA-Z ]*')
        ])],
        email   :['', Validators.compose([
            Validators.required, 
            Validators.email, 
            Validators.minLength(2),
            Validators.maxLength(255) 
        ])],
        password   :['', Validators.compose([
            Validators.required, 
            Validators.minLength(6),
        ])],
    });

    this.username   = this.singupGroup.controls['username'];
    this.email      = this.singupGroup.controls['email'];
    this.password   = this.singupGroup.controls['password'];
  }


  doSignup(data) {
    this.showLoader();
    this.authService.register(data).then((result) => {
      this.loading.dismiss();
      this.response = result;
      localStorage.setItem('token', this.response.access_token);
      this.navCtrl.setRoot(TabsPage);
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Sending data...'
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