import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CalcbasicComponent} from "./calcbasic/calcbasic.component";
import {CalcstandarComponent} from "./calcstandar/calcstandar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalcbasicComponent, CalcstandarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-angular';
}
