import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DeleteService {

  private _deleteUrl='http://localhost:3000/api/deleteAccount';
  private _deleteUrlCloth='http://localhost:3000/api/deleteCloth/';

  constructor(private http: HttpClient) { }

  deletAccount(name){  // function for delete account send in database
    return this.http.delete(this._deleteUrl, name);
  }

  deletCloth(dressingId){ // function for delete cloth send in database
    return this.http.delete(this._deleteUrlCloth + dressingId);
  }
}
