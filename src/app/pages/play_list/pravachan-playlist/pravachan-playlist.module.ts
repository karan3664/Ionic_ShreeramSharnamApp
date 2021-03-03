import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PravachanPlaylistPageRoutingModule } from './pravachan-playlist-routing.module';

import { PravachanPlaylistPage } from './pravachan-playlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PravachanPlaylistPageRoutingModule
  ],
  declarations: [PravachanPlaylistPage]
})
export class PravachanPlaylistPageModule {}
