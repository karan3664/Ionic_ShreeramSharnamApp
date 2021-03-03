import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JaapCountPageRoutingModule } from './jaap-count-routing.module';

import { JaapCountPage } from './jaap-count.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JaapCountPageRoutingModule
  ],
  declarations: [JaapCountPage]
})
export class JaapCountPageModule {}
