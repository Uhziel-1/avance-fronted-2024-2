import { Component } from '@angular/core';
import {ProductoService} from "../../service/producto.service";
import {Producto} from "../../model/Producto";

@Component({
  selector: 'app-lista-producto',
  standalone: true,
  imports: [],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent {

  productos: Producto[]=[];
  constructor(private productoService: ProductoService) {

  }

  ngOnInit() {
    this.productoService.findAll().subscribe(productos => this.productos = productos);
  }
}
