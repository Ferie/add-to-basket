import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductDetailsComponent } from './product-details.component';

const mockedProduct = {
    id: 1,
    name: 'Orange',
    image: 'assets/images/orange.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros nibh. Curabitur rhoncus nulla condimentum, accumsan erat at, semper ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur commodo quam a pharetra auctor. Sed egestas metus vitae vulputate vestibulum. Proin accumsan odio lobortis, pellentesque tellus a, auctor metus. Nunc viverra dui eleifend ligula laoreet sollicitudin. Sed quis luctus mauris. Suspendisse finibus lorem eu nisi egestas, id fermentum ex interdum.',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 0.5,
    url: 'orange'
};

fdescribe('ProductDetailsComponent', () => {
    let component: ProductDetailsComponent;
    let fixture: ComponentFixture<ProductDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductDetailsComponent],
            imports: [HttpClientTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        // Create component and test fixture
        fixture = TestBed.createComponent(ProductDetailsComponent);
        // Instatiate test component from the fixture
        component = fixture.componentInstance;
        // // Stub @Input()
        // component.product = mockedProduct;
        // Detect the changes in the component
        fixture.detectChanges();
    });

    it('should create and get the input from parent component', () => {
        component.product = mockedProduct;
        fixture.detectChanges();
        console.log('component', component.product);
        // expect(component).toBeTruthy();
        expect(component.product).toBeDefined();
        expect(component.product).not.toBeNull();
    });
});
