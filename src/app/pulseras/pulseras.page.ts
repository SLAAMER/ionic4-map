import { Component, OnInit } from '@angular/core';
import { AlertController, Events } from '@ionic/angular';
import { PulserasService } from '../services/pulseras/pulseras.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pulseras',
  templateUrl: './pulseras.page.html',
  styleUrls: ['./pulseras.page.scss'],
})
export class PulserasPage implements OnInit {

  pulseras:any;

  constructor(private pulserasService:PulserasService, public alertController: AlertController, private router: Router, private events:Events) { 
    this.listen();
  }

  ngOnInit() {
    this.pulserasService.getPulseras().then((pulseras)=>{
      this.pulseras = pulseras;
    });
  }

  addPulsera() {
    this.router.navigateByUrl('/add');
  }

  listen(){
    this.events.subscribe("pulseras", (pul)=>{
      this.pulseras=pul;
    });
  }

}
