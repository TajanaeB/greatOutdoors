import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ProductData } from 'src/ProductData';
import { User } from 'src/User';
import { LoginAppInteractionService } from '../login-app-interaction.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: ProductData[] = [];
  @Input() userEmail : string = "";
  checkoutButtonIsDisabled = false;

  
  loggedUser = new User;
  constructor(private http: HttpClient) {
    
  }
  postDeleteProductFromUserUrl = "http://localhost:8080/UserProduct/remove/";
  postDeleteAllProductsFromUserUrl = "http://localhost:8080/UserProduct/removeAll/";
  getUserProductsUrl = "http://localhost:8080/UserProduct/all/";
  ngOnInit(): void {
    this.fetchUserProducts(this.userEmail);
    
  }


  
removeProductFromCart(productId: number){
  console.log("delete product with id: " + productId);
  this.http.post(this.postDeleteProductFromUserUrl + productId, this.userEmail).subscribe();
  this.products = this.products.filter(product => product != this.products.find(product=>product.product_id == productId));
  if(this.products.length === 0){
    this.checkoutButtonIsDisabled = true;
  }
}

fetchUserProducts(userEmail: string){
  this.http.get(this.getUserProductsUrl + userEmail).subscribe((res : any)=>{
    this.products = res;
    console.log(this.products);
    if(this.products.length > 0){
      this.checkoutButtonIsDisabled = false;
    }else{
      this.checkoutButtonIsDisabled = true;
    }
    
  });

}


checkout(){
  this.checkoutButtonIsDisabled = false;
  this.products = [];
  this.http.post(this.postDeleteAllProductsFromUserUrl,this.userEmail).subscribe((res: any)=>{
    console.log(res);
  });
  if(this.products.length === 0){
    this.checkoutButtonIsDisabled = true;
  }
  
  
}

trackElement(index: number, productData: ProductData) {
  return productData.product_id;
}




}
