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
    this.translateService.use(this.language);

    translateService.get('LOADING').subscribe(
      value => {
        // value is our translated string
        this.loading = value;
      }
    )

    translateService.get('WRONG_CREDENTIALS').subscribe(
      value => {
        // value is our translated string
        this.wrong_credentials = value;
      }
    )

    translateService.get('SENDING').subscribe(
      value => {
        // value is our translated string
        this.sending = value;
      }
    )

    translateService.get('GPS_CANCEL').subscribe(
      value => {
        // value is our translated string
        this.gps_cancel = value;
      }
    )

    translateService.get('GPS_GET').subscribe(
      value => {
        // value is our translated string
        this.gps_get = value;
      }
    )

    translateService.get('AUTENTIFICATING').subscribe(
      value => {
        // value is our translated string
        this.autentificating = value;
      }
    )

    translateService.get('IMAGE_UPLOAD_SUCCESS').subscribe(
      value => {
        // value is our translated string
        this.image_upload_success = value;
      }
    )

    translateService.get('DISMISSED').subscribe(
      value => {
        // value is our translated string
        this.dismissed = value;
      }
    )

    translateService.get('SEARCHING').subscribe(
      value => {
        // value is our translated string
        this.searching = value;
      }
    )

    translateService.get('UPLOADING').subscribe(
      value => {
        // value is our translated string
        this.uploading = value;
      }
    )

    translateService.get('GPS_ENABLED').subscribe(
      value => {
        // value is our translated string
        this.gps_enabled = value;
      }
    )

    translateService.get('GPS_DISABLED').subscribe(
      value => {
        // value is our translated string
        this.gps_disabled = value;
      }
    )
  }
}
