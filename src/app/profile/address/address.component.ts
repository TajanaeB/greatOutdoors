import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/User';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() currentUser = new User;
  constructor() { }

  ngOnInit(): void {
  }

}
