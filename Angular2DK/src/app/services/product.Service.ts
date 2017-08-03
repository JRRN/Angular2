import { HttpErrorResponse } from '@angular/common/http/public_api';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Injectable()
export class ProductService {
    private _productUrl = 'api/products/products.json';

    constructor(private _http: Http) {
    }

    getProducts(): Observable<IProduct[]> {
        var responseProducts = this._http.get(this._productUrl);
        return responseProducts.map(
            (response: Response) => <IProduct[]>response.json())
            .do(data => console.log('All ' + JSON.stringify(data)))
            .catch(this.handleError);

    }

    getProduct(idProduct: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products
                .find(p => p.productId == idProduct)
            );
    }

    private handleError(err: HttpErrorResponse) {

        let errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}