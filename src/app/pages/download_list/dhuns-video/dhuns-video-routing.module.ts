import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DhunsVideoPage } from './dhuns-video.page';

const routes: Routes = [
  {
    path: '',
    component: DhunsVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DhunsVideoPageRoutingModule {}
