import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items : MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon : 'pi pi-home',
        styleClass : 'item-menu'
      },
      {
        label : 'Nosotros',
        icon : 'pi pi-bell',
        styleClass : 'item-menu'
      },
      {
        label: 'Contacto',
        icon: 'pi pi-comment',
        styleClass : 'item-menu'
      }
    ]
  }

}
