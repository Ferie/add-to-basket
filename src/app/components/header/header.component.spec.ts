import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header.component';
import { ProductService } from 'src/app/services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';



describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let service: ProductService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [HeaderComponent],
            providers: [ProductService]
        }).compileComponents();
    }));

    beforeEach(() => {
        // Create component and test fixture
        fixture = TestBed.createComponent(HeaderComponent);
        // Instatiate test component from the fixture
        component = fixture.componentInstance;
        // Detect the changes in the component
        fixture.detectChanges();
        // Get the provided services to the TestBed
        service = TestBed.get(ProductService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('should subscribe to the basket total', async(() => {
    //     component.users.subscribe(users => {
    //         fixture.detectChanges()
    //         expect(users).toBe(testUsers)
    //     })
    // }))
});
