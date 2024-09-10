import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(){
    this.authService.login(this.email, this.password).subscribe((res: any) => {
      if (res.token && res.userID) {
        if (res.verification === 3) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
        }
      }
    })
  }

}
