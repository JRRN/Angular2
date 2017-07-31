import { ProductService } from '../services/product.Service';
import { IProduct } from '../models/IProduct';
import { any } from 'codelyzer/util/function';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


    constructor(private _productService: ProductService) {

    }
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List ' + message;
    }

    pageTitle: String = 'Product List';
    showImage: boolean = true;
    listFilter: string;
    products: IProduct[];

    ngOnInit() {
        this.products = this._productService.getProducts();
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

}
