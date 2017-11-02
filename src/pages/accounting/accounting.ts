import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
 } from '@ionic-native/google-maps';

@Component({
  selector: 'page-accounting',
  templateUrl: 'accounting.html',
})
export class AccountingPage {
  map: GoogleMap;
  mapElement: HTMLElement;

  item    : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    if (this.item.gps_x === null || this.item.gps_y === null) {
      console.log("no map");
    } else {
      this.loadMap(this.item.gps_x, this.item.gps_y); 
    }
  }

  loadMap(gps_x, gps_y) {
    this.mapElement = document.getElementById('map');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: gps_x,
          lng: gps_y
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = new GoogleMap(this.mapElement, mapOptions);
    //this.map = this.googleMaps.create(this.mapElement, mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        console.log('Map is ready!');
        // Now you can use all methods safely.
        this.map.addMarker({
            title: 'Ionic',
            icon: 'pin',
            animation: 'DROP',
            position: {
              lat: gps_x,
              lng: gps_y
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
