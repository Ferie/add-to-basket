import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'ra-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
    public total: number;

    constructor(
        private productService: ProductService,
        private cdRef: ChangeDetectorRef
    ) {}

    public ngOnInit(): void {
        this.productService.checkoutTotal$.subscribe(tot => {
            this.total = tot;
            this.cdRef.detectChanges();
        });
    }
}
