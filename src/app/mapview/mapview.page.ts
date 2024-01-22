import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.page.html',
  styleUrls: ['./mapview.page.scss'],
  template: 
    `<mgl-map
      [style]="'mapbox://styles/mapbox/streets-v9'"
      [zoom]="[9]"
      [center]="[-74.50, 40]"
      (mapCreate)="map = $event"
    ></mgl-map>`
  ,
})
export class MapviewPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
