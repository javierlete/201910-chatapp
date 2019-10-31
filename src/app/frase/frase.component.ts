import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.css']
})
export class FraseComponent implements OnInit {

  @Input() nombre: string;
  @Input() fecha: Date;
  @Input() texto: string;

  @Output() pulsado = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('FRASE', this.texto);
    this.pulsado.emit(this.texto);
  }
}
