import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BhajansPageRoutingModule } from './bhajans-routing.module';

import { BhajansPage } from './bhajans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BhajansPageRoutingModule
  ],
  declarations: [BhajansPage]
})
export class BhajansPageModule {}
