import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { InjectableProvider } from '../../providers/injectable/injectable';
import { TranslateService } from '@ngx-translate/core';


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
  profile: object;

  constructor(
    public navCtrl: NavController,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public formBuilder: FormBuilder,
    public injectableProvider: InjectableProvider,
    public translateService:TranslateService
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

      console.log(err);

      this.loading.dismiss();    
      this.translateService.get('WRONG_CREDENTIALS').subscribe((res: string) => {
        this.presentToast(res);
      });
    });


  }

  register() {
    this.navCtrl.push(RegisterPage);
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

}
