import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RamayansaarPageRoutingModule } from './ramayansaar-routing.module';

import { RamayansaarPage } from './ramayansaar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RamayansaarPageRoutingModule
  ],
  declarations: [RamayansaarPage]
})
export class RamayansaarPageModule {}
