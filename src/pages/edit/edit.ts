import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { ProfilePage } from '../profile/profile';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  imageURI:any;
  imageFileName:any;
  profile: any;
  response: any;
  loading : any;

  editGroup   : FormGroup;
  firstname   : AbstractControl;
  lastname    : AbstractControl;
  middlename  : AbstractControl;
  gender      : AbstractControl;

  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authService: AuthServiceProvider,
    private transfer: FileTransfer,
    public formBuilder: FormBuilder,
  ) {

    // formbuilder for form
    this.editGroup = formBuilder.group({
      firstname   :['', Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(255),
          Validators.pattern('[a-zA-Z ]*')
      ])],
      lastname   :['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255),
        Validators.pattern('[a-zA-Z ]*')
      ])],
      middlename   :['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255),
        Validators.pattern('[a-zA-Z ]*')
      ])],
      gender   :['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]*')
      ])],  
    });

    this.firstname  = this.editGroup.controls['firstname'];
    this.lastname   = this.editGroup.controls['lastname'];
    this.middlename = this.editGroup.controls['middlename'];
    this.gender     = this.editGroup.controls['gender'];
  }

  ionViewDidLoad() {

  }

  doSignup(data) {
    this.showLoader();
    this.authService.edit(data).then((result) => {
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

      this.navCtrl.setRoot(ProfilePage);
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
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
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    //loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }

    fileTransfer.upload(this.imageURI, 'http://devservice.pro/api/upload/upload', options)
      .then((data) => {
        this.response = JSON.parse(data.response);
        this.profile = JSON.parse(localStorage.getItem('profile'));
        this.profile.avatar = this.response.image;
        localStorage.setItem('profile', JSON.stringify(this.profile));
        loader.dismiss();
        this.presentToast("Image uploaded successfully");

        this.navCtrl.push(ProfilePage);
    }, (err) => {
        loader.dismiss();
        this.presentToast(err);
    });
  }

}
