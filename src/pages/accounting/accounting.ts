import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-accounting',
  templateUrl: 'accounting.html',
})
export class AccountingPage {

  map: GoogleMap;
  mapElement: HTMLElement;

  item    : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    console.log(this.item);
    //this.loadMap(this.item.gps_lat, this.item.gps_lon);
  }

  loadMap(gps_lat, gps_lon) {
    this.mapElement = document.getElementById('map');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: gps_lat,
          lng: gps_lon
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = this.googleMaps.create(this.mapElement, mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        console.log('Map is ready!');
        // Now you can use all methods safely.
        this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: gps_lat,
              lng: gps_lon
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });
  }

}
