import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-calc-bootstrap',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './calc-bootstrap.component.html',
  styleUrl: './calc-bootstrap.component.css'
})
export class CalcBootstrapComponent {
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
