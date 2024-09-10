import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  public isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  public login(email: string, password: string) {
    return this.http.post(environment.api + '/login', { email: email, password: password });
  }

  public logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
