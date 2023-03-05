import { Component } from '@angular/core';
import { foods } from '../foods';
import { IFoods } from '../ifoods';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}

export class MenuComponent {
foods: Array<IFoods> = foods;
total: number = 0;
id: number = 0;
availabel: number =0;
}

