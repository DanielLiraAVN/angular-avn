import { produtos } from './../product-list/Produtos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details-component',
  templateUrl: './product-details-component.component.html',
  styleUrls: ['./product-details-component.component.css']
})
export class ProductDetailsComponentComponent implements OnInit {

  produto;

  constructor(private route: ActivatedRoute, 
    private cartService: CartService
    ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.produto = produtos[+params.get('produtoId')];
    });
  }


  addToCart(produto) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(produto);
  }





}
