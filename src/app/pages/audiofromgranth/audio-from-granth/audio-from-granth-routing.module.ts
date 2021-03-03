import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudioFromGranthPage } from './audio-from-granth.page';

const routes: Routes = [
  {
    path: '',
    component: AudioFromGranthPage,
    children: [
      {
        path: 'bhaktiprakash',
        children: [

          {
            path: '',
            loadChildren: () => import('../bhaktiprakash/bhaktiprakash.module').then(m => m.BhaktiprakashPageModule)

          }
        ]
      },
      {
        path: 'ramayansaar',
        children: [

          {
            path: '',
            loadChildren: () => import('../ramayansaar/ramayansaar.module').then(m => m.RamayansaarPageModule)

          }
        ]
      },
      {
        path: '',

        redirectTo: '/audio-from-granth/bhaktiprakash',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioFromGranthPageRoutingModule { }
