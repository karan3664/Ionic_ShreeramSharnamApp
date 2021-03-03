import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeerageTwoPage } from './peerage-two.page';

const routes: Routes = [
  {
    path: '',
    component: PeerageTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeerageTwoPageRoutingModule {}
