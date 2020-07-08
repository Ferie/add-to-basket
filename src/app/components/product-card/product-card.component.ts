import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'ra-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
    @Input() public product: Product;

    constructor(
        private productService: ProductService,
        private router: Router
    ) { }

    public addToCart(amount: number): void {
        this.productService.setBasketTotal(amount);
    }

    public goToDetails(url: string): void {
        this.router.navigate(['/details', url], { queryParams: { product: url }, queryParamsHandling: 'merge' });
    }
}
