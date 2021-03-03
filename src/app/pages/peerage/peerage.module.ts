import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeeragePageRoutingModule } from './peerage-routing.module';

import { PeeragePage } from './peerage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeeragePageRoutingModule
  ],
  declarations: [PeeragePage]
})
export class PeeragePageModule {}
