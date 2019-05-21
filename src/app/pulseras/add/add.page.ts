import { Component, OnInit } from '@angular/core';
import { AlertController, Events, ModalController } from '@ionic/angular';
import { PulserasService } from 'src/app/services/pulseras/pulseras.service';
import { ModalPage } from './modal/modal.page';
import { ModalLocPage } from './modal-loc/modal-loc.page';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  nueva:{ title: string; note: string; icon: string; position: { lat:number, lng:number } } = {
    title:'',
    note:'',
    icon:'',
    position:{
      lat:0,
      lng:0
    }
  };

  etiqueta:string;

  constructor(private alertController: AlertController, private pulseras: PulserasService, private events: Events, private modalCtrl: ModalController,
    private location: Location) { }

  ngOnInit() {

  }

  async selecIcono(){
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {value:123}
    });
    
    modal.onDidDismiss().then((dataR)=>{
      if(dataR !== null) {
        console.log(dataR);
        this.nueva.icon = dataR.data;
      }
    });

    
    return await modal.present();
  }


  async selecLoc() {
    const modal = await this.modalCtrl.create({
      component: ModalLocPage,
      componentProps: {value:123}
    });
    
    modal.onDidDismiss().then((dataR)=>{
      if(dataR !== null) {
        console.log(dataR);
        this.nueva.position = dataR.data.posicion;
        this.etiqueta = dataR.data.desc;
      }
    });

    
    return await modal.present();
  }


  async guardar(){
    console.log(this.nueva);
    
    this.pulseras.getPulseras().then((pul:Array<{ title: string; note: string; icon: string; position: { lat:number, lng:number }}>)=>{
      pul.push(this.nueva);
      this.pulseras.setPulseras(pul).then(()=>{
        this.presentAlert();
        this.events.publish("pulseras", pul);
      });
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Exito!',
      subHeader: 'Se ha guardado la pulsera',
      message: 'Pulsera guardada: '+ this.nueva.title+': ' +this.nueva.note,
      backdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          handler: ()=>{
            this.location.back();
          }
        }
      ]
    });

    await alert.present();
  }
}
