import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LikefacebookPage } from './likefacebook.page';

const routes: Routes = [
  {
    path: '',
    component: LikefacebookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LikefacebookPageRoutingModule {}
