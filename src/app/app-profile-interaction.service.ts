import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/User';

@Injectable({
  providedIn: 'root'
})
export class AppProfileInteractionService {

  private _updateUserData = new Subject<User>();
  
  fetchUpdatedUserData$ = this._updateUserData.asObservable();

  constructor() { }

  
  sendUpdatedUserData(_updateUserData: User){
    this._updateUserData.next(_updateUserData);
  }

}






 

  

