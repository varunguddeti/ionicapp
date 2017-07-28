import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gstinfo2Page } from './gstinfo2';

@NgModule({
  declarations: [
    Gstinfo2Page,
  ],
  imports: [
    IonicPageModule.forChild(Gstinfo2Page),
  ],
  exports: [
    Gstinfo2Page
  ]
})
export class Gstinfo2PageModule {}
