import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo/articulo';
import { PrincipalService } from './principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  detalles = [];
  dellatesOrden = [];

  constructor(private principalService :  PrincipalService) {}

  ngOnInit(): void {
    this.principalService.getOrdenes().subscribe(
      (response) => {
        //console.log(response);
        for(var i=0; i<response.length; i++){
          var num = response[i].id;
          var fec = response[i].fecha;
          var nom = response[i].cliente.nombre;
          var ape = response[i].cliente.apellido;
          this.detalles.push({
            numero : num,
            fecha : fec,
            nombres : nom,
            apellidos : ape
          });
        }
      }
    );
  }

  verDetalles(id) {
    this.principalService.getOrdenDetalles(id).subscribe(
      (response) => {
        console.log(response);
        for(var i=0; i<response.length; i++){
          var cod = response[i].articulo.codigo;
          var nom = response[i].articulo.nombre;
          var pre = response[i].articulo.precio_unitario;
          this.dellatesOrden.push({
            codigo : cod,
            nombre : nom,
            precio_unitario : pre,
          });
        }
      }
    );
  }

}
