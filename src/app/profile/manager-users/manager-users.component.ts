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
  constructor() { }

  ngOnInit(): void {
  }


  assignUserToProductMaster(userId:number){

  }

  unassignUserFromProductMaster(userId:number){

  }

  addProductMaster(){
    this.addProductMasterView = true;
    this.managerUsersView = false;
  }

  managerUsers(){
    this.addProductMasterView = false;
    this.managerUsersView = true;
  }
}
