import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudioCdPageRoutingModule } from './audio-cd-routing.module';

import { AudioCdPage } from './audio-cd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudioCdPageRoutingModule
  ],
  declarations: [AudioCdPage]
})
export class AudioCdPageModule {}
