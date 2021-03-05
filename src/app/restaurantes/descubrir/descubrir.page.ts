import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../restaurante.model';
import { RestauranteService } from '../restaurante.service';

@Component({
 selector: 'app-descubrir'
,
 templateUrl: './descubrir.page.html',
 styleUrls: ['./descubrir.page.scss'],
})
export class DescubrirPage implements OnInit {

 restaurantes: Restaurante[] = [];

 constructor(private restauranteService: RestauranteService) { }


 ngOnInit() {

 console.log('ANGULAR -> ngOnInit');

 }

 ionViewWillEnter(){

 console.log('IONIC -> ionViewWillEnter');
 this.restaurantes = this.restauranteService.getAllRestaurantes();

 }

 ionViewDidEnter(){

 console.log('IONIC -> ionViewDidEnter');

 }

 ionViewWillLeave(){

 console.log('IONIC -> ionViewWillLeave');

 }

 ionViewDidLeave(){

 console.log('IONIC -> ionViewDidLeave');

 }

 ngOnDestroy(){

 console.log('ANGULAR -> ngOnDestroy');

 }


}
