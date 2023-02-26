import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';

const routes: Routes = [{
  path: "", component: HomeComponent
}, {
  path: "menu", component: MenuComponent
  }, {
    path: "about-us", component: AboutUsComponent
    }, {
      path: "menu-detail", component: MenuDetailComponent
      },
  {
  path: "cart", component: CartComponent
  }, {
  path: "menu/:id", component: MenuDetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
