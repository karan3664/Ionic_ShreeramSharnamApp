import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DhunsAudioPageRoutingModule } from './dhuns-audio-routing.module';

import { DhunsAudioPage } from './dhuns-audio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DhunsAudioPageRoutingModule
  ],
  declarations: [DhunsAudioPage]
})
export class DhunsAudioPageModule {}
