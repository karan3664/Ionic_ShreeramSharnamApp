import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShreeAmritvaniPage } from './shree-amritvani.page';

const routes: Routes = [
  {
    path: '',
    component: ShreeAmritvaniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShreeAmritvaniPageRoutingModule {}
