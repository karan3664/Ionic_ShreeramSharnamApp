import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsDownloadPageRoutingModule } from './tabs-download-routing.module';

import { TabsDownloadPage } from './tabs-download.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsDownloadPageRoutingModule
  ],
  declarations: [TabsDownloadPage]
})
export class TabsDownloadPageModule {}
