import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoornimaJaapCountdaysPage } from './poornima-jaap-countdays.page';

const routes: Routes = [
  {
    path: '',
    component: PoornimaJaapCountdaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoornimaJaapCountdaysPageRoutingModule {}
