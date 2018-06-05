import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser () { // function to log in and check if the user is in the database
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('toke', res.email)
        console.log(res.email)
        this._router.navigate(['/dressing'])
      },
      err => console.log(err)
    )
  }

}
