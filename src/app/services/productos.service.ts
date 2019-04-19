import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IProducto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: IProducto[] = [];

  constructor( private afb: AngularFirestore ) {
    this.cargarProductos();
  }


  private cargarProductos() {
    this.afb.collection('productos_idx').valueChanges()
        .subscribe( (resp: IProducto[]) => {
          this.cargando = false;
          this.productos = resp;
        } );
  }

}
