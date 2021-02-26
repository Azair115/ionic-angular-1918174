import { Component, OnInit } from '@angular/core';
import { Restaurante } from './restaurante.model';
import { RestauranteService } from './restaurante.service';


@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {

  restaurantes: Restaurante[];

  constructor(private restauranteService:RestauranteService) { }

  ngOnInit() {
    console.log('Angular ngOnInit');
    //this.restaurantes = this.restauranteService.getAllRestaurantes();
 }

 ionViewWillEnter(){
  console.log('Ionic ionViewWillEnter');
  this.restaurantes = this.restauranteService.getAllRestaurantes();
 }

 ionViewDidEnter(){
  console.log('Ionic ionViewDidEnter');
 }

 ionViewWillLeave(){
  console.log('Ionic ionViewWillLeave');
 }

 ionViewDidLeave(){
  console.log('Ionic ionViewDidLeave');
 }

 ngOnDestroy(){
  console.log('Angular ngOnDestroy');
 }

}

