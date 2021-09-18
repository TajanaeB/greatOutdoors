import { Component,  OnInit, } from '@angular/core';
import { ProductData } from 'src/ProductData';
import { User } from 'src/User';
import { LoginAppInteractionService } from './login-app-interaction.service';

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
  userCartProducts: ProductData[] = [];

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
        this.userCartProducts = user.products;
        this.userEmail = user.email;
        if(user.email != ""){
          this.loggedUser = true;
        }
      });
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
  }


}