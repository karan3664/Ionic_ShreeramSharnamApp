import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutshreeramPage } from './aboutshreeram.page';

const routes: Routes = [
  {
    path: '',
    component: AboutshreeramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutshreeramPageRoutingModule {}
