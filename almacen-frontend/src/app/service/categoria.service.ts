import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {BehaviorSubject, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Categoria} from "../model/Categoria";
import {GenericService} from "./generic.service";

@Injectable({providedIn: 'root'})
export class CategoriaService extends GenericService<Categoria> {

  protected categoriaSubject = new BehaviorSubject<Categoria[]>([]);

  private messageChange: Subject<string> = new Subject<string>;

  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/categorias`);
  }

  setCategoriaChange(data: Categoria[]) {
    this.categoriaSubject.next(data);
  }

  getCategoriaChange() {
    return this.categoriaSubject.asObservable();
  }

  setMessageChange(data: string) {
    this.messageChange.next(data);
  }

  getMessageChange() {
    return this.messageChange.asObservable();
  }

  /*
  private url:string = `${environment.HOST}/categorias`;

  private categoriaSubject = new BehaviorSubject<Categoria[]>([]); // Comportamiento inicial
  categorias$ = this.categoriaSubject.asObservable(); // Observable para suscribirse


  constructor(private http: HttpClient) { }

  findAll():void{
    this.http.get<Categoria[]>(this.url).subscribe(data=>{
      this.categoriaSubject.next(data);
    });
  }
   */
}
