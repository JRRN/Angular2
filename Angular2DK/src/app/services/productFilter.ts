import { fileExists } from 'ts-node/dist';
import { Pipe, PipeTransform } from '@angular/core';
import { validate } from 'codelyzer/walkerFactory/walkerFn';
import { IProduct } from '../models/IProduct';

@Pipe({
    name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform{
    
    transform(value: IProduct[], filterBy: string): IProduct[]{
        filterBy = filterBy ? filterBy.toLocaleLowerCase() :null;
        return filterBy ? value.filter((product : IProduct)=>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) :value;
    }
}