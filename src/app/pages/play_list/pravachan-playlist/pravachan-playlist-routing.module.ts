import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PravachanPlaylistPage } from './pravachan-playlist.page';

const routes: Routes = [
  {
    path: 'PravachanPlaylistPage',
    component: PravachanPlaylistPage,
    children: [
      {
        path: 'pravachan-ramayanji',
        children: [
          {
            path: '',
            loadChildren: './pages/play_list/pravachan-ramayanji/pravachan-ramayanji.module'
          }
        ]
      },
      {
        path: 'pravachan-cassettes',
        children: [
          {
            path: '',
            loadChildren: './pages/play_list/pravachan-cassettes/pravachan-cassettes.module'
          }
        ]
      },
      {
        path: 'pravachan-cd',
        children: [
          {
            path: '',
            loadChildren: './pages/play_list/pravachan-cd/pravachan-cd.module'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/PravachanPlaylistPage/pravachan-playlist',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PravachanPlaylistPageRoutingModule {}
