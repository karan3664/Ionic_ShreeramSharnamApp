import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LikefacebookPageRoutingModule } from './likefacebook-routing.module';

import { LikefacebookPage } from './likefacebook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LikefacebookPageRoutingModule
  ],
  declarations: [LikefacebookPage]
})
export class LikefacebookPageModule {}
