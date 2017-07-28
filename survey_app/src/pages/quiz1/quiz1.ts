import { SubmitPage } from './../submit/submit';
import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AfterViewInit } from '@angular/core';
import { Data } from './../../providers/data/data';
/**
 * Generated class for the Quiz1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-quiz1',
  templateUrl: 'quiz1.html',
})
export class Quiz1Page {
    
    @ViewChild('slides') slides: any;
 
    hasAnswered: boolean = false;
    score: number = 0;
 
    slideOptions: any;
    questions: any;
 
    constructor(public navCtrl: NavController, public dataService: Data) {
 
    }
 
    ionViewDidLoad() {
 
        this.slides.lockSwipes(true);
 
        this.dataService.load().then((data) => {
 
            data.map((question) => {
 
                let originalOrder = question.answers;
                question.answers = this.randomizeAnswers(originalOrder);
                return question;
 
            });     
 
            this.questions = data;
 
        });
 
    }
 
    nextSlide(){
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    }
 
    selectAnswer(answer, question){
 
        this.hasAnswered = true;
        answer.selected = true;
        question.flashCardFlipped = true;
 
        if(answer.correct){
            this.score++;
        }
 
        setTimeout(() => {
            this.hasAnswered = false;
            this.nextSlide();
            answer.selected = false;
            question.flashCardFlipped = false;
        }, 1000);
    }
 
    randomizeAnswers(rawAnswers: any[]): any[] {
 
        for (let i = rawAnswers.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = rawAnswers[i];
            rawAnswers[i] = rawAnswers[j];
            rawAnswers[j] = temp;
        }
 
        return rawAnswers;
 
    }
 
    restartQuiz() {
        this.score = 0;
        this.slides.lockSwipes(false);
        this.slides.slideTo(1, 1000);
        this.slides.lockSwipes(true);
    }
 
  navigateToSubmitPage(): void
  {
    this.navCtrl.push(SubmitPage)
  }
}
