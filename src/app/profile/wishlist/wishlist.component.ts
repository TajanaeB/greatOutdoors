import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AppProfileInteractionService } from 'src/app/app-profile-interaction.service';
import { LoginAppInteractionService } from 'src/app/login-app-interaction.service';
import { ProductData } from 'src/ProductData';
import { User } from 'src/User';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  @Input() wishList: ProductData[] = [];
  @Input() currentUser = new User;

  checkUserUrl = "http://localhost:8080/User/checkUser";
  postProductToUserUrl = "http://localhost:8080/UserProduct/add/";
  deleteProductFromUserWishListUrl = "http://localhost:8080/UserProduct/remove/wishlist/";
  fetchedData: any;

  
  
  constructor(private http: HttpClient,private _interactionService: AppProfileInteractionService) { }

  ngOnInit(): void {
    this.fetchUserData();
  }

  addProductFromWishListToCart(productId: number){
    console.log("added product with id: " + productId + " to cart");
    this.http.post(this.postProductToUserUrl + productId,this.currentUser.email).subscribe();
    this.wishList = this.wishList.filter(product => product != this.wishList.find(product=>product.product_id == productId));
    //this.fetchUserData();
  }

  removeProductFromWishList(productId: number){
    this.http.post(this.deleteProductFromUserWishListUrl + productId, this.currentUser.email).subscribe();
    this.wishList = this.wishList.filter(product => product != this.wishList.find(product=>product.product_id == productId));
    //this.fetchUserData();
  }

  trackElement(index: number, productData: ProductData) {
    return productData.product_id;
  }
  fetchUserData(){
    this.http.post(this.checkUserUrl, this.currentUser).subscribe(res=>{
      this.fetchedData = res;
      this._interactionService.sendUpdatedUserData(this.fetchedData);
      
    });

  }

}
