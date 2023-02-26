import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IFoods } from '../ifoods';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart: Array<IFoods> = [];
  constructor(private cs:CartService){}

  ngOnInit(): void {
    this.cart = this.cs.getCart();
  }
}
