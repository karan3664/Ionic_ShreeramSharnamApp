import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbouttrustPageRoutingModule } from './abouttrust-routing.module';

import { AbouttrustPage } from './abouttrust.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbouttrustPageRoutingModule
  ],
  declarations: [AbouttrustPage]
})
export class AbouttrustPageModule {}
