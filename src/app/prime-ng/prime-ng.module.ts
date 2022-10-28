import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [],
  imports : [
    CommonModule
  ],
  exports: [
    MenubarModule,
    CardModule,
    CarouselModule,
    ButtonModule,
  ]
})
export class PrimeNgModule { }
