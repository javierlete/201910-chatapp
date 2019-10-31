import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.css']
})
export class FraseComponent implements OnInit {

  @Input() nombre: string;
  @Input() fecha: Date;
  @Input() texto: string;

  constructor() { }

  ngOnInit() {
  }

}
