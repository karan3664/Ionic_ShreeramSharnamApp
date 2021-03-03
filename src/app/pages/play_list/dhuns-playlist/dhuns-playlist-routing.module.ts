import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DhunsPlaylistPage } from './dhuns-playlist.page';



const routes: Routes = [
  {
    path: '',
    component: DhunsPlaylistPage,
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
        redirectTo: '/dhuns-playlist/dhuns-audio',
        pathMatch: 'full'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DhunsPlaylistPageRoutingModule { }
