import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DhunsVideoPageRoutingModule } from './dhuns-video-routing.module';

import { DhunsVideoPage } from './dhuns-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DhunsVideoPageRoutingModule
  ],
  declarations: [DhunsVideoPage]
})
export class DhunsVideoPageModule {}
