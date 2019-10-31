import { Component, OnInit } from '@angular/core';
import { Sala } from '../sala';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  salas: Sala[];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getSalas().subscribe(
      salas => this.salas = salas
    );
  }

}
