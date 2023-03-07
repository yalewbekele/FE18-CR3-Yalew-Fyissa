import { Injectable } from '@angular/core';
import { IFoods } from './ifoods';

@Injectable({
  providedIn: 'root'
})


// export class CartService {
//   foods: Array<IFoods> = [];
//   constructor() { }

//   addToCart(obj: IFoods) {
//     this.foods.push(obj);
//   }

//   getCart() {
//     return this.foods;
//   }

//   billTotal = 50;

//   calculateServiceFee(): number {
//     return this.billTotal * 0.1;
//   }

//   hasDiscount(): boolean {
//     return this.billTotal > 40;
//   }

//   calculateDiscount(): number {
//     return this.billTotal * 0.15;
//   }

//   calculateFinalAmount(): number {
//     if (this.hasDiscount()) {
//       return this.billTotal + this.calculateServiceFee() - this.calculateDiscount();
//     } else {
//       return this.billTotal + this.calculateServiceFee();
//     }
//   }
// }



export class CartService {
  foods: Array<IFoods> = [];
  total: number = 0;
  id: number = 0;
  qtty: number =0;

  constructor() { }

 addToCart(dish: IFoods) {
  this.foods.push(dish);
}


getCart() {
return this.foods;
}


clearCart() {
  this.foods = []; 
    return this.foods;
  }
  
getLength(){
return this.foods.length;
}

getTotal(){
this.total= 0;
for (let foods of this.foods) {
  this.total = this.total + (foods.price );
}

return this.total;

}

notAvailable(id:number){
this.qtty= 0;
this.foods.splice(id,1);
}

}
