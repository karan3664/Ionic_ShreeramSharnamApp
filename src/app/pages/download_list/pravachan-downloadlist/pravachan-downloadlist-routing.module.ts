import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PravachanDownloadlistPage } from './pravachan-downloadlist.page';

const routes: Routes = [
  {
    path: '',
    component: PravachanDownloadlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PravachanDownloadlistPageRoutingModule {}
