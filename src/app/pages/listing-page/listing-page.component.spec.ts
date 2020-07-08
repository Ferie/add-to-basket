import {
    async,
    ComponentFixture,
    TestBed,
    fakeAsync,
    tick,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ListingPageComponent } from './listing-page.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { ProductService } from 'src/app/services/product.service';
import { OrderByPipe } from '../../pipes/order-by/order-by.pipe';

const mockedProducts = [
    {
        id: 1,
        name: 'Orange',
        image: 'assets/images/orange.jpg',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros nibh. Curabitur rhoncus nulla condimentum, accumsan erat at, semper ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur commodo quam a pharetra auctor. Sed egestas metus vitae vulputate vestibulum. Proin accumsan odio lobortis, pellentesque tellus a, auctor metus. Nunc viverra dui eleifend ligula laoreet sollicitudin. Sed quis luctus mauris. Suspendisse finibus lorem eu nisi egestas, id fermentum ex interdum.',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 0.5,
        url: 'orange'
    },
    {
        id: 2,
        name: 'Apple',
        image: 'assets/images/apple.jpg',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros nibh. Curabitur rhoncus nulla condimentum, accumsan erat at, semper ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur commodo quam a pharetra auctor. Sed egestas metus vitae vulputate vestibulum. Proin accumsan odio lobortis, pellentesque tellus a, auctor metus. Nunc viverra dui eleifend ligula laoreet sollicitudin. Sed quis luctus mauris. Suspendisse finibus lorem eu nisi egestas, id fermentum ex interdum.',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 0.75,
        url: 'apple'
    },
    {
        id: 3,
        name: 'Banana',
        image: 'assets/images/banana.jpg',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros nibh. Curabitur rhoncus nulla condimentum, accumsan erat at, semper ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur commodo quam a pharetra auctor. Sed egestas metus vitae vulputate vestibulum. Proin accumsan odio lobortis, pellentesque tellus a, auctor metus. Nunc viverra dui eleifend ligula laoreet sollicitudin. Sed quis luctus mauris. Suspendisse finibus lorem eu nisi egestas, id fermentum ex interdum.',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 1.05,
        url: 'banana'
    }
];

describe('ListingPageComponent', () => {
    let component: ListingPageComponent;
    let fixture: ComponentFixture<ListingPageComponent>;
    let service: ProductService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ListingPageComponent,
                ProductCardComponent,
                OrderByPipe
            ],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule
            ],
            providers: [ProductService]
        }).compileComponents();
    }));

    beforeEach(() => {
        // Create component and test fixture
        fixture = TestBed.createComponent(ListingPageComponent);
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

    it('the page title should be "Listing page - Riccardo Andreatta"', () => {
        const title = component.pageTitle.getTitle();
        expect(title).toEqual('Listing page - Riccardo Andreatta');
    });

    it('should trigger the service that retrieve the products and manage the server response', fakeAsync(() => {
        spyOn(service, 'getProducts').and.returnValue(of(mockedProducts));
        component.ngOnInit();
        tick();
        fixture.detectChanges();
        expect(service.getProducts).toHaveBeenCalled();
    }));
});
