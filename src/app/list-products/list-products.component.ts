import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/ProductData';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  
  product = new ProductData();

  productsData: any;


  getAllProductsUrl = "http://localhost:8080/Product/all";
  deleteProductUrl = "http://localhost:8080/Product/delete/"

  constructor(private http: HttpClient,) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
      this.http.get(this.getAllProductsUrl).subscribe((res) => {
        this.productsData = res;
        console.log(this.productsData);
      });
  }

  editProduct(productId: number){
    console.log("edit product with id: " + productId);
  }

  deleteProduct(productId: number){
    console.log("delete product with id: " + productId);
    this.http.delete(this.deleteProductUrl + productId).subscribe();
    setTimeout(() =>
    this.fetchProducts(),
    500);
  }

  trackElement(index: number, productData: ProductData) {
    return productData.id;
  }


}
