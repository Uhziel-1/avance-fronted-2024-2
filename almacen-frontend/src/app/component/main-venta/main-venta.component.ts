import {Component, OnInit} from '@angular/core';
import {MaterialModule} from "../../material/material.module";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductoRepor} from "../../model/ProductoRepor";
import {map, Observable} from "rxjs";
import {ProductoService} from "../../service/producto.service";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-main-venta',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, AsyncPipe, NgIf],
  templateUrl: './main-venta.component.html',
  styleUrl: './main-venta.component.css'
})
export class MainVentaComponent implements OnInit{
  salesFormGroup: FormGroup;

  producControl= new FormControl('');
  products: ProductoRepor[];
  productFiltered$: Observable<ProductoRepor[]>;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductoService
  ) {}
  showName(val: any) { return val ? val.nombre : val;}

  ngOnInit(): void {
    this.salesFormGroup = this.formBuilder.group({
      idProducto: new FormControl(null),
      pu: new FormControl(0, [Validators.required]),
    });
    this.productFiltered$ = this.producControl.valueChanges.pipe(
      map((val) => this.filterProduct(val))
    );
    this.loadInitialData();
  }

  loadInitialData() {
    this.productService.findAll();
    this.productService.getProductosSubject().subscribe((data) => (this.products=data));
  }

  filterProduct(val: any) {
    this.salesFormGroup.get('pu')?.setValue(0);
    this.salesFormGroup.get('idProducto')?.setValue(0);
    if (val?.idProducto> 0) {
      return this.products.filter(
        (el) =>
          el.nombre.toLowerCase().includes(val.nombre.toLowerCase())
      );
    } else {
      return this.products.filter(
        (el) =>
          el.nombre.toLowerCase().includes(val?.toLowerCase())
      );
    }
  }

  onProductSelected(event: any) {
    const selectedProduct = event.option.value;
    this.salesFormGroup.get('pu')?.setValue(selectedProduct.pu);
    this.salesFormGroup.get('idProducto')?.setValue(selectedProduct.idProducto);
  }


}
