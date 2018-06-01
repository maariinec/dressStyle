import { Component, OnInit } from '@angular/core';
import { DeleteService } from '../delete.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})

export class CompteComponent implements OnInit {
  token = {
  value: localStorage.getItem("toke")
}

  constructor(private _DeleteService: DeleteService) { }

  ngOnInit() {
  }

  deleteAccount(){
    this._DeleteService.deletAccount(this.token)
    .subscribe(
      res => console.log(res),
      err => console.log(err),
  )}

}
