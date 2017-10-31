import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountingPage } from './accounting';

@NgModule({
  declarations: [
    AccountingPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountingPage),
  ],
})
export class AccountingPageModule {}
