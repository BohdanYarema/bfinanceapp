import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InjectableProvider } from '../../providers/injectable/injectable';
import { TranslateService } from '@ngx-translate/core';
import { MapPage }        from '../map/map';
import { TimelinePage }   from '../timeline/timeline';
import { CategoriesPage } from '../categories/categories';
import { HomePage }       from '../home/home';
import {
  GoogleMap,
 } from '@ionic-native/google-maps';
 
 declare var google :any;

@Component({
  selector: 'page-accounting',
  templateUrl: 'accounting.html',
})
export class AccountingPage {
  map: GoogleMap;
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  //@ViewChild("map") mapElement: ElementRef;

  item    : any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public injectableProvider: InjectableProvider,
    public translateService:TranslateService
  ) {
    this.item = navParams.data.item;

    var date = new Date(parseInt(this.item.dates) * 1000);
    
    var curr_date   = date.getDate();
    var curr_month  = date.getMonth();
    var curr_year   = date.getFullYear();
    
    //var result = (curr_date + "-" + curr_month + "-" + curr_year);

    this.item.dates   = curr_date;
    this.item.year    = curr_year;
    this.translateService.get(this.monthNames[curr_month].toUpperCase()).subscribe((res: string) => {
      this.item.mounth = res;
    });
  }

  segmentChanged(model){
    console.log(model.value);
  }

  ionViewDidLoad() {
    if (this.item.gps_x !== null || this.item.gps_y !== null) {
      //this.loadmap(this.item.gps_x, this.item.gps_y, this.item.name); 
    }
  }

  // loadmap(x,y,title){
  //   let mapOprions = {
  //     center: {
  //       lat: parseFloat(x),
  //       lng: parseFloat(y)
  //     },
  //     zoom: 12,
  //   };

  //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOprions);

  //   this.addMarker(parseFloat(x),parseFloat(y),title);
  // }

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
    var infowindow = new google.maps.InfoWindow({});

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(this.map,marker);
    });
  }


  gotoHome(){
    this.navCtrl.push(HomePage);
  }

  gotoCategories(category : object){
    this.navCtrl.push(CategoriesPage);
  }

  gotoMap(){
    this.navCtrl.push(MapPage);
  }

  gotoTimeline(){
    this.navCtrl.push(TimelinePage);
  }
}
