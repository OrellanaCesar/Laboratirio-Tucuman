import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
  declarations: [],
  imports : [
    CommonModule
  ],
  exports: [
    MenubarModule,
    CardModule,
    CarouselModule
  ]
})
export class PrimeNgModule { }
