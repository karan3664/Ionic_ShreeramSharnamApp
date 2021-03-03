import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DhunsPage } from './dhuns.page';

const routes: Routes = [
  {
    path: '',
    component: DhunsPage,
    children: [

      {
        path: 'dhun-audio',
        children: [

          {
            path: '',
            loadChildren: () => import('../dhun-audio/dhun-audio.module').then(m => m.DhunAudioPageModule)

          }
        ]
      },
      {
        path: 'dhun-video',
        children: [

          {
            path: '',
            loadChildren: () => import('../dhun-video/dhun-video.module').then(m => m.DhunVideoPageModule)

          }
        ]
      },
      {
        path: '',
        redirectTo: '/dhuns/dhun-audio',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DhunsPageRoutingModule { }
