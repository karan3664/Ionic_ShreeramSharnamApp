import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbouttrustPage } from './abouttrust.page';

const routes: Routes = [
  {
    path: '',
    component: AbouttrustPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbouttrustPageRoutingModule {}
