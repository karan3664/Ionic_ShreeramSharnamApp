import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudioRamayanPage } from './audio-ramayan.page';

const routes: Routes = [
  {
    path: '',
    component: AudioRamayanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioRamayanPageRoutingModule {}
