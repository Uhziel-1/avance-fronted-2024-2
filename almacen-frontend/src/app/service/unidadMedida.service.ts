import {Injectable} from '@angular/core'
import {environment} from "../../environments/environment.development";
import {BehaviorSubject, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UnidadMedida} from "../model/UnidadMedida";
import {GenericService} from "./generic.service";

@Injectable({providedIn: 'root'})
export class UnidadMedidaService extends GenericService<UnidadMedida> {

  private unidMedidaSubject = new BehaviorSubject<UnidadMedida[]>([]);
  private messageChange: Subject<string> = new Subject<string>;

  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/unidadMedidas`);
  }

  setUnidadMedidaChange(data: UnidadMedida[]) {
    this.unidMedidaSubject.next(data);
  }

  getUnidadMedidaChange() {
    return this.unidMedidaSubject.asObservable();
  }

  setMessageChange(data: string) {
    this.messageChange.next(data);
  }

  /*
  private url:string = `${environment.HOST}/unidadMedidas`;


  private unidadMedidaSubject = new BehaviorSubject<UnidadMedida[]>([]); // Comportamiento inicial
  unidadMedida$ = this.unidadMedidaSubject.asObservable(); // Observable para suscribirse


  constructor(private http: HttpClient) { }

  findAll():void{
    this.http.get<UnidadMedida[]>(this.url).subscribe(data=>{
      this.unidadMedidaSubject.next(data);
    });
  }
   */
}
