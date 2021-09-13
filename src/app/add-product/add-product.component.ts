import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/ProductData';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  product = new ProductData();

  returnData: any;


  postUrl = "http://localhost:8080/Product/addProduct";
  geturl = "http://localhost:8080/Product/";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  addProduct(){

    var add: any = {
      "name": this.product.name,
      "price": this.product.price,
      "description": this.product.description,
      "id": this.product.id,
      "quantity": this.product.quantity,
      "imageUri": this.product.imageUri
    }

    this.http.post(this.postUrl, add).subscribe();
  }

  fetchProduct() {
    if (this.product.id != 0) {
      this.http.get(this.geturl + this.product.id).subscribe((res) => {
        this.returnData = res;
        this.returnData = [this.returnData];
      });
    } else {
      this.http.get(this.geturl).subscribe((res) => {
        this.returnData = res;
      });
    }
  }
}
