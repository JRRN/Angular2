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

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}