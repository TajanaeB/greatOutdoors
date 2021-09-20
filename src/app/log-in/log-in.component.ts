import { Component, OnInit, Output } from '@angular/core';
import { User } from 'src/User';
import { HttpClient } from '@angular/common/http';
import { LoginAppInteractionService } from '../login-app-interaction.service';
// MDB Angular Free
// Angular Forms Modules


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


  user = new User();
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  returnData: any;
  userLoginResponse : any;

  checkUserUrl = "http://localhost:8080/User/checkUser";

  constructor(private _interactionService: LoginAppInteractionService, private http: HttpClient) { }
  showLoginView = true;
  signupView = false;
  ngOnInit(): void {
  }

  userLogin(){
    var user: any = {
      "email":this.user.email,
      "password": this.user.password
    }
    this.http.post(this.checkUserUrl, user).subscribe(res=>{
      this.userLoginResponse = res;
      console.log(this.userLoginResponse);
      if(this.userLoginResponse.email == null){
        console.log("User does not exist");
      }else{
        this.UserLoginSuccess(this.userLoginResponse);
      }
    });
  }

  UserLoginSuccess(user: User){
    this._interactionService.sendUserLoggedIn(user);

  }
  showSignupView(){
    this.showLoginView = false;
    this.signupView = true;
  }

  recieveMessage($event: string){
    if($event === "loginClicked"){
      this.showLoginView = true;
      this.signupView = false;
    }
  }
}

