import {Component, OnInit} from '@angular/core';
import {CategoriaService} from "../../service/categoria.service";
import {CategoriaRepor} from "../../model/CategoriaRepor";

@Component({
  selector: 'app-lista-categoria',
  standalone: true,
  imports: [],
  templateUrl: './lista-categoria.component.html',
  styleUrl: './lista-categoria.component.css'
})
export class ListaCategoriaComponent implements OnInit {

  categorias: CategoriaRepor[]=[];
  constructor(private categoriaService: CategoriaService) {

  }

  ngOnInit() {
    //this.categoriaService.findAll().subscribe(categorias => this.categorias = categorias);
    // this.categoriaService.findAll();
    //this.categoriaService.categorias$.subscribe(data => { this.categorias = data; })
  }

  eliminar(id:number) {
    if (confirm("¿Esta seguro que desea eliminar?")) {
      this.categoriaService.delete(id).subscribe();
    }
  }

  cargarCategoria(categoria:CategoriaRepor) {
    this.categoriaService.seleccionarCategoria(categoria);
  }
}
