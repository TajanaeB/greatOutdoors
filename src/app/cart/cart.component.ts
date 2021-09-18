import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ProductData } from 'src/ProductData';
import { User } from 'src/User';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input("userCartProducts") products: ProductData[] = [];
  @Input() userEmail : String = "";

  
  loggedUser = new User;

  constructor(private http: HttpClient) {
    
  }
  postDeleteProductFromUserUrl = "http://localhost:8080/UserProduct/remove/";

  ngOnInit(): void {
  }


  
removeProductFromCart(productId: number){
  console.log("delete product with id: " + productId);
  this.http.post(this.postDeleteProductFromUserUrl + productId, this.userEmail).subscribe();
  this.products = this.products.filter(product => product != this.products.find(product=>product.product_id == productId));
}




}
