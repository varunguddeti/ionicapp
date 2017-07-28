import { RatingPage } from './../rating/rating';
import { Component } from '@angular/core';
import { AppRate } from '@ionic-native/app-rate';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class ReviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private appRate: AppRate) {
  }
  rateMe(){
    this.appRate.preferences.storeAppURL = {
    ios: '< my_app_id >',
    android: 'market://details?id=< package_name >',
    windows: 'ms-windows-store://review/?ProductId=< Store_ID >'
    };
    this.appRate.promptForRating(true); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPage');
  }
  navigateToRatingPage(): void
  {
    this.navCtrl.push(RatingPage)
  }

}
