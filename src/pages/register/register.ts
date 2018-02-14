import { Component } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { InjectableProvider } from '../../providers/injectable/injectable';

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
  profile     : object;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public formBuilder: FormBuilder,
    public injectableProvider: InjectableProvider
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

      this.profile = {
        username    : this.response.username,
        email       : this.response.email,
        avatar      : this.response.avatar,
        firstname   : this.response.firstname,
        lastname    : this.response.lastname,
        middlename  : this.response.middlename,
        gender      : this.response.gender,
        created_at  : this.response.created_at
      };

      localStorage.setItem('token', this.response.access_token);
      localStorage.setItem('profile', JSON.stringify(this.profile));

      this.navCtrl.setRoot(HomePage);
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

}
