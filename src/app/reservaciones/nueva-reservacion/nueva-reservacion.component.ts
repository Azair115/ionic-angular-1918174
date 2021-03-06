import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Restaurante } from 'src/app/restaurantes/restaurante.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nueva-reservacion',
  templateUrl: './nueva-reservacion.component.html',
  styleUrls: ['./nueva-reservacion.component.scss'],
})

export class NuevaReservacionComponent implements OnInit {

  @Input() restaurante: Restaurante;
  @ViewChild('formNew') myForm: NgForm;

  fecha: string;


  constructor(
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  onReservar() {

    this.modalCtrl.dismiss({
      restaurante: this.restaurante,
      horario: new Date(this.myForm.value['horario']).toDateString()
    }, 'confirm');

  }

  onCancel() {

    this.modalCtrl.dismiss(null,'cancel');

  }

}
