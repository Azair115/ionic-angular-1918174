import { Oferta } from './oferta.module';
import { Injectable } from '@angular/core';

@Injectable({

  providedIn: 'root'

})

export class OfertaService {

  private ofertas : Oferta [] = [

    { id : 1 ,titulo : 'Spikes' , subtitulo : 'Buffalo Fries a sólo 69 pesos!!' , imgUrl : 'https://welovespikes.com/img/mobile/home/sliders/BuffaloFries.png' , terminos : 'Aplica solo en mostrador' } ,

    { id : 2 ,titulo : 'Muncher House' , subtitulo : 'Combos para compartir: A un excelente precio' , imgUrl : 'https://4.bp.blogspot.com/-7sVb-gFzm94/WZH_2HHUiuI/AAAAAAAAEV4/BLzSTHh411IMugfDZORYCyfiF1iHpxePwCEwYBhgL/s1600/1.jpg' , terminos : 'Aplica sólo de Lunes a Viernes de 12:00 a 19:00' } ,

    { id : 3 ,titulo : 'Las Alitas' , subtitulo : '¡Boneless hasta 79 pesos!' , imgUrl : 'https://mk0cazaofertassmxlbf.kinstacdn.com/wp-content/uploads/2020/06/Las-Alitas-Boneless-030620-00.jpeg' , terminos : 'De Lunes a Domingo' }

  ] ;

  constructor() { }

  getAllOfertas () {

    return [...this.ofertas] ;

  }

}
