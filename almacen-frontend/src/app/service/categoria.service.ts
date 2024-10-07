import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../environments/environment.development";
import {Categoria} from "../model/Categoria";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {CategoriaRepor} from "../model/CategoriaRepor";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private url = `${environment.HOST}/categorias`;
  constructor(private http: HttpClient) { }

  private categoriasSubject = new BehaviorSubject<CategoriaRepor[]>([]); // Comportamiento inicial
  categorias$ = this.categoriasSubject.asObservable(); // Observable para suscribirse

  private categoriaSeleccionadoSubject = new BehaviorSubject<CategoriaRepor | null>(null);
  categoriaSeleccionado$ = this.categoriaSeleccionadoSubject.asObservable()

  findAll():void{
    // return this.http.get<Categoria[]>(this.url);
    this.http.get<CategoriaRepor[]>(this.url).subscribe(data=>{
      this.categoriasSubject.next(data);
    });
  }


  findById(id:number){
    return this.http.get<Categoria>(this.url + `/${id}`);
  }

  save(categoria: Categoria):Observable<Categoria>{
    //return this.http.post(this.url, categoria);
    return this.http.post<Categoria>(this.url, categoria).pipe(
      tap(() => this.findAll())
    );

  }

  update(id: number, categoria: Categoria):Observable<Categoria>{
    return this.http.put<Categoria>(`${this.url}/${id}`, categoria).pipe(
      tap(() => this.findAll())
    );
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      tap(() => this.findAll())
    );
  }

}
