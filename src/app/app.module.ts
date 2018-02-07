import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CategoriesPage } from '../pages/categories/categories';
import { ListPage } from '../pages/list/list';
import { FormPage } from '../pages/form/form';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AccountingPage } from '../pages/accounting/accounting';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { ChartsPage } from '../pages/charts/charts';
import { EditPage } from '../pages/edit/edit';
import { StatisticPage } from '../pages/statistic/statistic';
import { TimelinePage } from '../pages/timeline/timeline';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';

import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { Camera } from '@ionic-native/camera';

import { HttpModule, Http } from '@angular/http';
import {
  GoogleMaps,
 } from '@ionic-native/google-maps';
import { InjectableProvider } from '../providers/injectable/injectable';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    MyApp,
    CategoriesPage,
    ProfilePage,
    LoginPage,
    RegisterPage,
    ListPage,
    FormPage,
    HomePage,
    AccountingPage,
    MapPage,
    ChartsPage,
    EditPage,
    StatisticPage,
    TimelinePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CategoriesPage,
    ProfilePage,
    LoginPage,
    RegisterPage,
    ListPage,
    FormPage,
    HomePage,
    AccountingPage,
    MapPage,
    ChartsPage,
    EditPage,
    StatisticPage,
    TimelinePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    Geolocation,
    GoogleMaps,
    Diagnostic,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    InjectableProvider
  ]
})
export class AppModule {}
