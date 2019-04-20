import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IProducto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: IProducto[] = [];
  productosFiltrado: IProducto[] = [];

  constructor( private afb: AngularFirestore ) {
    this.cargarProductos();
  }


  private cargarProductos() {

    return new Promise( (resolve, reject) => {
      this.afb.collection('productos_idx').valueChanges()
        .subscribe( (resp: IProducto[]) => {
          this.cargando = false;
          this.productos = resp;
          resolve();
        } );
    });

  }

  getProducto( id: string ) {
    return this.afb.collection('productos').doc(id).valueChanges();
  }

  buscarProducto( termino: string ) {
    if ( this.productos.length  === 0) {
      // cargar productos
      this.cargarProductos()
        .then( () => {
          // se ejecutará después de cargar los productos
          this.filtrarProductos( termino );
        });
    } else {
       // aplicar filtro
       this.filtrarProductos( termino );
    }

    console.log( this.productosFiltrado );
  }

  private filtrarProductos( termino: string ) {

    this.productosFiltrado = [];
    // termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productosFiltrado.push( prod );
      }
    });
  }

}
