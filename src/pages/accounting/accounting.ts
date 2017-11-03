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

    var date = new Date(parseInt(this.item.dates) * 1000);
    
    var curr_date   = date.getDate();
    var curr_month  = date.getMonth() + 1;
    var curr_year   = date.getFullYear();
    
    var result = (curr_date + "-" + curr_month + "-" + curr_year);

    this.item.dates = result;
  }

  ionViewDidLoad() {
    if (this.item.gps_x !== null || this.item.gps_y !== null) {
      this.loadMap(this.item.gps_x, this.item.gps_y); 
    }
  }

  loadMap(gps_x, gps_y) {
    this.mapElement = document.getElementById('map');
    this.mapElement.innerHTML = '';

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
        var icon = {
          url  : 'assets/imgs/map.png',
          size : { width: "32px", height: "32px;" }
        };

        // Now you can use all methods safely.
        this.map.addMarker({
            title: 'Ionic',
            icon: icon,
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
