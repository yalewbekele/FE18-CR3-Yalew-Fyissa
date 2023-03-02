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
foods: Array<IFoods> = foods;
total: number = 0;
id: number = 0;
qtty: number =0;

  constructor(private cs: CartService) {
    
  }

  addToCart(foods: IFoods) {
    alert("added");
    this.cs.addToCart(foods);
  }
  notAvailable(foods: IFoods) {
    alert("notAvailable");
    this.cs.addToCart(foods);
  }
}
