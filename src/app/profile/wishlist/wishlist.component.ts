import { Component, Input, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

  addProductFromWishListToCart(productId: number){
    // remove product from wishlist and add it to cart
  }

  removeProductFromWishList(productId: number){
    // remove product from wishlist
  }

}
