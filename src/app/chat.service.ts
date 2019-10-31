import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sala } from './sala';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url = 'http://localhost:3000/';
  private salasUrl = this.url + 'salas';

  private salas: Sala[];

  constructor(private http: HttpClient) { }

  getSalas(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.salasUrl);
  }
}
