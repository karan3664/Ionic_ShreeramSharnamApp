import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SadhnaSatsangPageRoutingModule } from './sadhna-satsang-routing.module';

import { SadhnaSatsangPage } from './sadhna-satsang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SadhnaSatsangPageRoutingModule
  ],
  declarations: [SadhnaSatsangPage]
})
export class SadhnaSatsangPageModule {}
