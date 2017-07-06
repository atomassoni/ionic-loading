import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading: any;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  goToLoadTest() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
    setTimeout(() => {
      this.navCtrl.push('load-test');
    }, 2000);
  }

  goToLoadTestRN() {
    this.navCtrl.push('load-test');
  }

}
