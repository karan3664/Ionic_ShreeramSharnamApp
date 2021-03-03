import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BhajansPage } from './bhajans.page';

const routes: Routes = [
  {
    path: '',
    component: BhajansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BhajansPageRoutingModule {}
