import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sala } from './sala';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private salas: Sala[] = [
    { id: 1, nombre: 'Global' },
    { id: 2, nombre: 'Privada 2' },
    { id: 3, nombre: 'Privada 3' }
  ];

  constructor() { }

  getSalas(): Observable<Sala[]> {
    return of(this.salas);
  }
}
