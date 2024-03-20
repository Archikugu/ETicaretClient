import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  host: {'some-binding': 'some-value'},
})
export class ProductsComponent {

}
