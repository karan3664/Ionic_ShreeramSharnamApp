import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BhaktiprakashPageRoutingModule } from './bhaktiprakash-routing.module';

import { BhaktiprakashPage } from './bhaktiprakash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BhaktiprakashPageRoutingModule
  ],
  declarations: [BhaktiprakashPage]
})
export class BhaktiprakashPageModule {}
