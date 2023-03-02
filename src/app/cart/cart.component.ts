import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IFoods } from '../ifoods';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
// export class CartComponent implements OnInit{
//   cart: Array<IFoods> = [];
//   constructor(private cs:CartService){}

//   ngOnInit(): void {
//     this.cart = this.cs.getCart();
//   }
// }

export class CartComponent implements OnInit {

  

foods: Array<IFoods> =[];
total: number = 0;
id: number = 0;
qtty: number =1;

constructor(private CS: CartService){

}
ngOnInit(): void {
  this.foods= this.CS.getCart();
  this.total = this.CS.getTotal();
 
}

clearCart() {
  this.foods = []; 
    return this.foods;
  }

  removeItem(id:number){
    this.qtty= 0;
    this.foods.splice(id,0);
  }

}

