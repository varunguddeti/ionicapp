import { FaqPage } from './../faq/faq';
import { ReviewPage } from './../review/review';
import { Info3Page } from './../info3/info3';
import { InfoPage } from './../info/info';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
 navigateToInfoPage(): void
  {
    this.navCtrl.push(InfoPage)
  }
  navigateToGstinfoPage(): void
  {
    this.navCtrl.push(Info3Page)
  }
  navigateToReviewPage(): void
  {
    this.navCtrl.push(ReviewPage)
  }
  navigateToFaqPage(): void
  {
    this.navCtrl.push(FaqPage)
  }
}
