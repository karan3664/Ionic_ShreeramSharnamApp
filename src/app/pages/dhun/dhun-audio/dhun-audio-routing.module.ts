import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DhunAudioPage } from './dhun-audio.page';

const routes: Routes = [
  {
    path: '',
    component: DhunAudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DhunAudioPageRoutingModule {}
