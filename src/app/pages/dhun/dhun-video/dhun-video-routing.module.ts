import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DhunVideoPage } from './dhun-video.page';

const routes: Routes = [
  {
    path: '',
    component: DhunVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DhunVideoPageRoutingModule {}
