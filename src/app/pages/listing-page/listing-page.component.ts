import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../interfaces';
import { take } from 'rxjs/operators';

@Component({
    selector: 'ra-listing-page',
    templateUrl: './listing-page.component.html',
    styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent implements OnInit {
    public products: Array<Product>;
    public orderBy: string;

    constructor(
        private productService: ProductService,
        public pageTitle: Title
    ) {
        this.pageTitle.setTitle('Listing page - Riccardo Andreatta');
    }

    public ngOnInit(): void {
        this.productService.getProducts().pipe(
            take(1)
        ).subscribe(result => this.products = result);
    }

    public sortBy(order: string): void {
        this.orderBy = order;
    }
}
