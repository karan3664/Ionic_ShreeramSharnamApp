import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeeragePage } from './peerage.page';

const routes: Routes = [
  {
    path: '',
    component: PeeragePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeeragePageRoutingModule {}
