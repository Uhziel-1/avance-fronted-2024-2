import { Component } from '@angular/core';

@Component({
    selector: 'app-calcbasic',
  standalone: true,
  imports: [],
  templateUrl: './calcbasic.component.html',
  styleUrl: './calcbasic.component.css'
})
export class CalcbasicComponent {

  numb1:number=0;
  numb2:number=0;
  resultado:number=0;

  getNumber1(e:any):void{
    console.log(e.target.value);
    this.numb1 = Number(e.target.value);
  }

  getNumber2(e:any):void{
    console.log(e.target.value);
    this.numb2 = Number(e.target.value);
  }

  sumar() {
    this.resultado = this.numb1 + this.numb2;
  }
}
