import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { } from 'googlemaps';
import { ICity } from 'src/app/share/interfaces/city';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnChanges {

  @ViewChild('map', { static: true }) mapElement: any;
  map: google.maps.Map;

  @Input() currentCity: ICity;

  lat = 23.1838625;
  lng = 42.6953468;

  constructor() { }

  // ngOnInit(): void {
  //   const mapProperties = {
  //     center: new google.maps.LatLng(this.lat, this.lng),
  //     zoom: 8,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  // }

  ngOnChanges(changes: SimpleChanges) {

    if (this.currentCity) {

      this.lat = this.currentCity.lat;
      this.lng = this.currentCity.lng;

      const mapProperties = {
        center: new google.maps.LatLng(this.lat, this.lng),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    }
  }
}
