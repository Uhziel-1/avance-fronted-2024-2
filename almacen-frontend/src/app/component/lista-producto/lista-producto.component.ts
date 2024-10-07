import {Component, OnInit} from '@angular/core';
import {ProductoService} from "../../service/producto.service";
import {Producto} from "../../model/Producto";
import {ProductoRepor} from "../../model/ProductoRepor";

@Component({
  selector: 'app-lista-producto',
  standalone: true,
  imports: [],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent implements OnInit {

  productos: ProductoRepor[]=[];
  constructor(private productoService: ProductoService) {

  }

  ngOnInit() {
    //this.productoService.findAll().subscribe(productos => this.productos = productos);
    this.productoService.findAll();
    this.productoService.productos$.subscribe(data => { this.productos =
      data; })
  }

  eliminar(id:number) {
    if (confirm("¿Esta seguro que desea eliminar?")) {
      this.productoService.delete(id).subscribe();
    }
  }

  cargarProducto(producto:ProductoRepor) {
    this.productoService.seleccionarProducto(producto);
  }

}
