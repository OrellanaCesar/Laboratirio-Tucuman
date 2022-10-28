import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosPrincipalComponent } from './nosotros-principal/nosotros-principal.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    NosotrosPrincipalComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports : [
    NosotrosPrincipalComponent
  ]
})
export class NosotrosModule { }
