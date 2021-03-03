import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BhajansDownloadlistPageRoutingModule } from './bhajans-downloadlist-routing.module';

import { BhajansDownloadlistPage } from './bhajans-downloadlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BhajansDownloadlistPageRoutingModule
  ],
  declarations: [BhajansDownloadlistPage]
})
export class BhajansDownloadlistPageModule {}
