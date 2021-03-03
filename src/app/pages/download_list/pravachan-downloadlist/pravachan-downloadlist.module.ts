import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PravachanDownloadlistPageRoutingModule } from './pravachan-downloadlist-routing.module';

import { PravachanDownloadlistPage } from './pravachan-downloadlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PravachanDownloadlistPageRoutingModule
  ],
  declarations: [PravachanDownloadlistPage]
})
export class PravachanDownloadlistPageModule {}
