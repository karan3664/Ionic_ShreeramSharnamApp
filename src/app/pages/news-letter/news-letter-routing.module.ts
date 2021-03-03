import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsLetterPage } from './news-letter.page';

const routes: Routes = [
  {
    path: '',
    component: NewsLetterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsLetterPageRoutingModule {}
