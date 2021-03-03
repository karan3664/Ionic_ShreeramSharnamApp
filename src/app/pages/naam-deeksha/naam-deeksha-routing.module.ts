import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaamDeekshaPage } from './naam-deeksha.page';

const routes: Routes = [
  {
    path: '',
    component: NaamDeekshaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaamDeekshaPageRoutingModule {}
