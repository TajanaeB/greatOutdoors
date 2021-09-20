import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/User';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user = new User();
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  @Output() showLoginEvent = new EventEmitter<string>();


  returnData: any;


  postUrl = "http://localhost:8080/User/addUser";


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null){
      form.reset();
      this.user = {
        user_id: 0,
        userName: '',
        email: '',
        password: '',
        address: '',
        role: '',
        products: [],
        wishList: []
      }
    }
  }

 addUser(){
    var addUser: any = {
      "userName": this.user.userName,
      "email":this.user.email,
      "password": this.user.password,
      "address": this.user.address,
      "role": this.user.role
    }
    this.http.post(this.postUrl, addUser).subscribe();
}

sendLoginButtonClicked(){
  this.showLoginEvent.emit("loginClicked");
}

}
