import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/User';

@Injectable({
  providedIn: 'root'
})
export class LoginAppInteractionService {

  private _LoggedInUserMessageSource = new Subject<User>();
  
  loggedInUser$ = this._LoggedInUserMessageSource.asObservable();

  constructor() { }

  sendUserLoggedIn(loggedInUser: User){
    this._LoggedInUserMessageSource.next(loggedInUser);
  }

  
}
