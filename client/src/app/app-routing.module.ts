import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import {GuestComponent} from './components/guest/guest.component'
import {CartComponent} from './components/cart/cart.component'


// Created routes to the components
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'guest', component: GuestComponent},
  {path: 'cart-page', component: CartComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
