import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IInfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: IInfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient ) { 

    // Leer archivo JSON
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: IInfoPagina) => {
          this.cargada = true;
          this.info = resp;
          console.log(resp);
        } );
  }



}
