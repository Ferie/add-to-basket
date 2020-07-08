import {
    async,
    ComponentFixture,
    TestBed,
    fakeAsync,
    tick,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { DetailsPageComponent } from './details-page.component';
import { ProductService } from 'src/app/services/product.service';
import { of } from 'rxjs';

const mockedProduct = {
    id: 1,
    name: 'Orange',
    image: 'assets/images/orange.jpg',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros nibh. Curabitur rhoncus nulla condimentum, accumsan erat at, semper ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur commodo quam a pharetra auctor. Sed egestas metus vitae vulputate vestibulum. Proin accumsan odio lobortis, pellentesque tellus a, auctor metus. Nunc viverra dui eleifend ligula laoreet sollicitudin. Sed quis luctus mauris. Suspendisse finibus lorem eu nisi egestas, id fermentum ex interdum.',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 0.5,
    url: 'orange'
};

describe('DetailsPageComponent', () => {
    let component: DetailsPageComponent;
    let fixture: ComponentFixture<DetailsPageComponent>;
    let service: ProductService;
    const singleProduct = 'orange';

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetailsPageComponent],
            imports: [HttpClientTestingModule],
            providers: [
                ProductService,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        queryParams: of({ product: singleProduct })
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        // Create component and test fixture
        fixture = TestBed.createComponent(DetailsPageComponent);
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

    it('the page title should be "Product details page - Riccardo Andreatta"', () => {
        const title = component.pageTitle.getTitle();
        expect(title).toEqual('Product details page - Riccardo Andreatta');
    });

    it('should trigger the service that retrieve the product and manage the server response', fakeAsync(() => {
        spyOn(service, 'getProductDetails').and.returnValue(of(mockedProduct));
        component.ngOnInit();
        tick();
        fixture.detectChanges();
        expect(service.getProductDetails).toHaveBeenCalled();
    }));
});
