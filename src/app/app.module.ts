import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
