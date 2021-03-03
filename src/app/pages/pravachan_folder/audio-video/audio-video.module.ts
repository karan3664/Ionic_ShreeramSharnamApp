import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudioVideoPageRoutingModule } from './audio-video-routing.module';

import { AudioVideoPage } from './audio-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudioVideoPageRoutingModule
  ],
  declarations: [AudioVideoPage]
})
export class AudioVideoPageModule {}
