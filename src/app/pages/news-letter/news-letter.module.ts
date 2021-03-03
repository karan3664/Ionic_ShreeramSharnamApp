import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsLetterPageRoutingModule } from './news-letter-routing.module';

import { NewsLetterPage } from './news-letter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsLetterPageRoutingModule
  ],
  declarations: [NewsLetterPage]
})
export class NewsLetterPageModule {}
