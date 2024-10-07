import { Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {LayoutComponent} from "./component/layout/layout.component";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  {
    path: 'pages',
    component: LayoutComponent,
    loadChildren: () => import('./component/pages.routes').then(x => x.pagesRoutes)
  }
];
