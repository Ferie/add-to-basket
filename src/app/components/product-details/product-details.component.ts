import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'ra-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
    @Input() public product: Product;

    constructor(private productService: ProductService) {}

    public addToBasket(amount: number) {
        this.productService.setBasketTotal(amount);
    }
}
