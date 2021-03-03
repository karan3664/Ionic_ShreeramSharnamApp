import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PravachanPageRoutingModule } from './pravachan-routing.module';

import { PravachanPage } from './pravachan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PravachanPageRoutingModule
  ],
  declarations: [PravachanPage]
})
export class PravachanPageModule {}
