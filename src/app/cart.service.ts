import { Injectable } from '@angular/core';
import { foods } from './foods';
import { IFoods } from './ifoods';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  food: Array<IFoods> = [];
  constructor() { }

  addToCart(obj: IFoods) {
    this.food.push(obj);
  }

  getCart() {
    return this.food;
  }

  billTotal = 50;

  calculateServiceFee(): number {
    return this.billTotal * 0.1;
  }

  hasDiscount(): boolean {
    return this.billTotal > 40;
  }

  calculateDiscount(): number {
    return this.billTotal * 0.15;
  }

  calculateFinalAmount(): number {
    if (this.hasDiscount()) {
      return this.billTotal + this.calculateServiceFee() - this.calculateDiscount();
    } else {
      return this.billTotal + this.calculateServiceFee();
    }
  }
}

