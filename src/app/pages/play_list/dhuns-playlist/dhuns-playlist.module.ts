import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DhunsPlaylistPageRoutingModule } from './dhuns-playlist-routing.module';

import { DhunsPlaylistPage } from './dhuns-playlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DhunsPlaylistPageRoutingModule
  ],
  declarations: [DhunsPlaylistPage]
})
export class DhunsPlaylistPageModule {}
