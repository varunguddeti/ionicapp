import { Gstinfo6Page } from './../gstinfo6/gstinfo6';
import { Gstinfo5Page } from './../gstinfo5/gstinfo5';
import { Gstinfo4Page } from './../gstinfo4/gstinfo4';
import { Gstinfo3Page } from './../gstinfo3/gstinfo3';
import { Gstinfo2Page } from './../gstinfo2/gstinfo2';
import { Gstinfo1Page } from './../gstinfo1/gstinfo1';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Info3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-info3',
  templateUrl: 'info3.html',
})
export class Info3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Info3Page');
  }
  navigateToGstinfo1Page(): void
  {
    this.navCtrl.push(Gstinfo1Page)
  }
  navigateToGstinfo2Page(): void
  {
    this.navCtrl.push(Gstinfo2Page)
  }
  navigateToGstinfo3Page(): void
  {
    this.navCtrl.push(Gstinfo3Page)
  }
  navigateToGstinfo4Page(): void
  {
    this.navCtrl.push(Gstinfo4Page)
  }
  navigateToGstinfo5Page(): void
  {
    this.navCtrl.push(Gstinfo5Page)
  }
  navigateToGstinfo6Page(): void
  {
    this.navCtrl.push(Gstinfo6Page)
  }

}
