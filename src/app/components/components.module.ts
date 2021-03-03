import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlidesComponent } from './slides/slides.component';

import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [SlidesComponent],
  exports: [SlidesComponent],

  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
