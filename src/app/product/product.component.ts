import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  addProductView = false;
  listProductView = true;

  constructor() { }

  ngOnInit(): void {
  }
 
  addProductClicked(){
    this.addProductView = true;
    this.listProductView = false;
  }
  showListProduct(){
    this.addProductView = false;
    this.listProductView = true;
  }



}
