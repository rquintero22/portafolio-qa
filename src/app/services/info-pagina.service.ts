import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IInfoPagina } from '../interfaces/info-pagina.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { pipe, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: IInfoPagina = {};
  equipo: any[] = [];
  cargada = false;

  constructor( private http: HttpClient,
               private afb: AngularFirestore  ) {

    this.cargarInfo();
    this.cargarEquipo();
  }


  private cargarInfo() {
    // Leer archivo JSON
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: IInfoPagina) => {
          this.cargada = true;
          this.info = resp;
        } );
  }

  private cargarEquipo() {
    this.afb.collection('equipo').valueChanges()
      .subscribe( (resp: any[]) => {
        this.equipo = resp;
    });

  }

}
