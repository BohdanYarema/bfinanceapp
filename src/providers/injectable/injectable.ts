import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the InjectableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InjectableProvider {

  constructor(public http: Http) {
    console.log('Hello InjectableProvider Provider');
  }

  openMenu() {
    console.log(1);
  }

  closeMenu(){
    console.log(this);
  }

}
