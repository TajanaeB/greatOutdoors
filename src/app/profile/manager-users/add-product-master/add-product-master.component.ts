import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/User';

@Component({
  selector: 'app-add-product-master',
  templateUrl: './add-product-master.component.html',
  styleUrls: ['./add-product-master.component.css']
})
export class AddProductMasterComponent implements OnInit {
  productMaster = new User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  postUrl = "http://localhost:8080/User/addUser";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  addUser(){
    var addUser: any = {
      "userName": this.productMaster.userName,
      "email":this.productMaster.email,
      "password": this.productMaster.password,
      "address": this.productMaster.address,
      "role": "product master"
    }
    this.http.post(this.postUrl, addUser).subscribe();
}
}
