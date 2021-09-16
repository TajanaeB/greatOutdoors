import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/ProductData';
import { ListEditProductInteractionService } from '../list-edit-product-interaction.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  editProductData= new ProductData;
  putUrl = "http://localhost:8080/Product/update";


  constructor(private _interactionService: ListEditProductInteractionService, private http: HttpClient) { }

  ngOnInit(): void {
    this._interactionService.listProductMessage$.subscribe(result =>{
      console.log(result);
      this.editProductData = result;
    });
    
  }

  editProduct(){
    var update: any = {
      "name": this.editProductData.name,
      "price": this.editProductData.price,
      "description": this.editProductData.description,
      "product_id": this.editProductData.product_id,
      "quantity": this.editProductData.quantity,
      "imageUrl": this.editProductData.imageUrl,
      "category":this.editProductData.category
  }
  this.http.put(this.putUrl, update).subscribe();
  
  setTimeout(() =>
  this._interactionService.sendEditProductFinished("confirm"),
  500);

  }

  canelEditProduct(){
    this._interactionService.sendEditProductFinished("close")
  }

}


