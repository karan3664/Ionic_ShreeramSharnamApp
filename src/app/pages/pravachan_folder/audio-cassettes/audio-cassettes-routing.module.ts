import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudioCassettesPage } from './audio-cassettes.page';

const routes: Routes = [
  {
    path: '',
    component: AudioCassettesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioCassettesPageRoutingModule {}
