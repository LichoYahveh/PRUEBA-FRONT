import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private http: HttpClient) { }

  getOrdenes() : Observable<any> {
    const urlEndPoint = 'http://localhost:8080/ordenes/index';
    return this.http.get<any>(urlEndPoint);
  }

  getOrdenDetalles(id: number) : Observable<any> {
    const urlEndPoint = 'http://localhost:8080/ordenes/detalles/'+id;
    return this.http.get<any>(urlEndPoint);
  }

}
