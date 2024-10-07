import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductoService} from "../../service/producto.service";
import {ProductoRepor} from "../../model/ProductoRepor";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatPaginator} from "@angular/material/paginator";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatNoDataRow, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatInput} from "@angular/material/input";
import {FormProductoComponent} from "../form-producto/form-producto.component";
import {MaterialModule} from "../../material/material.module";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-lista-producto',
  standalone: true,
  imports: [
    MaterialModule,
    MatFormField,
    MatPaginator,
    MatTable,
    MatLabel,
    MatSort,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatNoDataRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatInput,
    FormProductoComponent,
    MatButton,
  ],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent implements OnInit {

  productos: ProductoRepor[]=[];

  displayedColumns: string[] = ['idProducto', 'nombre', 'pu', 'puOld', 'acciones'];
  dataSource: MatTableDataSource<ProductoRepor>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private productoService: ProductoService) {

  }

  ngOnInit() {
    //this.productoService.findAll().subscribe(productos => this.productos = productos);
    this.productoService.findAll();
    this.productoService.productos$.subscribe(data => {
      //this.productos = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  eliminar(id:number) {
    if (confirm("¿Esta seguro que desea eliminar?")) {
      this.productoService.delete(id).subscribe();
    }
  }

  cargarProducto(producto:ProductoRepor) {
    this.productoService.seleccionarProducto(producto);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
