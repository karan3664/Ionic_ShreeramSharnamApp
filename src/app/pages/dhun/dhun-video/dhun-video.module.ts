import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DhunVideoPageRoutingModule } from './dhun-video-routing.module';

import { DhunVideoPage } from './dhun-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DhunVideoPageRoutingModule
  ],
  declarations: [DhunVideoPage]
})
export class DhunVideoPageModule {}
