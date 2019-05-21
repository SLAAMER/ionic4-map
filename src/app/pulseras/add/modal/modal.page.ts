import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  icons:any = [
    { name : "airplane", desc:"Avion" },
    { name : "baseball", desc:"Pelota de baseball" },
    { name : "disc", desc:"Disco" },
    { name : "football", desc:"Pelota de futbol" },
    { name : "heart", desc:"Corazon" },
    { name : "rainy", desc:"Llovisna" },
    { name : "tennisball", desc:"Pelota de tenis" },
    { name : "school", desc:"Escuela" },
    { name : "moon", desc:"Luna" }
  ];

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
  }
 
  async closeModal(icon) {
    const onClosedData: string = icon.name;
    await this.modalController.dismiss(onClosedData);
  }

}
