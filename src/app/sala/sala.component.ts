import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  nombre: string;
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const datos = this.route.snapshot.paramMap;
    this.id = +datos.get('id');
    this.nombre = datos.get('nombre');
  }

}
