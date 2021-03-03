import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrayercentersPage } from './prayercenters.page';

const routes: Routes = [
  {
    path: '',
    component: PrayercentersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrayercentersPageRoutingModule {}
