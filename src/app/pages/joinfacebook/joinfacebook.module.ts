import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoinfacebookPageRoutingModule } from './joinfacebook-routing.module';

import { JoinfacebookPage } from './joinfacebook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoinfacebookPageRoutingModule
  ],
  declarations: [JoinfacebookPage]
})
export class JoinfacebookPageModule {}
