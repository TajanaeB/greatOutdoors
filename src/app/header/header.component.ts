import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartClickedMessage: string = "cart";
  homeClickedMessage: string = "home";
  productsClickedMessage: string = "products";
  loginClickedMessage: string = "login";
  profileClickedMessage: string = "profile";

  @Output() messageEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cartClicked(){
    this.messageEvent.emit(this.cartClickedMessage);
  }
  homeClicked(){
    this.messageEvent.emit(this.homeClickedMessage);
  }
  productsClicked(){
    this.messageEvent.emit(this.productsClickedMessage);
  }
  loginClicked(){
    this.messageEvent.emit(this.loginClickedMessage);
  }
  profileClicked(){
    this.messageEvent.emit(this.profileClickedMessage);
  }

  myimage2:string = "src/assets/images/GOLogo.png";
}


