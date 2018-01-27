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
  profile_info: any;
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
    this.profile_info = JSON.parse(localStorage.getItem('profile'));

    console.log(this.profile_info);
    
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

  doEdit(data) {

    this.showLoader();
    
    this.authService.editProfile(data).then((result) => {
      this.loading.dismiss();
      this.response = result;

      this.profile = JSON.parse(localStorage.getItem('profile'));
      this.profile.firstname  = this.response.profile.firstname;
      this.profile.lastname   = this.response.profile.lastname;
      this.profile.middlename = this.response.profile.middlename;
      this.profile.gender     = this.response.profile.gender;

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

    this.profile = JSON.parse(localStorage.getItem('profile'));


    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      params: {
        username:this.profile.username
      }
    }

    fileTransfer.upload(this.imageURI, 'http://devservice.pro/api/upload/upload', options)
      .then((data) => {
        console.log(JSON.stringify(data));
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
