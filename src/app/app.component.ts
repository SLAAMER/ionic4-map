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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private events: Events,
    private pulseras: PulserasService
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
    this.events.subscribe("pulseras", (pul)=>{
      this.pulseras.arreglo = pul;
      console.log(this.pulseras.arreglo);
      
    });
  }
}
