import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    this.items = [
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
    ]
  }

  ngOnInit() {
  }
}
