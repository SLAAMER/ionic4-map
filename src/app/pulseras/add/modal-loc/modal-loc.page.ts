import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-loc',
  templateUrl: './modal-loc.page.html',
  styleUrls: ['./modal-loc.page.scss'],
})
export class ModalLocPage implements OnInit {

  locaciones:any = [
    { posicion: { lat: 0, lng: 0 }, desc: "Pulsera en Macro Plaza" },
    { posicion: { lat: 0, lng: 0 }, desc: "Pulsera en Prepa. Lazaro Cardenas" },
    { posicion: { lat: 0, lng: 0 }, desc: "Pulsera en Plaza Rio" },
    { posicion: { lat: 0, lng: 0 }, desc: "Pulsera en Unidad Deportiva" },
    { posicion: { lat: 0, lng: 0 }, desc: "Pulsera en el Cecut" },
    { posicion: { lat: 0, lng: 0 }, desc: "Pulsera en Playas de Tijuana" },
  ];

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
  }

  async closeModal(loca) {
    console.log(loca);
    
    const onClosedData: string = loca;
    await this.modalController.dismiss(onClosedData);
  }

}
