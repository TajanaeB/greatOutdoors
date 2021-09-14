import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/ProductData';
import { ChangeDetectorRef } from '@angular/core';
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

  constructor(private http: HttpClient,private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  public trackItem (index: number, item: ProductData) {
    return item.id;
  }

  fetchProducts() {
      this.http.get(this.getAllProductsUrl).subscribe((res) => {
        this.productsData = res;
        console.log(this.productsData);
      });
      this.changeDetect();
  }

  editProduct(productId: number){
    console.log("edit product with id: " + productId);
    this.changeDetect();
  }

  deleteProduct(productId: number){
    console.log("delete product with id: " + productId);
    this.http.delete(this.deleteProductUrl+ productId).subscribe();
    this.changeDetect();
  }

  changeDetect(){
    this.changeDetection.detectChanges();
  }

}
