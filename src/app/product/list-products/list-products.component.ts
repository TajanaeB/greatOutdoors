import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ProductData } from 'src/ProductData';
import { ListEditProductInteractionService } from '../../list-edit-product-interaction.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  
  product = new ProductData();
  productsData: any;
  editData: any;
  editProductView = false;

  getAllProductsUrl = "http://localhost:8080/Product/all";
  deleteProductUrl = "http://localhost:8080/Product/delete/";
  getProductByIdUrl = "http://localhost:8080/Product/";

  show = false;
  constructor(private http: HttpClient, private _interactionService : ListEditProductInteractionService) { }

  ngOnInit(): void {
    this.fetchProducts();
    this._interactionService.editProductFinished$.subscribe(message=>{
      if(message === 'confirm'){
        this.fetchProducts();
        this.editProductView=false;
      }else if(message === 'close'){
        this.editProductView=false;
      }
    })
  }

  fetchProducts() {
      this.http.get(this.getAllProductsUrl).subscribe((res) => {
        this.productsData = res;
        console.log(this.productsData);
      });
  }

  editProduct(productId: number){
    console.log("edit product with id: " + productId);
    this.http.get(this.getProductByIdUrl + productId).subscribe((res) => {
      this.editData = res;
    });
    setTimeout(() =>
    this._interactionService.sendEditProduct(this.editData),
    500);
    this.editProductView = true;
  }

  deleteProduct(productId: number){
    console.log("delete product with id: " + productId);
    this.http.delete(this.deleteProductUrl + productId).subscribe();
    setTimeout(() =>
    this.fetchProducts(),
    500);
  }

  addProductToCart(productId: number){
    console.log("added product with id: " + productId + " to cart");

  }

  trackElement(index: number, productData: ProductData) {
    return productData.product_id;
  }

 


}
