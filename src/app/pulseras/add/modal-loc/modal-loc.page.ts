import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-loc',
  templateUrl: './modal-loc.page.html',
  styleUrls: ['./modal-loc.page.scss'],
})
export class ModalLocPage implements OnInit {

  locaciones:any = [
    { posicion: { lat: 32.494430, lng: -116.933472 }, desc: "Pulsera en Macro Plaza" },
    { posicion: { lat: 32.515472, lng: -117.003842 }, desc: "Pulsera en Prepa. Lazaro Cardenas" },
    { posicion: { lat: 32.527501, lng: -117.019323 }, desc: "Pulsera en Plaza Rio" },
    { posicion: { lat: 32.513402, lng: -116.973321 }, desc: "Pulsera en Unidad Deportiva" },
    { posicion: { lat: 32.530140, lng: -117.023519 }, desc: "Pulsera en el Cecut" },
    { posicion: { lat: 32.527703, lng: -117.123001 }, desc: "Pulsera en Playas de Tijuana" },
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
