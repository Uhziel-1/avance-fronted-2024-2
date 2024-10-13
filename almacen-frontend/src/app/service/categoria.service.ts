import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Categoria} from "../model/Categoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private url:string = `${environment.HOST}/categorias`;

  private categoriaSubject = new BehaviorSubject<Categoria[]>([]); // Comportamiento inicial
  categorias$ = this.categoriaSubject.asObservable(); // Observable para suscribirse


  constructor(private http: HttpClient) { }

  findAll():void{
    this.http.get<Categoria[]>(this.url).subscribe(data=>{
      this.categoriaSubject.next(data);
    });
  }

}
