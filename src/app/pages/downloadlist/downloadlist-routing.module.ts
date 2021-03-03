import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownloadlistPage } from './downloadlist.page';

const routes: Routes = [
  {
    path: '',
    component: DownloadlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownloadlistPageRoutingModule {}
