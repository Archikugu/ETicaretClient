import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './components/products/products.module';
import { BasketsModule } from './components/baskets/baskets.module';
import { HomeModule } from './components/home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    BasketsModule,
    HomeModule
  ]
})
export class UiModule { }
