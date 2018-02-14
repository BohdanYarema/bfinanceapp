import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/*
  Generated class for the InjectableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InjectableProvider {

  loading:any;
  wrong_credentials:any;
  sending:any;
  gps_cancel:any;
  gps_get:any;
  autentificating:any;
  image_upload_success:any;
  dismissed:any;
  searching:any;
  uploading:any;
  gps_enabled:any;
  gps_disabled:any;
  language:any;


  constructor(public translateService:TranslateService) {
    if(localStorage.getItem("language") !== null) {
      this.language = localStorage.getItem("language");
    } else {
      this.language = 'en';
    }
  }

  translate(lang) {
    return new Promise((resolve, reject) => {
      this.translateService.use(lang);
      this.translateService.get([
        'LOADING',
        'WRONG_CREDENTIALS',
        'SENDING',
        'GPS_CANCEL',
        'GPS_GET',
        'AUTENTIFICATING',
        'IMAGE_UPLOAD_SUCCESS',
        'DISMISSED',
        'SEARCHING',
        'UPLOADING',
        'GPS_ENABLED',
        'GPS_DISABLED'
      ]).subscribe(
        res => {
          resolve(res);
        }
      ); 
    });
  }
}
