import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BhajansPlaylistPageRoutingModule } from './bhajans-playlist-routing.module';

import { BhajansPlaylistPage } from './bhajans-playlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BhajansPlaylistPageRoutingModule
  ],
  declarations: [BhajansPlaylistPage]
})
export class BhajansPlaylistPageModule {}
