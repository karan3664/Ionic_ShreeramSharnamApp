import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudiogranthDownloadlistPageRoutingModule } from './audiogranth-downloadlist-routing.module';

import { AudiogranthDownloadlistPage } from './audiogranth-downloadlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudiogranthDownloadlistPageRoutingModule
  ],
  declarations: [AudiogranthDownloadlistPage]
})
export class AudiogranthDownloadlistPageModule {}
