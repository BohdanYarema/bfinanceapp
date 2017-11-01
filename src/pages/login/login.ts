import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loginGroup: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  loading: any;
  response: any;

  constructor(
    public navCtrl: NavController, 
    public authService: AuthServiceProvider, 
    public loadingCtrl: LoadingController, 
    private toastCtrl: ToastController,
    public formBuilder: FormBuilder,  
  ) {
    // formbuilder for form
    this.loginGroup = formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
    });

    this.username  = this.loginGroup.controls['username'];
    this.password  = this.loginGroup.controls['password'];
  }

  doLogin(data) {
    this.showLoader();
    this.authService.login(data).then((result) => {
      this.loading.dismiss();
      this.response = result;
      localStorage.setItem('token', this.response.access_token);
      this.navCtrl.setRoot(TabsPage);
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });


  }

  register() {
    this.navCtrl.push(RegisterPage);
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