import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Categoria} from "../../model/Categoria";
import {CategoriaService} from "../../service/categoria.service";
import {NgForOf, NgIf} from "@angular/common";
import {CategoriaRepor} from "../../model/CategoriaRepor";

@Component({
  selector: 'app-form-categoria',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './form-categoria.component.html',
  styleUrl: './form-categoria.component.css'
})
export class FormCategoriaComponent implements OnInit {
  categoryForm: FormGroup;
  categorySaved = false;

  categoriaSeleccionado:CategoriaRepor|null = null;

  constructor(private serviceCategoria:CategoriaService, private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      idCategoria: [null],
      nombre: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    this.serviceCategoria.categoriaSeleccionado$.subscribe(data => { this.categoriaSeleccionado =
      data;
      if (data) {
        this.categoryForm.patchValue(data);
      }
    })
  }

  saveCategory() {
    if (this.categoryForm.valid) {
      console.log(this.categoryForm.value);
      const category: Categoria = new Categoria();
      category.idCategoria = this.categoryForm.value['idCategoria'];
      category.nombre = this.categoryForm.value['nombre'];
      console.log(category);
      this.serviceCategoria.save(category).subscribe({
        next: (response) => {
          console.log('Categoria guardado exitosamente', response);
          this.categoryForm.reset(); // Resetea el formulario después de guardar
        },
        error: (error) => {
          console.error('Error al guardar el categoria', error);
        }
      });
      // Guardar el categoria y mostrar mensaje de éxito
      this.categorySaved = true;

      // Resetear el formulario
      this.categoryForm.reset({
        idCategoria: null,
        nombre: ''
      });

      // Ocultar mensaje de éxito después de unos segundos
      setTimeout(() => this.categorySaved = false, 3000);
    }else{
      this.categoryForm.markAllAsTouched();
    }
  }
}
