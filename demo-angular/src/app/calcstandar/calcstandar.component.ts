import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-calcstandar',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './calcstandar.component.html',
  styleUrl: './calcstandar.component.css'
})
export class CalcstandarComponent {
  pantalla:string='';

  presionarNumero(valor:string) {
    if (valor == 'C') {
      this.pantalla='';
    } else if (valor == '=') {
      this.calcular()
    } else {
      this.pantalla+=valor;
    }
  }

  calcular() {
    try {
      var result=this.pantalla;
      this.pantalla=eval(result);
    } catch (e) {
      this.pantalla='Error';
    }
  }

}
