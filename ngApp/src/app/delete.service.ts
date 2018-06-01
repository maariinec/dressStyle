import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DeleteService {

  private _deleteUrl='http://localhost:3000/api/deleteAccount';

  constructor(private http: HttpClient) { }

  deletAccount(name){
    return this.http.delete(this._deleteUrl, name);
  }
}
