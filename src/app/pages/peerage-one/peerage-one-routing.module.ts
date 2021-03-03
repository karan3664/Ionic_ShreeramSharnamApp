import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeerageOnePage } from './peerage-one.page';

const routes: Routes = [
  {
    path: '',
    component: PeerageOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeerageOnePageRoutingModule {}
