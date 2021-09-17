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


  postUrl = "http://localhost:8080/User/LogIn";


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }



 LogIn(){

    var LogIn: any = {
      "email":this.user.email,
      "userName": this.user.userName,
      "password": this.user.password
    }
   
    this.http.post(this.postUrl, LogIn).subscribe();
  }
}

