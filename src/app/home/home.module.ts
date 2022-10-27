import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


import { CarouselComponent } from './carousel/carousel.component';
import { PrincipalComponent } from './principal/principal.component';



@NgModule({
  declarations: [
    CarouselComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports : [
    PrincipalComponent
  ]
})
export class HomeModule { }
