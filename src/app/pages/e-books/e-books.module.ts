import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EBooksPageRoutingModule } from './e-books-routing.module';

import { EBooksPage } from './e-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EBooksPageRoutingModule
  ],
  declarations: [EBooksPage]
})
export class EBooksPageModule {}
