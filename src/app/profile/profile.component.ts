import { Component, Input, OnInit } from '@angular/core';
import { ProductData } from 'src/ProductData';
import { User } from 'src/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() wishList: ProductData[] = [];
  @Input() users: User[] = [];
  @Input() currentUser = new User;
  
  constructor() { }

  ngOnInit(): void {
  }

}
