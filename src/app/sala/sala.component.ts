import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit, OnDestroy {

  nombre: string;
  id: number;

  private paramMapSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramMapSubscription = this.route.paramMap.subscribe(
      (params) => {
        this.id = +params.get('id');
        this.nombre = params.get('nombre');
      }
    );

  }

  ngOnDestroy(): void {
    this.paramMapSubscription.unsubscribe();
  }


}
