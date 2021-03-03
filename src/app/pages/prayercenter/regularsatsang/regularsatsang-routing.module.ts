import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegularsatsangPage } from './regularsatsang.page';

const routes: Routes = [
  {
    path: '',
    component: RegularsatsangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegularsatsangPageRoutingModule {}
