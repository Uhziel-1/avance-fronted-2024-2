import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../environments/environment.development";
import {Marca} from "../model/Marca";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {MarcaRepor} from "../model/MarcaRepor";

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  private url = `${environment.HOST}/marcas`;
  constructor(private http: HttpClient) { }

  private marcasSubject = new BehaviorSubject<MarcaRepor[]>([]); // Comportamiento inicial
  marcas$ = this.marcasSubject.asObservable(); // Observable para suscribirse

  private marcaSeleccionadoSubject = new BehaviorSubject<MarcaRepor | null>(null);
  marcaSeleccionado$ = this.marcaSeleccionadoSubject.asObservable()

  findAll():void{
    // return this.http.get<Marca[]>(this.url);
    this.http.get<MarcaRepor[]>(this.url).subscribe(data=>{
      this.marcasSubject.next(data);
    });
  }


  findById(id:number){
    return this.http.get<Marca>(this.url + `/${id}`);
  }

  save(marca: Marca):Observable<Marca>{
    //return this.http.post(this.url, marca);
    return this.http.post<Marca>(this.url, marca).pipe(
      tap(() => this.findAll())
    );

  }

  update(id: number, marca: Marca):Observable<Marca>{
    return this.http.put<Marca>(`${this.url}/${id}`, marca).pipe(
      tap(() => this.findAll())
    );
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      tap(() => this.findAll())
    );
  }
  seleccionarMarca(marca: MarcaRepor) {
    console.log("SERVICE");
    console.log(marca);
    this.marcaSeleccionadoSubject.next(marca);
  }

}
