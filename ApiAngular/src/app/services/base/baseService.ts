import { Inject } from '@angular/core';

export class BaseService {

    protected baseUrl: string;

    constructor() {
        this.baseUrl = 'http://localhost:8080/Lista';
    }
}
