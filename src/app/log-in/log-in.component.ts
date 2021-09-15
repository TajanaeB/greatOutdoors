import { Component, OnInit } from '@angular/core';
import { User } from 'src/User';
import { HttpClient } from '@angular/common/http';
// MDB Angular Free
// Angular Forms Modules


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


  user = new User();

  returnData: any;





  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }



  SignIn(){

    var signIn: any = {
      "email":this.user.email,
      "phoneNumber": this.user.phoneNumber,
      "password": this.user.password
    }
   
  }
}
