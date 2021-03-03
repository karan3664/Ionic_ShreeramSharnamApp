import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BhajansDownloadlistPage } from './bhajans-downloadlist.page';

const routes: Routes = [
  {
    path: '',
    component: BhajansDownloadlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BhajansDownloadlistPageRoutingModule {}
