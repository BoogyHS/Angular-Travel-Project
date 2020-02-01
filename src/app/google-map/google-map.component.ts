import { Component,AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements AfterViewInit{

  constructor() { }

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 42.390020;
  lng = 23.240440;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
  };

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
      this.marker.setMap(this.map);
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

}
