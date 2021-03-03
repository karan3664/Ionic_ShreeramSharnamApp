import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeerageThreePageRoutingModule } from './peerage-three-routing.module';

import { PeerageThreePage } from './peerage-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeerageThreePageRoutingModule
  ],
  declarations: [PeerageThreePage]
})
export class PeerageThreePageModule {}
