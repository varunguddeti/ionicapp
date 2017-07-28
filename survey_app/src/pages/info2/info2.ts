import { Quiz4Page } from './../quiz4/quiz4';
import { Quiz3Page } from './../quiz3/quiz3';
import { Quiz2Page } from './../quiz2/quiz2';
import { Quiz1Page } from './../quiz1/quiz1';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Info2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-info2',
  templateUrl: 'info2.html',
})
export class Info2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Info2Page');
  }
  navigateToQuiz1Page(): void
  {
    this.navCtrl.push(Quiz1Page)
  }
  navigateToQuiz2Page(): void
    {
      this.navCtrl.push(Quiz2Page)
    }
  navigateToQuiz3Page(): void
    {
      this.navCtrl.push(Quiz3Page)
    }


}
