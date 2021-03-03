import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JaapCountPage } from './jaap-count.page';

const routes: Routes = [
  {
    path: '',
    component: JaapCountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JaapCountPageRoutingModule {}
