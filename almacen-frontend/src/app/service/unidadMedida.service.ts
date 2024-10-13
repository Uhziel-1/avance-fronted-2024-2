import { Injectable } from '@angular/core'
import {environment} from "../../environments/environment.development";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UnidadMedida} from "../model/UnidadMedida";

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService {
  private url:string = `${environment.HOST}/unidadMedidas`;

  private unidadMedidaSubject = new BehaviorSubject<UnidadMedida[]>([]); // Comportamiento inicial
  unidadMedida$ = this.unidadMedidaSubject.asObservable(); // Observable para suscribirse


  constructor(private http: HttpClient) { }

  findAll():void{
    this.http.get<UnidadMedida[]>(this.url).subscribe(data=>{
      this.unidadMedidaSubject.next(data);
    });
  }

}
