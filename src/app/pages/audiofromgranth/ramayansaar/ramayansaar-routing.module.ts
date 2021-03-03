import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RamayansaarPage } from './ramayansaar.page';

const routes: Routes = [
  {
    path: '',
    component: RamayansaarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RamayansaarPageRoutingModule {}
