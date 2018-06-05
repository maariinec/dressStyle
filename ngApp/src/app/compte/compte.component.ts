import { Component, OnInit } from '@angular/core';
import { DeleteService } from '../delete.service';
import { EditService } from '../edit.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})

export class CompteComponent implements OnInit {
  token = {
  value: localStorage.getItem("toke")
}

  userData = {
    email: '',
    password: ''
  }

  constructor(private _DeleteService: DeleteService, private _editService: EditService) { }

  ngOnInit() {
    this._editService.getLoggedUser(this.token.value).subscribe(res => {
      this.userData.email = res['email'];
      this.userData.password = res['password'];
    });
  }

  deleteAccount(){  //function delete account for user
    this._DeleteService.deletAccount(this.token)
    .subscribe(
      res => console.log(res),
      err => console.log(err),
  )}

  updateUser() { // function edit account
    this._editService.editUser(this.token.value, this.userData).subscribe(res => {
      console.log(res);
    });
  }

}
