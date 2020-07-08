import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    public total = 0;
    private apiURL: string;
    private _checkoutTotal$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    constructor(private http: HttpClient) {
        this.apiURL = 'assets/data/';
    }

    getProducts() {
        return this.http.get<Array<Product>>(this.apiURL + 'products.json');
    }

    getProductDetails(productName: string) {
        return this.http.get<Product>(this.apiURL + productName + '.json');
    }

    setBasketTotal(amount: number) {
        this.total += amount;
        this._checkoutTotal$.next(this.total);
    }

    public get checkoutTotal$(): BehaviorSubject<number> {
        return this._checkoutTotal$;
    }
}
