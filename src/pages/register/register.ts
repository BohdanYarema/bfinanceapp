import { Component } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { WelcomePage } from '../welcome/welcome';
import { InjectableProvider } from '../../providers/injectable/injectable';
import { TranslateService } from '@ngx-translate/core';

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
    public injectableProvider: InjectableProvider,
    public translateService:TranslateService
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

  login() {
    this.navCtrl.push(LoginPage);
  }


  doSignup(data) {
    this.showLoader();
    this.authService.register(data).then((result) => {
      this.loading.dismiss();
      this.response = result;

      let summary = Math.round(this.response.summary.summary * 100) / 100;

      this.profile = {
        username    : this.response.username,
        email       : this.response.email,
        avatar      : this.response.avatar,
        firstname   : this.response.firstname,
        lastname    : this.response.lastname,
        middlename  : this.response.middlename,
        gender      : this.response.gender,
        created_at  : this.response.created_at,
        summary     : summary
      };

      localStorage.setItem('token', this.response.access_token);
      localStorage.setItem('profile', JSON.stringify(this.profile));

      this.navCtrl.setRoot(HomePage);
    }, (err) => {
      this.loading.dismiss();
      this.translateService.get('DATA_ALREADY_TAKEN').subscribe((res: string) => {
        this.presentToast(res);
      });
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

  gotoWelcome(){
    this.navCtrl.push(WelcomePage);
  }

}
