import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GoogleMaps, GoogleMap, LocationService, MyLocation, MarkerOptions, CameraPosition } from '@ionic-native/google-maps/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  map: GoogleMap;
  position:MyLocation;

  constructor(private platform: Platform){

  }

  async ngOnInit(){
    await this.platform.ready();
    await this.loadMap();
    await this.mylocation();
  }

  loadMap(){
    this.map = GoogleMaps.create('map_canvas');
  }

  mylocation(){
    LocationService.getMyLocation().then((location:MyLocation) =>{
      this.position = location;
      this.map.addMarkerSync({
        position:  this.position.latLng,
        title: 'Yo estoy aqui',
        icon: 'yellow'
      });
      this.map.animateCamera({
        target: this.position.latLng,
        zoom:16,
        duration:2000,
        tilt:45
      });
    }).catch(err=>{
      alert(err);
    });
  }


}
