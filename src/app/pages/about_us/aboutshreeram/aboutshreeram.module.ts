import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutshreeramPageRoutingModule } from './aboutshreeram-routing.module';

import { AboutshreeramPage } from './aboutshreeram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutshreeramPageRoutingModule
  ],
  declarations: [AboutshreeramPage]
})
export class AboutshreeramPageModule {}
