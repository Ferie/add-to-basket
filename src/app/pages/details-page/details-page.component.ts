import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ProductService } from 'src/app/services/product.service';
import { take } from 'rxjs/operators';

@Component({
    selector: 'ra-details-page',
    templateUrl: './details-page.component.html',
    styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
    public product: any;

    constructor(
        public pageTitle: Title,
        private activatedRoute: ActivatedRoute,
        private productService: ProductService
    ) {
        this.pageTitle.setTitle('Product details page - Riccardo Andreatta');
        this.activatedRoute.queryParams.subscribe(param => this.product = param.product);
    }

    public ngOnInit(): void {
        this.productService.getProductDetails(this.product).pipe(
            take(1)
        ).subscribe(result => this.product = result);
    }
}
