import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nueva-frase',
  templateUrl: './nueva-frase.component.html',
  styleUrls: ['./nueva-frase.component.css']
})
export class NuevaFraseComponent implements OnInit {

  @Input() texto: string;

  constructor() { }

  ngOnInit() {
  }

}
