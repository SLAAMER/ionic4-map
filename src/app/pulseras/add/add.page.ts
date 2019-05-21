import { Component, OnInit } from '@angular/core';
import { AlertController, Events } from '@ionic/angular';
import { PulserasService } from 'src/app/services/pulseras/pulseras.service';

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


  constructor(private alertController: AlertController, private pulseras: PulserasService, private events: Events) { }

  ngOnInit() {

  }

  async selecIcono(){
    const alert = await this.alertController.create({
      header: 'Lugares',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Icono Macro Plaza',
          value: 'cash',
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Icono Plaza Rio',
          value: 'card'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Icono Escuela',
          value: 'school'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (val) => {
            console.log('Confirm Ok');
            console.log(val);
            this.nueva.icon = val;
          }
        }
      ]
    });

    await alert.present();
  }

  async selecLoc() {
    const alert = await this.alertController.create({
      header: 'Lugares',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Macro Plaza',
          value: {lat: 32.494372,lng: -116.933558},
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Plaza Rio',
          value: {
            lat: 32.527819,
            lng: -117.019544
          }
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Prep.Lazaro Cardenas',
          value: {
            lat: 32.515357,
            lng: -117.003914
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (val) => {
            console.log('Confirm Ok');
            console.log(val);
            this.nueva.position = val;
          }
        }
      ]
    });

    await alert.present();
  }


  guardar(){
    console.log(this.nueva);
    
    this.pulseras.getPulseras().then((pul:Array<{ title: string; note: string; icon: string; position: { lat:number, lng:number }}>)=>{
      pul.push(this.nueva);
      this.pulseras.setPulseras(pul).then(()=>{
        alert("se ha guardado");
        this.events.publish("pulseras", pul);
      });
    });
  }
}
