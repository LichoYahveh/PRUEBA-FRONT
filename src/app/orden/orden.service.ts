import { Injectable } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

    private httpHeaders = new HttpHeaders({'Content-Type'  : 'application/json'});

    constructor(private http: HttpClient){};

    getArticulos() : Observable<any> {
        const urlEndPoint = 'http://localhost:8080/articulo/index';
        return this.http.get<any>(urlEndPoint);
    }

    getClientes() : Observable<any> {
        const urlEndPoint = 'http://localhost:8080/cliente/index';
        return this.http.get<any>(urlEndPoint);
    }

    getArticulo(id : String) : Observable<any> {
        const urlEndPoint = 'http://localhost:8080/articulo/show/'+id;
        return this.http.get<any>(urlEndPoint);
        
    }

    create(orden) :Observable<any> {
        const urlEndPoint = 'http://localhost:8080/ordenes/create';
    return this.http.post<any>(urlEndPoint, orden, {headers : this.httpHeaders});
    }
}