import { Injectable } from '@angular/core';
import { Articulo } from './articulo';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private httpHeaders = new HttpHeaders({'Content-Type'  : 'application/json'});

  constructor(private http: HttpClient) { }

  getArticulos() : Observable<Articulo[]> {
    const urlEndPoint = 'http://localhost:8080/articulo/index';
    return this.http.get<Articulo[]>(urlEndPoint);
  }
  
  create(articulo : Articulo) : Observable<any> {
    const urlEndPoint = 'http://localhost:8080/articulo/create';
    return this.http.post<any>(urlEndPoint, articulo, {headers : this.httpHeaders});
  }

  delete(codigo:String) : Observable<any> {
    const urlEndPoint = 'http://localhost:8080/articulo/delete/'+codigo;
    return this.http.delete<any>(urlEndPoint);
  }

  update(articulo : Articulo) : Observable<any> {
    const urlEndPoint = 'http://localhost:8080/articulo/update';
    return this.http.put<any>(urlEndPoint, articulo);
  }

}
