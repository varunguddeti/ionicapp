import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gstinfo1Page } from './gstinfo1';

@NgModule({
  declarations: [
    Gstinfo1Page,
  ],
  imports: [
    IonicPageModule.forChild(Gstinfo1Page),
  ],
  exports: [
    Gstinfo1Page
  ]
})
export class Gstinfo1PageModule {}
