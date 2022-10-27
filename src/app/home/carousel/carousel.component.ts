import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  cars : string [] = [];
  constructor() { }

  ngOnInit(): void {

    this.cars = ['laboratorio1.jpg', 'laboratorio2.webp', 'laboratorio3.jfif']
  }

}
