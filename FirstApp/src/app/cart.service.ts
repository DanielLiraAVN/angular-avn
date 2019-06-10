import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;

  constructor() { }
}


const items = [];

 function addToCart(produto){
    this.items.push(produto);
  }

 function getItems(){
    return this.items;
  }

 function clearCart() {
    this.items = [];
    return this.items;
  }