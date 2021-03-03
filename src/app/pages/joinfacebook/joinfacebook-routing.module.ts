import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinfacebookPage } from './joinfacebook.page';

const routes: Routes = [
  {
    path: '',
    component: JoinfacebookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinfacebookPageRoutingModule {}
