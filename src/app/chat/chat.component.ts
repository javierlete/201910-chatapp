import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  texto: string;

  constructor() { }

  ngOnInit() {
  }

  onPulsado(texto: string) {
    console.log('CHAT', texto);
    this.texto = texto;
  }
}
