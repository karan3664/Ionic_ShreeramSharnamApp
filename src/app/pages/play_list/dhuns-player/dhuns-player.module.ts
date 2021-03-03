import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DhunsPlayerPageRoutingModule } from './dhuns-player-routing.module';

import { DhunsPlayerPage } from './dhuns-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DhunsPlayerPageRoutingModule
  ],
  declarations: [DhunsPlayerPage]
})
export class DhunsPlayerPageModule {}
