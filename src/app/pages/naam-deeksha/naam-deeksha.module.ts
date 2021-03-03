import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaamDeekshaPageRoutingModule } from './naam-deeksha-routing.module';

import { NaamDeekshaPage } from './naam-deeksha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaamDeekshaPageRoutingModule
  ],
  declarations: [NaamDeekshaPage]
})
export class NaamDeekshaPageModule {}
