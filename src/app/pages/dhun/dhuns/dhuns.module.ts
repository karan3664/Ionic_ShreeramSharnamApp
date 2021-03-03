import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DhunsPageRoutingModule } from './dhuns-routing.module';

import { DhunsPage } from './dhuns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DhunsPageRoutingModule
  ],
  declarations: [DhunsPage]
})
export class DhunsPageModule {}
