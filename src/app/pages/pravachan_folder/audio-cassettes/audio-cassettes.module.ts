import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudioCassettesPageRoutingModule } from './audio-cassettes-routing.module';

import { AudioCassettesPage } from './audio-cassettes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudioCassettesPageRoutingModule
  ],
  declarations: [AudioCassettesPage]
})
export class AudioCassettesPageModule {}
