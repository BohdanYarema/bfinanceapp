import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  slides = [
    {
      title: "Welcome to the App!",
      description: "This app based on <b>Ionic Framework</b> and created for audit you finance!).",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "Your Categories",
      description: "<b>Categories</b> created for sort and ordering you account, category of your payment",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "Accounting",
      description: "The <b>Accounting</b> page created for saving you payments, click plus to add you payments.",
      image: "assets/img/ica-slidebox-img-3.png",
    },
    {
      title: "TimeLine",
      description: "The <b>Timeline</b> visit this page if you want to see the statistic of your payment per month, click plus to add you payments.",
      image: "assets/img/ica-slidebox-img-4.png",
    },
    {
      title: "Map",
      description: "The <b>Map</b> visit this page if you want to see where you been when you create you payment.",
      image: "assets/img/ica-slidebox-img-4.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    localStorage.setItem('intro', '1');
  }

  ionViewDidLoad() {
  }

  gotoHome(){
    this.navCtrl.push(HomePage);
  }
}
