import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShreeAmritvaniPageRoutingModule } from './shree-amritvani-routing.module';

import { ShreeAmritvaniPage } from './shree-amritvani.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShreeAmritvaniPageRoutingModule
  ],
  declarations: [ShreeAmritvaniPage]
})
export class ShreeAmritvaniPageModule {}
