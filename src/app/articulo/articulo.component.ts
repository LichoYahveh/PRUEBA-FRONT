import { Component, OnInit } from '@angular/core';
import { Articulo } from './articulo';
import { ArticuloService } from './articulo.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  //formulario: Articulo = new Articulo();
  articulo: Articulo;
  articulos: Articulo[];

  constructor(private articuloService: ArticuloService) {
    this.articulo = new Articulo();
   }

  ngOnInit(): void {
    this.articuloService.getArticulos().subscribe(
        (articulos) => {
            this.articulos = articulos;
        }
    );
  }

  public create(){
    this.articuloService.create(this.articulo).subscribe(
      (response) => {
        if(response!=null){
          //Ocultamos Modal
          document.getElementById("cerrarModal1").click();
          this.articuloService.getArticulos().subscribe(
            (articulos) => {
                this.articulos = articulos;
            }
          );
        }else
          alert("Registo No pudo ser Ingresado");
      }
    );
  }

  public clear(){
    this.articulo = new Articulo();
  }

  public delete(codigo){
    this.articuloService.delete(codigo).subscribe(
      (response) =>{
        location.reload();
      }
    );
  }

  public llenarModal(articulo){
    this.articulo = articulo;
  }

  public update(){
    this.articuloService.update(this.articulo).subscribe(
      (response) => {
        if(response!=null){
          //Ocultamos Modal
          document.getElementById("cerrarModal2").click();
          this.articuloService.getArticulos().subscribe(
            (articulos) => {
                this.articulos = articulos;
            }
          );
        }else
          alert("Registo No pudo ser Ingresado");
      }
    );
  }

}