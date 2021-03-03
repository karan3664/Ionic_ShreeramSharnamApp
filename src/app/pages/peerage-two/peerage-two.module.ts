import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeerageTwoPageRoutingModule } from './peerage-two-routing.module';

import { PeerageTwoPage } from './peerage-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeerageTwoPageRoutingModule
  ],
  declarations: [PeerageTwoPage]
})
export class PeerageTwoPageModule {}
