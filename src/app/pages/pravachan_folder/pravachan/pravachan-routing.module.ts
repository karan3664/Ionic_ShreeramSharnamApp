import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PravachanPage } from './pravachan.page';

const routes: Routes = [
  {
    path: '',
    component: PravachanPage,
    children: [

      {
        path: 'audio-cassettes',
        loadChildren: () => import('../audio-cassettes/audio-cassettes.module').then(m => m.AudioCassettesPageModule)
      },
      {
        path: 'audio-ramayan',
        loadChildren: () => import('../audio-ramayan/audio-ramayan.module').then(m => m.AudioRamayanPageModule)
      },
      {
        path: 'audio-cd',
        loadChildren: () => import('../audio-cd/audio-cd.module').then(m => m.AudioCdPageModule)
      },
      {
        path: 'audio-video',
        loadChildren: () => import('../audio-video/audio-video.module').then(m => m.AudioVideoPageModule)
      },
      {
        path: '',
        redirectTo: '/pravachan/audio-cassettes',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PravachanPageRoutingModule { }
