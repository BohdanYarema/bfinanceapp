import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoadingController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;
  reponse: any;
  loading : any;

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public authService: AuthServiceProvider,
      public loadingCtrl: LoadingController,
      public toastCtrl: ToastController
    ) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
        this.showLoader();
        this.authService.charts().then((result) => {
            this.reponse = result;
            var doughnut    =  this.reponse.doughnut;
            var bar         =  this.reponse.bar;
            var line        =  this.reponse.line;

            this.setCharts("doughnut", doughnut);
            this.setCharts("bar", bar);
            this.setCharts("line", line);

            this.loading.dismiss();
        }, (err) => {
            this.loading.dismiss();
            this.presentToast(err);
        });
    }

    showLoader(){
        this.loading = this.loadingCtrl.create({
            content: 'Serching...'
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
            console.log('Dismissed toast');
        });

        toast.present();
    }

    setCharts(type, data){
        switch(type) {
            case 'line':
                var collection = {
                    "label" : [],
                    "data"  : []
                }

                for(var item in data){
                    collection.label.push(data[item].name); 
                    collection.data.push(data[item].count); 
                }
                this.lineChart = new Chart(this.lineCanvas.nativeElement, {
                    type: 'line',
                    data: {
                        labels: collection.label,
                        datasets: [
                            {
                                label: "Count of accounting per month",
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: "#00ffff",
                                borderColor: "#00ffff",
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: "#0000ff",
                                pointBackgroundColor: "#fff",
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "#0000ff",
                                pointHoverBorderColor: "#0000ff",
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: collection.data,
                                spanGaps: false,
                            }
                        ]
                    }
                });  
                break;
            case 'bar':
                var coolection = {
                    "label" : [],
                    "data"  : [],
                    "color" : []
                }
                for (var i = 0; i < data.length; i++) {
                    var element = data[i];
                    coolection.label.push(element.category.name); 
                    coolection.data.push(parseInt(element.hour)); 
                    coolection.color.push(element.category.color); 
                }
                this.barChart = new Chart(this.barCanvas.nativeElement, {
            
                    type: 'bar',
                    data: {
                        labels: coolection.label,
                        datasets: [{
                            label: 'Most popular time to buy per category',
                            data: coolection.data,
                            backgroundColor: coolection.color,
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
            
                });
                break;
            case 'doughnut':
                var coolection = {
                    "label" : [],
                    "data"  : [],
                    "color" : []
                }
                for (var i = 0; i < data.length; i++) {
                    var element = data[i];
                    coolection.label.push(element.name); 
                    coolection.data.push(element.accountings.length); 
                    coolection.color.push(element.color); 
                }
                this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
                    type: 'doughnut',
                    data: {
                        labels: coolection.label,
                        datasets: [{
                            label: 'Count of by per category',
                            data: coolection.data,
                            backgroundColor: coolection.color,
                        }]
                    }
                });
            break;
        }
    }

}
