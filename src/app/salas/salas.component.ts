import { Component, OnInit } from '@angular/core';
import { Sala } from '../sala';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  salas: Sala[] = [
    { id: 1, nombre: 'Global' },
    { id: 2, nombre: 'Privada 2' },
    { id: 3, nombre: 'Privada 3' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
