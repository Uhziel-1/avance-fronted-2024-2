import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../environments/environment.development";
import {Producto} from "../model/Producto";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url = `${environment.HOST}/productos`;
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Producto[]>(this.url);
  }

  findById(id:number){
    return this.http.get<Producto>(this.url + `/${id}`);
  }

  save(producto: Producto){
    return this.http.post(this.url, producto);
  }

  delete(id:number){
    return this.http.delete(this.url + `/${id}`);
  }

  update(id:number, producto: Producto){
    return this.http.put(this.url + `/${id}`, producto);
  }
}
