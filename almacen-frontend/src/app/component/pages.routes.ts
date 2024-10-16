import { Routes } from '@angular/router';
import {FormProductoComponent} from "./form-producto/form-producto.component";
import {ListaProductoComponent} from "./lista-producto/lista-producto.component";
import {MainCategoriaComponent} from "./main-categoria/main-categoria.component";
import {MainMarcaComponent} from "./main-marca/main-marca.component";
import {MainUnidadMedidaComponent} from "./main-unidadmedida/main-unidadmedida.component";
import {FormMarcaComponent} from "./main-marca/form-marca/form-marca.component";
import {FormUnidadMedidaComponent} from "./main-unidadmedida/form-unidadmedida/form-unidadmedida.component";
export const pagesRoutes: Routes = [
  {
    path: 'product',
    component: ListaProductoComponent,
    children: [
      { path: 'new', component: FormProductoComponent },
      { path: 'edit/:id', component: FormProductoComponent },
    ],
  },
  { path: 'categoria', component: MainCategoriaComponent },
  {
    path: 'marca',
    component: MainMarcaComponent,
    children: [
      { path: 'new', component: FormMarcaComponent },
      { path: 'edit/:id', component: FormMarcaComponent },
    ],
  },
  {
    path: 'unidadMedida',
    component: MainUnidadMedidaComponent,
    children: [
      { path: 'new', component: FormUnidadMedidaComponent },
      { path: 'edit/:id', component: FormUnidadMedidaComponent },
    ],
  }
];
