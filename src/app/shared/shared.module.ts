import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    MenubarModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
