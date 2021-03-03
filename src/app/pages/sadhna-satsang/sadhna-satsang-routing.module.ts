import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SadhnaSatsangPage } from './sadhna-satsang.page';

const routes: Routes = [
  {
    path: '',
    component: SadhnaSatsangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SadhnaSatsangPageRoutingModule {}
