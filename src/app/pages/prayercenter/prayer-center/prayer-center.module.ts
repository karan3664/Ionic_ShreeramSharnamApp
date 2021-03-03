import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrayerCenterPageRoutingModule } from './prayer-center-routing.module';

import { PrayerCenterPage } from './prayer-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrayerCenterPageRoutingModule
  ],
  declarations: [PrayerCenterPage]
})
export class PrayerCenterPageModule {}
