import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DhunsDownloadlistPageRoutingModule } from './dhuns-downloadlist-routing.module';

import { DhunsDownloadlistPage } from './dhuns-downloadlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DhunsDownloadlistPageRoutingModule
  ],
  declarations: [DhunsDownloadlistPage]
})
export class DhunsDownloadlistPageModule {}
