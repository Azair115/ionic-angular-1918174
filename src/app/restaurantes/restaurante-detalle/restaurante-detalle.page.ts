import { NuevaReservacionComponent } from 'src/app/reservaciones/nueva-reservacion/nueva-reservacion.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurante } from '../restaurante.model';
import { RestauranteService } from '../restaurante.service';
import { ActionSheetController, AlertController, ModalController, LoadingController,} from '@ionic/angular';
import { ReservacionService } from 'src/app/reservaciones/reservacion.service';

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
    private AlertCtrl: AlertController,
    private actionCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private reservacionService : ReservacionService
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
    this.AlertCtrl.create({
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

  onReservarRestaurante(){
    this.actionCtrl.create({
     header: 'Seleccionar accion',
     buttons: [
       {text: 'Seleccionar Fecha', handler: ()=>{
         this.openReservarModal('select');
       }},
       {text: 'Hoy', handler: ()=>{
         this.openReservarModal('hoy');
       }},
       {text: 'Cancelar', role: 'cancel'}
     ]
    })
    .then(actionSheet => {
     actionSheet.present();
    });
   }

  openReservarModal(modo: 'select' | 'hoy'){
    this.modalCtrl.create({
      component: NuevaReservacionComponent,
      componentProps: {restaurante: this.restaurante, mode: modo}
    })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData => {
      if(resultData.role ==='confirm'){
        this.loadingCtrl.create({message: 'reservando ...'})
        .then(loadingEl => {
          loadingEl.present();

          console.log(resultData);

          this.reservacionService.addReservacion(resultData.data.restaurante, resultData.data.horario);

          loadingEl.dismiss();
        });
      }
    });
    console.log(modo);
  }

}
