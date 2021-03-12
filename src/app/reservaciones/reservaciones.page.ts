import { ReservacionService } from './reservacion.service';
import { Reservacion } from './reservacion.module';
import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-reservaciones',
  templateUrl: './reservaciones.page.html',
  styleUrls: ['./reservaciones.page.scss'],

})
export class ReservacionesPage implements OnInit {

  reservaciones : Reservacion [] ;

  constructor(

    private reservacionService : ReservacionService
    ) { }

  ngOnInit() {

    this.reservaciones = this.reservacionService.getAllReservaciones () ;

  }

}
