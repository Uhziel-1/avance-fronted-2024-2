import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-calc-material',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatCard,
    MatFormField,
    MatInput
  ],
  templateUrl: './calc-material.component.html',
  styleUrl: './calc-material.component.css'
})
export class CalcMaterialComponent {
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
