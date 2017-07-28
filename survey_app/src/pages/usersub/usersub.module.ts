import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersubPage } from './usersub';

@NgModule({
  declarations: [
    UsersubPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersubPage),
  ],
  exports: [
    UsersubPage
  ]
})
export class UsersubPageModule {}
