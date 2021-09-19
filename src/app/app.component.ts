import { Component,  OnInit, Output, } from '@angular/core';
import { ProductData } from 'src/ProductData';
import { User } from 'src/User';
import { LoginAppInteractionService } from './login-app-interaction.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'greatoutdoors';
  loggedUser = false;
  currentUser = new User();
  userEmail: string = "";
  userRole: string = "";
  // userCartProducts: ProductData[] = [];
  currentUserRole = this.currentUser.role;

  userLoggedInMessage = "userLoggedOut";

  showCart = false;
  showProducts = false;
  showLogin = false;
  showProfile = false;
  showHome = true;

  constructor(private _interactionService : LoginAppInteractionService){

  }

  ngOnInit(): void {
      this._interactionService.loggedInUser$.subscribe(user=>{
        this.currentUser = user;
        // this.userCartProducts = user.products;
        this.userEmail = user.email;
        this.userRole = user.role;
        if(user.email != ""){
          this.userLoggedIn();
        }
      });
  }

  userLoggedIn(){
    this.loggedUser = true;
    this.userLoggedInMessage = "userLoggedIn";
    this.showCart = false;
    this.showProducts = true;
    this.showLogin = false;
    this.showProfile = false;
    this.showHome = false;
  }

  recieveMessage($event:string){
    if($event === "cart"){
      this.showCart = true;
      this.showProducts = false;
      this.showLogin = false;
      this.showProfile = false;
      this.showHome = false;
    }else if($event === "home"){
      this.showCart = false;
      this.showProducts = false;
      this.showLogin = false;
      this.showProfile = false;
      this.showHome = true;
    }else if($event === "profile"){
      this.showCart = false;
      this.showProducts = false;
      this.showLogin = false;
      this.showProfile = true;
      this.showHome = false;
    }else if($event === "login"){
      this.showCart = false;
      this.showProducts = false;
      this.showLogin = true;
      this.showProfile = false;
      this.showHome = false;
    }else if($event === "products"){
      this.showCart = false;
      this.showProducts = true;
      this.showLogin = false;
      this.showProfile = false;
      this.showHome = false;
    }
    else if($event === "logout"){
      this.currentUser = new User;
      // this.userCartProducts = [];
      this.userLoggedInMessage = "userLoggedOut";
      this.userEmail = "";
      this.userRole = "";
      this.showCart = false;
      this.showProducts = false;
      this.showLogin = false;
      this.showProfile = false;
      this.showHome = true;
      this.loggedUser = false;
    }
  }


}