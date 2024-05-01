import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { data } from 'jquery';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  host: { 'some-binding': 'some-value' },
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom)
    // this.httpClientService.get<Product[]>({
    //   controller: "products"
    // }).subscribe(data => console.log(data));

    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   name: "Kalem",
    //   stock: 100,
    //   price: 15
    // }).subscribe();   

    // this.httpClientService.put({
    //   controller:"products",
    // },{
    //   id:"40bee43e-95a4-433b-b038-03efcb835ffb",
    //   name:"Çizgili Defter",
    //   stock:250,
    //   price:35
    // }).subscribe();

    // this.httpClientService.delete({
    //   controller: "products"
    // },
    //   "08b9f2f5-e064-4e7a-8e3d-ca9636868fb0"
    // ).subscribe();

    // this.httpClientService.get({
    //   baseUrl: "https://jsonplaceholder.typicode.com",
    //   controller: "posts"
    // }).subscribe(data => console.log(data))

  }

}
