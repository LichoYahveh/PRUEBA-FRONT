import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo/articulo';
import { Cliente } from '../cliente/cliente';
import { OrdenService } from './orden.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();

  articulos             : Articulo[];
  clientes              : Cliente[];
  articuloSeleccionado  : String;
  clienteSeleccionado   : String;
  detalles              = [];

  constructor(private ordenService: OrdenService, private router:Router) {}

  ngOnInit(): void {

    this.ordenService.getClientes().subscribe(
      (response) => {
        this.clientes = response;
      }
    );

    this.ordenService.getArticulos().subscribe(
      (response) => {
        this.articulos = response;
      }
    )
  }

  obtenerArticuloSeleccionado(){
    if(this.articuloSeleccionado!=null){
      this.ordenService.getArticulo(this.articuloSeleccionado).subscribe(
        (response) => {
          console.log(response);
          this.detalles.push(
            response
          );
        }
      );
      this.articuloSeleccionado = null;
    }
  }

  guardarOrden(){
    if(this.clienteSeleccionado==null || this.detalles.length==0){
      alert("Orden Incompleta");
    }else{

      let orden = { 
        cliente_id : this.clienteSeleccionado,
        detalles   : this.detalles
      };
      
      this.ordenService.create(orden).subscribe(
        (response) => {
          console.log(response);
        }
      );
      this.router.navigate(['principal']);
    }
  }

}
