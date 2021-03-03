import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DhunsPlayerPage } from './dhuns-player.page';

const routes: Routes = [
  {
    path: '',
    component: DhunsPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DhunsPlayerPageRoutingModule {}
