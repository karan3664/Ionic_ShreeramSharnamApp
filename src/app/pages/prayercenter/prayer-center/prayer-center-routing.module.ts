import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrayerCenterPage } from './prayer-center.page';

const routes: Routes = [
  {
    path: '',
    component: PrayerCenterPage,
    children: [

      {
        path: 'prayercenters',
        children: [

          {
            path: '',
            loadChildren: () => import('../prayercenters/prayercenters.module').then(m => m.PrayercentersPageModule)

          }
        ]
      },
      {
        path: 'regularsatsang',
        children: [

          {
            path: '',
            loadChildren: () => import('../regularsatsang/regularsatsang.module').then(m => m.RegularsatsangPageModule)

          }
        ]
      },
      {
        path: '',
        redirectTo: '/prayer-center/prayercenters',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrayerCenterPageRoutingModule { }
