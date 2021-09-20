import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/User';

@Component({
  selector: 'app-manager-users',
  templateUrl: './manager-users.component.html',
  styleUrls: ['./manager-users.component.css']
})
export class ManagerUsersComponent implements OnInit {
  @Input() users: User[] = [];
  addProductMasterView = false;
  managerUsersView = true;

  
  putUrl = "http://localhost:8080/User/update";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  assignUserToProductMaster(user: User){
    user.role = "product master";
    this.http.put(this.putUrl, user).subscribe();
    
  }

  unassignUserFromProductMaster(user: User){
    user.role = "customer";
    this.http.put(this.putUrl, user).subscribe();
  }

  addProductMaster(){
    this.addProductMasterView = true;
    this.managerUsersView = false;
  }

  managerUsers(){
    this.addProductMasterView = false;
    this.managerUsersView = true;
  }

  trackElement(index: number, userData: User) {
    return userData.user_id;
  }
}
