import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudiogranthPlaylistPageRoutingModule } from './audiogranth-playlist-routing.module';

import { AudiogranthPlaylistPage } from './audiogranth-playlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudiogranthPlaylistPageRoutingModule
  ],
  declarations: [AudiogranthPlaylistPage]
})
export class AudiogranthPlaylistPageModule {}
