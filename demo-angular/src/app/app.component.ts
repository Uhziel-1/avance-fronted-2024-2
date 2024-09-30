import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CalcbasicComponent} from "./calcbasic/calcbasic.component";
import {CalcstandarComponent} from "./calcstandar/calcstandar.component";
import {CalcMaterialComponent} from "./calc-material/calc-material.component";
import {CalcPrimengComponent} from "./calc-primeng/calc-primeng.component";
import {CalcBootstrapComponent} from "./calc-bootstrap/calc-bootstrap.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalcbasicComponent, CalcstandarComponent, CalcMaterialComponent, CalcPrimengComponent, CalcBootstrapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-angular';
}
