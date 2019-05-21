import { Component, OnInit } from '@angular/core';
import { Platform, Events } from '@ionic/angular';
import { GoogleMaps, GoogleMap, LocationService, MyLocation } from '@ionic-native/google-maps/ngx';
import { PulserasService } from '../services/pulseras/pulseras.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  map: GoogleMap;
  position:MyLocation;

  constructor(private platform: Platform, private events:Events, private pulseras:PulserasService, private router: Router){
    this.listen();
    this.listenPul();
  }

  async ngOnInit(){
    await this.platform.ready();
    await this.loadMap();
    await this.loadMarkers();
    //await this.mylocation();
  }

  loadMap(){
    this.map = GoogleMaps.create('map_canvas');
  }

  loadMarkers(){
    this.pulseras.getPulseras().then((pul)=>{
      pul.forEach((pulsera)=>{
        this.map.addMarker({
          position: pulsera.position,
          title: pulsera.title + ': ' +pulsera.note,
          icon: 'red'
        });
      });
    });
  }

  locateMe(){
    if(!this.position){
      LocationService.getMyLocation({enableHighAccuracy:true}).then((location:MyLocation) =>{
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
        alert(JSON.stringify(err));
      });
    }
    else{
      this.locateMeCamera();
    }
  }

  listen(){
    this.events.subscribe("newLocation", (selected:{ title: string; note: string; icon: string; position: { lat:number, lng:number } })=>{
      this.map.animateCamera({
        target:{
          lat: selected.position.lat,
          lng: selected.position.lng
        },
        duration: 1500,
        zoom:16,
        tilt:45
      })
    });
  }

  locateMeCamera(){
    this.map.animateCamera({
      target: this.position.latLng,
      duration: 1500,
      zoom:16,
      tilt:45
    }).catch(err=>alert(JSON.stringify(err)));
  }

  configure(){
    this.router.navigateByUrl('/pulseras');
  }

  listenPul(){
    this.events.subscribe("pulseras", (pul:Array<{ title: string; note: string; icon: string; position: { lat:number, lng:number } }>)=>{
      let p = pul[pul.length-1];
      this.map.addMarker({
        position: p.position,
        title: p.title+ ': '+p.note,
        icon: 'red'
      });
    })
  }
}
