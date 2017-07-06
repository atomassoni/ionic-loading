import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoadTestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'load-test'
})
@Component({
  selector: 'page-load-test',
  templateUrl: 'load-test.html',
})
export class LoadTestPage {
  loader: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadTestPage');
    this.presentLoading();
    this.mockLoadInteractions();

  }
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Getting interactions...",
    });
    this.loader.present();
  }

  dismissLoading() {
    this.loader.dismiss();
  }

  mockLoadInteractions() {
    setTimeout(() => {
      this.dismissLoading();
    }, 3000)
  }
}
