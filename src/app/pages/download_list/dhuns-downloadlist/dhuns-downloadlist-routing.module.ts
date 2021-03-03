import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DhunsDownloadlistPage } from './dhuns-downloadlist.page';

;


const routes: Routes = [
  {
    path: '',
    component: DhunsDownloadlistPage,
    children: [
      {
        path: 'dhuns-audio',
        children: [
          {
            path: '',
            loadChildren: () => import('../dhuns-audio/dhuns-audio.module').then(m => m.DhunsAudioPageModule)
          },
        ]
      },


      {
        path: 'dhuns-video',
        children: [
          {
            path: '',
            loadChildren: () => import('../dhuns-video/dhuns-video.module').then(m => m.DhunsVideoPageModule)
          },
        ]
      },

      {
        path: '',
        redirectTo: '/dhuns-downloadlist/dhuns-audio',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DhunsDownloadlistPageRoutingModule { }
