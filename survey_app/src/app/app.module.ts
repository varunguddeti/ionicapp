import { Data } from './../providers/data/data';
import { Http } from '@angular/http';
import { Gstinfo6Page } from './../pages/gstinfo6/gstinfo6';
import { Gstinfo5Page } from './../pages/gstinfo5/gstinfo5';
import { FaqPage } from './../pages/faq/faq';
import { UsersubPage } from './../pages/usersub/usersub';
import { RatingPage } from './../pages/rating/rating';
import { ReviewPage } from './../pages/review/review';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {InfoPage} from '../pages/info/info';
import { Quiz3Page } from './../pages/quiz3/quiz3';
import { Quiz2Page } from './../pages/quiz2/quiz2';
import { Quiz1Page } from './../pages/quiz1/quiz1';
import { Info2Page } from './../pages/info2/info2';
import { Gstinfo4Page } from './../pages/gstinfo4/gstinfo4';
import { Gstinfo3Page } from './../pages/gstinfo3/gstinfo3';
import { Gstinfo2Page } from './../pages/gstinfo2/gstinfo2';
import { Gstinfo1Page } from './../pages/gstinfo1/gstinfo1';
import { Info3Page } from './../pages/info3/info3';
import { SubmitPage } from './../pages/submit/submit';
import { HttpModule } from '@angular/http';
import { Data1 } from '../providers/data1/data1'
import { Data2 } from '../providers/data2/data2';
import { Data3 } from '../providers/data3/data3';
import { AppRate } from '@ionic-native/app-rate';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
    Info2Page,
    Quiz1Page,
    Quiz2Page,
    Quiz3Page,
    SubmitPage,
    Info3Page,
    Gstinfo1Page,
    Gstinfo2Page,
    Gstinfo3Page,
    Gstinfo4Page,
    Gstinfo5Page,
    Gstinfo6Page,
    RatingPage,
    ReviewPage,
    UsersubPage,
    FaqPage
    
  ],
  imports: [
    BrowserModule,
     HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoPage,
    Info2Page,
    Quiz1Page,
    Quiz2Page,
    Quiz3Page,
    SubmitPage,
    Info3Page,
    Gstinfo1Page,
    Gstinfo2Page,
    Gstinfo3Page,
    Gstinfo4Page,
    Gstinfo5Page,
    Gstinfo6Page,
    RatingPage,
    ReviewPage,
    UsersubPage,
    FaqPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppRate,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data,
    Data1,
    Data2,
    Data3,
    
  ]
})
export class AppModule {}
