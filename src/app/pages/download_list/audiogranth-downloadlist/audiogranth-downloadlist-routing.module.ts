import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudiogranthDownloadlistPage } from './audiogranth-downloadlist.page';

const routes: Routes = [
  {
    path: '',
    component: AudiogranthDownloadlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudiogranthDownloadlistPageRoutingModule {}
