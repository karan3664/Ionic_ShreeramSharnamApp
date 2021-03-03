import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudioCdPage } from './audio-cd.page';

const routes: Routes = [
  {
    path: '',
    component: AudioCdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioCdPageRoutingModule {}
