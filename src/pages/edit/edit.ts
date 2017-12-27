import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

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

  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private transfer: FileTransfer
  ) {
  }

  ionViewDidLoad() {

  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
      console.log(this.imageURI);
    }, (err) => {
      console.log(err);
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
        this.imageFileName = this.response.image;
        loader.dismiss();
        this.presentToast("Image uploaded successfully");
    }, (err) => {
        loader.dismiss();
        this.presentToast(err);
    });
  }

}
