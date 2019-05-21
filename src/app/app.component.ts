import { Component } from '@angular/core';

import { Platform, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PulserasService } from './services/pulseras/pulseras.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  pulseras:any = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private events: Events,
    private pulserasService: PulserasService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.listenPul();
    });
  }

  changePosition(event){
    this.events.publish("newLocation", event);
  }

  listenPul(){
    /*this.pulserasService.getPulseras().then((pul)=>{
      this.pulseras = pul;
    });*/

    this.events.subscribe("pulseras", (pul)=>{
      this.pulseras = pul;
      //console.log(this.pulserasService.arreglo);
      
    });
  }
}
