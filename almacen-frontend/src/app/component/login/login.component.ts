import { Component } from '@angular/core';
import {MaterialModule} from "../../material/material.module";
import {AuthService} from "../../service/auth.service";
import {Router, RouterLink} from "@angular/router";
import {environment} from "../../../environments/environment.development";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: string;
  clave: string;
  constructor(
    private authService: AuthService,
    private router: Router
  ){ }
  login(){
    this.authService.login(this.user, this.clave).subscribe(data => {
      console.log(data);
      sessionStorage.setItem(environment.TOKEN_NAME, data.token);
      //let token: string = sessionStorage.getItem(environment.TOKEN_NAME);
      this.router.navigate(['/pages/dashboard']);
    });
  }
}

