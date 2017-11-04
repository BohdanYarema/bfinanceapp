import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CategoriesPage } from '../pages/categories/categories';
import { ListPage } from '../pages/list/list';
import { FormPage } from '../pages/form/form';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AccountingPage } from '../pages/accounting/accounting';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';

import { HttpModule } from '@angular/http';
import {
  GoogleMaps,
 } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    CategoriesPage,
    ProfilePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    ListPage,
    FormPage,
    HomePage,
    AccountingPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CategoriesPage,
    ProfilePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    ListPage,
    FormPage,
    HomePage,
    AccountingPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    Geolocation,
    GoogleMaps,
    Diagnostic
  ]
})
export class AppModule {}
