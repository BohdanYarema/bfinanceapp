import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GoogleMap } from '@ionic-native/google-maps';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoadingController, ToastController } from 'ionic-angular';
import { InjectableProvider } from '../../providers/injectable/injectable';

declare var google :any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage {
  @ViewChild("map") mapElement: ElementRef;
  map: GoogleMap;
  reponse: any;
  loading : any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public injectableProvider: InjectableProvider
  ) {

  }

  ionViewDidLoad() {
    this.showLoader();
    this.authService.maps().then((result) => {
        this.reponse = result;
        if (this.reponse.length >= 1) {
           this.loadmap(this.reponse);
        }
        this.loading.dismiss();
    }, (err) => {
        this.loading.dismiss();
        this.presentToast(err);
    });
  }

  loadmap(data){
    let mapOprions = {
      center: {
        lat: parseFloat(data[0].gps_x),
        lng: parseFloat(data[0].gps_y)
      },
      zoom: 12,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOprions);

    for (var i = 0; i < data.length; i++) {
      var element = data[i];
      this.addMarker(parseFloat(element.gps_x), parseFloat(element.gps_y), element["Count(id)"]);
    }
  }

  addMarker(x,y,title){
    let marker = new google.maps.Marker({
      map : this.map,
      animation : google.maps.Animation.Drop,
      position : {
        lat: x,
        lng: y
      },
      icon: { 
        url : 'assets/icon/map.png',
      }
    });

    let content = title;
    this.addInfoWidnow(marker, content);
  }

  addInfoWidnow(marker, content){
    var infowindow = new google.maps.InfoWindow({
        content: content
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(this.map,marker);
    });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: this.injectableProvider.loading
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
