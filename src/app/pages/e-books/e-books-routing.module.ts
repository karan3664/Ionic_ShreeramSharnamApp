import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EBooksPage } from './e-books.page';

const routes: Routes = [
  {
    path: '',
    component: EBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EBooksPageRoutingModule {}
