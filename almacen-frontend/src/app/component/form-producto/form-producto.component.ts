import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Categoria} from "../../model/Categoria";
import {Marca} from "../../model/Marca";
import {ProductoService} from "../../service/producto.service";
import {Producto} from "../../model/Producto";
import {NgForOf, NgIf} from "@angular/common";
import {ProductoRepor} from "../../model/ProductoRepor";
import {MarcaService} from "../../service/marca.service";
import {CategoriaService} from "../../service/categoria.service";
import {UnidadMedidaService} from "../../service/unidadMedida.service";
import {UnidadMedida} from "../../model/UnidadMedida";

@Component({
  selector: 'app-form-producto',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './form-producto.component.html',
  styleUrl: './form-producto.component.css'
})
export class FormProductoComponent implements OnInit {
  productForm: FormGroup;
  productSaved = false;
  categorias: Categoria[] = [];
    /*Categoria[] = [
    { idCategoria: 1, nombre: 'Electrónica' },
    { idCategoria: 2, nombre: 'Hogar' },
    { idCategoria: 3, nombre: 'Ropa' }
  ];*/ // Ejemplo de categorías con objetos

  marcas: Marca[] = [];
    /*Marca[] = [
    { idMarca: 1, nombre: 'Marca A' },
    { idMarca: 2, nombre: 'Marca B' }
  ];*/ // Ejemplo de marcas como objetos

  unidadesMedida: UnidadMedida[] = [];
    /*UnidadMedida = [
    { idUnidad: 1, nombre: 'Unidad' },
    { idUnidad: 2, nombre: 'Caja' }
  ];*/ // Ejemplo de unidades de medida como objetos

  productoSeleccionado:ProductoRepor|null = null;

  constructor(private serviceProducto:ProductoService,
              private servicioMarca:MarcaService,
              private servicioCategoria:CategoriaService,
              private servicioUnidadMedida:UnidadMedidaService,
              private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      idProducto: [null],
      nombre: ['', Validators.required],
      pu: [0, Validators.required],
      puOld: [0],
      utilidad: [0, Validators.required],
      stock: [0, Validators.required],
      stockOld: [0],
      categoria: [null, Validators.required],
      marca: [null, Validators.required],
      unidadMedida: [null, Validators.required]
    });
  }

  ngOnInit(): void {

    this.serviceProducto.productoSeleccionado$.subscribe(data => {
      this.productoSeleccionado = data;
      if (data) {
        this.productForm.patchValue(data);
        this.productForm.patchValue({
          categoria: data.categoria.idCategoria,
          marca: data.marca.idMarca,
          unidadMedida: data.unidadMedida.idUnidad
        });
      }
    });
    this.servicioMarca.findAll();
    this.servicioMarca.marcas$.subscribe(data=>{
      console.log(data);
      this.marcas=data;
    });

    this.servicioCategoria.findAll();
    this.servicioCategoria.categorias$.subscribe(data=>{
      console.log(data);
      this.categorias=data;
    });

    this.servicioUnidadMedida.findAll();
    this.servicioUnidadMedida.unidadMedida$.subscribe(data=>{
      console.log(data);
      this.unidadesMedida=data;
    });
  }
  saveProduct() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      const product: Producto = new Producto();
      product.idProducto = this.productForm.value['idProducto'];
      product.nombre = this.productForm.value['nombre'];
      product.pu = this.productForm.value['pu'];
      product.puOld = this.productForm.value['puOld'];
      product.utilidad = this.productForm.value['utilidad'];
      product.stock = this.productForm.value['stock'];
      product.stockOld = this.productForm.value['stockOld'];
      product.categoria = this.productForm.value['categoria'];
      product.marca = this.productForm.value['marca'];
      product.unidadMedida = this.productForm.value['unidadMedida'];
      console.log(product);
      this.serviceProducto.save(product).subscribe({
        next: (response) => {
          console.log('Producto guardado exitosamente', response);
          this.productForm.reset(); // Resetea el formulario después de guardar
        },
        error: (error) => {
          console.error('Error al guardar el producto', error);
        }
      });
      // Guardar el producto y mostrar mensaje de éxito
      this.productSaved = true;

      // Resetear el formulario
      this.productForm.reset({
        idProducto: null,
        nombre: '',
        pu: 0.0,
        puOld: 0.0,
        utilidad: 0,
        stock: 0,
        stockOld: 0,
        categoria: null,
        marca: null,
        unidadMedida: null
      });

      // Ocultar mensaje de éxito después de unos segundos
      setTimeout(() => this.productSaved = false, 3000);
    }else{
      this.productForm.markAllAsTouched();
    }
  }
}
