import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DhunAudioPageRoutingModule } from './dhun-audio-routing.module';

import { DhunAudioPage } from './dhun-audio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DhunAudioPageRoutingModule
  ],
  declarations: [DhunAudioPage]
})
export class DhunAudioPageModule {}
