import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoornimaJaapCountdaysPageRoutingModule } from './poornima-jaap-countdays-routing.module';

import { PoornimaJaapCountdaysPage } from './poornima-jaap-countdays.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoornimaJaapCountdaysPageRoutingModule
  ],
  declarations: [PoornimaJaapCountdaysPage]
})
export class PoornimaJaapCountdaysPageModule {}
