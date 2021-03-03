import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeerageOnePageRoutingModule } from './peerage-one-routing.module';

import { PeerageOnePage } from './peerage-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeerageOnePageRoutingModule
  ],
  declarations: [PeerageOnePage]
})
export class PeerageOnePageModule {}
