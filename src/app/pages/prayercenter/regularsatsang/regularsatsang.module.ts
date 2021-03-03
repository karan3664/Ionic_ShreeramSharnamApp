import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegularsatsangPageRoutingModule } from './regularsatsang-routing.module';

import { RegularsatsangPage } from './regularsatsang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegularsatsangPageRoutingModule
  ],
  declarations: [RegularsatsangPage]
})
export class RegularsatsangPageModule {}
