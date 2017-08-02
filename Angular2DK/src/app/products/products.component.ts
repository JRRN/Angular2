import { ProductService } from '../services/product.Service';
import { IProduct } from '../models/IProduct';
import { Component, OnInit } from '@angular/core';

@Component({
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
    errorMessage: string;

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any> error
            );
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

}
