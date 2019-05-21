import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PulserasService {
  public arreglo: Array<{ title: string; note: string; icon: string; position: { lat:number, lng:number } }> = [
    {
      title: 'Alex',
      note: 'Pulsera de Alex',
      icon: 'nuclear',
      position:{
        lat: 32.505797,
        lng: -116.948383
      }
    },
    {
      title: 'Cesar',
      note: 'Pulsera de Cesar',
      icon: 'basketball',
      position:{
        lat: 32.508823,
        lng: -116.955302
      }
    },
    {
      title: 'Frida',
      note: 'Pulsera de Frida',
      icon: 'flower',
      position:{
        lat: 32.508665,
        lng: -116.954112
      }
    },{
      title: 'Juan',
      note: 'Pulsera de Juan',
      icon: 'beer',
      position:{
        lat: 32.457313,
        lng: -116.890094
      }
    }
  ]
  constructor(private storage: Storage) { 
    this.storage.set("pulseras", this.arreglo);
  }

  public getPulseras(){
    return this.storage.get("pulseras");
  }

  public setPulseras(arreglo){
    return this.storage.set("pulseras", arreglo);
  }
}
