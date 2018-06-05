import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EditService {
  private _editUrl='http://localhost:3000/api/user/';

  constructor(private http: HttpClient) { }

  getLoggedUser(email) { // function for get logged user (id)
    return this.http.get(this._editUrl + email);
  }

  editUser(email, userData) { // edit account user email
    return this.http.put(this._editUrl + email, userData);
  }

}
