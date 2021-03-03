import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudioFromGranthPageRoutingModule } from './audio-from-granth-routing.module';

import { AudioFromGranthPage } from './audio-from-granth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudioFromGranthPageRoutingModule
  ],
  declarations: [AudioFromGranthPage]
})
export class AudioFromGranthPageModule {}
