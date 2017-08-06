import { ProductService } from '../services/product.Service';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'app/models/IProduct';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  id: number = this._route.snapshot.params['id'];
  product: IProduct;
  errorMessage: string;

  @Input() baseUrl: string;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) {

  }

  private getProductDetail(id): void {
    this._productService.getProduct(id).subscribe(
      productDetail => this.product = productDetail,
      error => this.errorMessage = <any>error);
      console.log(this.product);
  }

  private onBack(): void {
    this._router.navigate(['/products']);
  }
  ngOnInit() {
    this.getProductDetail(this.id);
  }

}
