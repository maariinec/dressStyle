import { Component, OnInit } from '@angular/core';
import { DressingService } from '../dressing.service';
import { DeleteService } from '../delete.service';

@Component({
  selector: 'app-dressing',
  templateUrl: './dressing.component.html',
  styleUrls: ['./dressing.component.css']
})
export class DressingComponent implements OnInit {

  selectedDressing;

  addDressingData={}

  dressings: any;
  token = {
  value: localStorage.getItem("toke")
}
  constructor(private _dressingService: DressingService, private _DeleteService: DeleteService) { }

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
        )}

    deleteCloth(dressingId){
      this._DeleteService.deletCloth(dressingId)
      .subscribe(
        res => {
          if (this.dressings.length > 0) {
            for (let i = 0; i < this.dressings.length; i++) {
              if (this.dressings[i]._id === res['_id']) {
                console.log('its true');
                this.dressings.splice(i, 1);
              }
            }
          }
          console.log(res);
        },
        err => console.log(err),
    )}


    onSelect(data) {
      this.selectedDressing = data;
    }

}
