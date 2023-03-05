import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { foods } from '../foods';
import { IFoods } from '../ifoods';

@Component({
  selector: 'app-product-details',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {
  foods: IFoods = {} as IFoods;
  id: number = 0;

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.foods = foods[this.id];
    });
  }
}

