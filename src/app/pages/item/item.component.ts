import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { IProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: IProductoDescripcion;
  id: string;

  constructor( private route: ActivatedRoute,
               private productosService: ProductosService ) { }

  ngOnInit() {
    this.route.params
      .subscribe( parametros => {
       this.id =  parametros.id;
       this.productosService.getProducto( this.id )
            .subscribe( (resp: IProductoDescripcion) => {
              this.producto = resp;
            });
      });
  }

}
