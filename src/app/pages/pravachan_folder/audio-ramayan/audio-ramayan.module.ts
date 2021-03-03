import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudioRamayanPageRoutingModule } from './audio-ramayan-routing.module';

import { AudioRamayanPage } from './audio-ramayan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudioRamayanPageRoutingModule
  ],
  declarations: [AudioRamayanPage]
})
export class AudioRamayanPageModule {}
