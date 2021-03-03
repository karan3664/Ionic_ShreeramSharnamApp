import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudioVideoPage } from './audio-video.page';

const routes: Routes = [
  {
    path: '',
    component: AudioVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioVideoPageRoutingModule {}
