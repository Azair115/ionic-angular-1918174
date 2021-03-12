import { Reservacion } from './reservacion.module';
import { Injectable } from '@angular/core';

@Injectable({

  providedIn: 'root'

})
export class ReservacionService {

  private reservaciones : Reservacion [] = [

    { id : 1 ,restaurante : 'Spikes' , horario : 'Viernes 19 de Marzo - 18:00hrs' , imgUrl : 'https://10619-2.s.cdn12.com/rests/original/401_114623198.jpg' } ,

    { id : 2 ,restaurante : 'Muncher House' , horario : 'Sábado 20 de Marzo - 17:00hrs' , imgUrl : 'https://media-exp1.licdn.com/dms/image/C4E0BAQGtrMtD_8zW7g/company-logo_200_200/0/1534631104089?e=2159024400&v=beta&t=R1NPp78RbCUq88V65HgE7iNBwGUckRnIO7DnlRbP0J0' } ,

    { id : 3 ,restaurante : 'Las Alitas' , horario : 'Domingo 21 de Marzo - 19:00hrs' , imgUrl : 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052011/las_alitas.ai_.png?itok=C8ine3VI' }

  ] ;

  constructor() { }

  getAllReservaciones () {

    return [...this.reservaciones] ;

  }

}
