import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ClienteComponent } from './cliente/cliente.component';
import { OrdenComponent } from './orden/orden.component';
import { PrincipalComponent } from './principal/principal.component';
import { MenuComponent } from './menu/menu.component';

import { ArticuloService } from './articulo/articulo.service';
import { ClienteService } from './cliente/cliente.service';
import { OrdenService } from  './orden/orden.service';
import { PrincipalService } from './principal/principal.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    ClienteComponent,
    OrdenComponent,
    PrincipalComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ArticuloService,
    ClienteService,
    OrdenService,
    PrincipalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
