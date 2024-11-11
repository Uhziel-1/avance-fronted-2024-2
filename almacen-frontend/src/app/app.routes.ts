import { Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {LayoutComponent} from "./component/layout/layout.component";
import {Not404Component} from "./component/not404/not404.component";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  {
    path: 'pages',
    component: LayoutComponent,
    loadChildren: () => import('./component/pages.routes').then(x => x.pagesRoutes)
  },
  { path: '**', component: Not404Component}
];
