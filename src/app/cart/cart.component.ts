import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/ProductData';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  product = new ProductData();
  userProductData: any;

  constructor(private http: HttpClient) { }

  getUserProductsUrl = "http://localhost:8080/UserProduct/all"

  ngOnInit(): void {

  }

  fetchUserProducts() {
    this.http.get(this.getUserProductsUrl).subscribe((res) => {
      this.userProductData = res;
      console.log(this.userProductData);
    });
}

removeProductFromCart(productId: number){

}



}
