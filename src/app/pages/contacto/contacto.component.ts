import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var mapboxgl: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  lat: number;
  lng: number;

  contacto = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  constructor( private http: HttpClient ) {
    this.lat = 9.9858884;
    this.lng = -84.0979217;
  }

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoicnF1aW50ZXJvMjIiLCJhIjoiY2p1aDZ3amx6MHZ6YzQ0bHBlMmtxNGg0eSJ9.XvyjNA0b2v9qK0aoibqrog';
    const map = new mapboxgl.Map({
    container: 'map',
    center: [ this.lng, this.lat ],
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 15
    });

    const marker = new mapboxgl.Marker()
        .setLngLat( [ this.lng, this.lat ] )
        .addTo( map );
  }

  sendMail( formulario: NgForm) {
   
    console.log(this.contacto);

  }

}
