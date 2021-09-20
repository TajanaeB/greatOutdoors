import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ProductData } from 'src/ProductData';
import { User } from 'src/User';
import { AppProfileInteractionService } from '../app-profile-interaction.service';
import { LoginAppInteractionService } from '../login-app-interaction.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() wishList: ProductData[] = [];
  @Input() users: User[] = [];
  @Input() currentUser = new User;
  fetchedData: any;
  checkUserUrl = "http://localhost:8080/User/checkUser";
  constructor(private http: HttpClient,private _interactionService: AppProfileInteractionService) { }

  ngOnInit(): void {
    this.fetchUserData();
  }
  fetchUserData(){
    this.http.post(this.checkUserUrl, this.currentUser).subscribe(res=>{
      this.fetchedData = res;
      this._interactionService.sendUpdatedUserData(this.fetchedData);
      
    });
  }
}
