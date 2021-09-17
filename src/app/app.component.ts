import { Component, Input, OnInit, Output } from '@angular/core';
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
  constructor(private _interactionService : LoginAppInteractionService){

  }

  ngOnInit(): void {
    this._interactionService.loggedInUser$.subscribe(user=>{
      this.currentUser = user;
      this.loggedUser = true;
    });
  }

  
 
}