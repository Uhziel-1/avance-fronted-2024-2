import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListaProductoComponent} from "./component/lista-producto/lista-producto.component";
import {FormProductoComponent} from "./component/form-producto/form-producto.component";
import {LayoutComponent} from "./component/layout/layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaProductoComponent, FormProductoComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'almacen-frontend';
}
