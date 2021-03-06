import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint = 'http://localhost:8080/cliente/index';

  constructor(private http: HttpClient) { }

  getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }

}
