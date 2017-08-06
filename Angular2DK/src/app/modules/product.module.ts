import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { ProductsComponent } from '../products/products.component';
import { ProductFilterPipe } from '../services/productFilter';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductDetailGuard } from "app/provider/productGuard.service";
import { ProductService } from "app/services/product.Service";

import { SharedModule } from './shared.module';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductsComponent },
            {
                path: 'product/:id',
                component: ProductDetailComponent,
                canActivate: [ProductDetailGuard]
            },
        ]),
        SharedModule
    ],
    providers: [ProductService, ProductDetailGuard],
})
export class ProductModule {

}