import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { ClienteComponent } from './cliente/cliente.component';
import { OrdenComponent } from './orden/orden.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path : '', pathMatch : 'full', redirectTo : '/principal' },
  { path : 'principal', component : PrincipalComponent },
  { path : 'articulo',  component : ArticuloComponent },
  { path : 'cliente',   component : ClienteComponent },
  { path : 'orden',     component : OrdenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
