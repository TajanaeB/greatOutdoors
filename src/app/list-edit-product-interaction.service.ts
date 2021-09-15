import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductData } from 'src/ProductData';

@Injectable({
  providedIn: 'root'
})
export class ListEditProductInteractionService {

  private _listProductMessageSource = new Subject<ProductData>();
  private _editProductFinished = new Subject<string>();
  listProductMessage$ = this._listProductMessageSource.asObservable();
  editProductFinished$ = this._editProductFinished.asObservable();

  constructor() { }

  sendEditProduct(editProduct: ProductData){
    this._listProductMessageSource.next(editProduct);
  }

  sendEditProductFinished(message: string){
    this._editProductFinished.next(message);
  }


}
