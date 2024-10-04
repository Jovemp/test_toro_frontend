import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { CreateOrderComponent } from './create-order/create-order.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'orders', component: OrderComponent },
    { path: 'create-orders', component: CreateOrderComponent }, 
    { path: '**', redirectTo: '' }  
  ];
