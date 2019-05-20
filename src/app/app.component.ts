import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Omar',
      note: 'Pulsera de Omar',
      icon: 'baseball'
    },
    {
      title: 'Cesar',
      note: 'Pulsera de Cesar',
      icon: 'basketball'
    },
    {
      title: 'Frida',
      note: 'Pulsera de Frida',
      icon: 'flower'
    },{
      title: 'Juan',
      note: 'Pulsera de Juan',
      icon: 'beer'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
