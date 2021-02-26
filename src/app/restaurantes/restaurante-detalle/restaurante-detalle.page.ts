import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Restaurante } from '../restaurante.model';
import { RestauranteService } from '../restaurante.service';

@Component({
 selector: 'app-restaurante-detalle',
 templateUrl: './restaurante-detalle.page.html',
 styleUrls: ['./restaurante-detalle.page.scss'],
})
export class RestauranteDetallePage implements OnInit {

  restaurante: Restaurante;


  constructor(
    private activatedRoute: ActivatedRoute,
    private restauranteService: RestauranteService,
    private router: Router,
    private alertCtrl: AlertController
 ) { }


 ngOnInit() {
   this.activatedRoute.paramMap.subscribe(paramMap => {
    const param: string = 'restauranteId';
    if(!paramMap.has(param)){
    return;
    }
    const restauranteId: number = +paramMap.get(param);
    this.restaurante = this.restauranteService.getRestautante(restauranteId);
 });
 }


 onDeleteRestaurante(){
   this.alertCtrl.create({
     header: '¿Estas seguro?',
     message: '¿Realmente quieres borrar este restaurante? ',
     buttons: [
      {text: 'Cancelar', role: 'cancel'},
      {text: 'Eliminar', handler: ()=>{
       this.restauranteService.deleteRestaurante(this.restaurante.id);
       this.router.navigate(['/restaurantes']);
      }},
    ]
 }).then(alert => {
   alert.present();
 });

 }
 
}
