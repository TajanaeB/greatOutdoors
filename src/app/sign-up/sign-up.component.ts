import { Component, OnInit } from '@angular/core';
import { User } from 'src/User';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user = new User();

  returnData: any;





  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }



  SignUp(){

    var SignUp: any = {
      "email":this.user.email,
      "phoneNumber": this.user.phoneNumber,
      "password": this.user.password,
      "confirmPassword": this.user.password

    }
   
  }
}
