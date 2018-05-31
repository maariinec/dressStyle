import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DressingService {
  private _adddressingUrl= "http://localhost:3000/api/adddressing";
  private _dressingUrl= "http://localhost:3000/api/dressings";



  constructor(private http: HttpClient) { }


  addDressing(dressing){
    return this.http.post(this._adddressingUrl, dressing);
  }

  getDressingByName(name){
    return this.http.get(this._dressingUrl, name);
  }
}
