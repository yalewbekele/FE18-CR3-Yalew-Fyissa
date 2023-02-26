import { Component, } from '@angular/core';
import { foods } from '../foods';
import { CartService } from '../cart.service';
import { IFoods } from '../ifoods';

@Component({
  selector: 'app-foods',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu: Array<IFoods> = foods;

  constructor(private cs: CartService) {
    
  }

  addToCart(foods: IFoods) {
    alert("added");
    this.cs.addToCart(foods);
  }
  // notAvailable(foods: IFood) {
  //   alert("notAvailable");
  //   this.cs.notAvailable(1);
  // }
}
