import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownloadlistPageRoutingModule } from './downloadlist-routing.module';

import { DownloadlistPage } from './downloadlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownloadlistPageRoutingModule
  ],
  declarations: [DownloadlistPage]
})
export class DownloadlistPageModule {}
