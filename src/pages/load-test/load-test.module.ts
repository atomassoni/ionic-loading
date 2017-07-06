import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoadTestPage } from './load-test';

@NgModule({
  declarations: [
    LoadTestPage,
  ],
  imports: [
    IonicPageModule.forChild(LoadTestPage),
  ],
  exports: [
    LoadTestPage
  ]
})
export class LoadTestPageModule {}
