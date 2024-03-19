import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';
import { BasketsComponent } from './baskets/baskets.component';
import { BasketsModule } from './baskets/baskets.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    HomeModule,
    BasketsModule
  ]
})
export class ComponentsModule { }
