import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsPage } from './about-us.page';

const routes: Routes = [
  {
    path: '',
    component: AboutUsPage,
    children: [
      {
        path: 'aboutshreeram',
        children: [

          {
            path: '',
            loadChildren: () => import('../aboutshreeram/aboutshreeram.module').then(m => m.AboutshreeramPageModule)
          }
        ]
      },
      {

        path: 'abouttrust',
        children: [

          {
            path: '',
            loadChildren: () => import('../abouttrust/abouttrust.module').then(m => m.AbouttrustPageModule)

          }
        ]
      },

      {
        path: '',
        redirectTo: '/about-us/aboutshreeram',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsPageRoutingModule { }
