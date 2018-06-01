import { Component, OnInit } from '@angular/core';
import { DressingService } from '../dressing.service';

@Component({
  selector: 'app-dressing',
  templateUrl: './dressing.component.html',
  styleUrls: ['./dressing.component.css']
})
export class DressingComponent implements OnInit {

  addDressingData={}

  dressings: any;
  token = {
  value: localStorage.getItem("toke")
}
  constructor(private _dressingService: DressingService) { }

  ngOnInit() {
    this.getUserDressings()
  }



  addDressing(){
    this._dressingService.addDressing(this.addDressingData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )}



    getUserDressings(){
      this._dressingService.getDressingByName(this.token)
        .subscribe(
          res => {this.dressings=res; console.log(res)},
          err => console.log(err)
        )
      }



}
