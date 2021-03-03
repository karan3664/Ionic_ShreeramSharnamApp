import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudiogranthPlaylistPage } from './audiogranth-playlist.page';

const routes: Routes = [
  {
    path: '',
    component: AudiogranthPlaylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudiogranthPlaylistPageRoutingModule {}
