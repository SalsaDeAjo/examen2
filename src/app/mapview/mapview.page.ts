// mapview.page.ts
import { Component, OnInit } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapview',
  templateUrl: 'mapview.page.html',
  styleUrls: ['mapview.page.scss'],
})
export class MapviewPage implements OnInit {

  ngOnInit() {
    this.loadMapboxScript(() => {
      this.initializeMap();
    });
  }

  loadMapboxScript(callback: () => void) {
    const script = document.createElement('script');
    script.src = 'https://api.mapbox.com/mapbox-gl-js/v3.1.0/mapbox-gl.js';
    script.onload = callback;
    document.head.appendChild(script);
  }

  initializeMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnlyb25hcnRpZ2FzIiwiYSI6ImNscXhlcXVhMDBjbXMya28yY3M3ZDZraDMifQ.x_clK9pGGTVxxD4WlmcvdQ';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9
    });
  }
}
