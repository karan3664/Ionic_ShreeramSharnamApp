import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BhajansPlaylistPage } from './bhajans-playlist.page';

const routes: Routes = [
  {
    path: '',
    component: BhajansPlaylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BhajansPlaylistPageRoutingModule {}
