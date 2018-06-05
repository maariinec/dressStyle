import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) { // function for register send a new user in database
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) { // function for login connection in database
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() { // deconneted user in database
    localStorage.removeItem('toke')
    this._router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('toke')
  }

  loggedIn() {
    return !!localStorage.getItem('toke')
  }
}
