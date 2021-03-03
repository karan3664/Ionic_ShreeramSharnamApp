import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeerageThreePage } from './peerage-three.page';

const routes: Routes = [
  {
    path: '',
    component: PeerageThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeerageThreePageRoutingModule {}
