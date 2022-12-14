import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PrincipalComponent } from './home/principal/principal.component';

const routes : Routes = [
  {
    path : '',
    component: PrincipalComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path : '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
