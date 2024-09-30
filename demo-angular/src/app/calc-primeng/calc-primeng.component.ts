import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-calc-primeng',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule
  ],
  templateUrl: './calc-primeng.component.html',
  styleUrl: './calc-primeng.component.css'
})
export class CalcPrimengComponent {
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
