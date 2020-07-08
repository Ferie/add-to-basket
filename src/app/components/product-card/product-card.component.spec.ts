import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductCardComponent } from './product-card.component';

const mockedProduct = {
    id: 1,
    name: 'Orange',
    image: 'assets/images/orange.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros nibh. Curabitur rhoncus nulla condimentum, accumsan erat at, semper ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur commodo quam a pharetra auctor. Sed egestas metus vitae vulputate vestibulum. Proin accumsan odio lobortis, pellentesque tellus a, auctor metus. Nunc viverra dui eleifend ligula laoreet sollicitudin. Sed quis luctus mauris. Suspendisse finibus lorem eu nisi egestas, id fermentum ex interdum.',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 0.5,
    url: 'orange'
};

describe('ProductCardComponent', () => {
    let component: ProductCardComponent;
    let fixture: ComponentFixture<ProductCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductCardComponent],
            imports: [HttpClientTestingModule, RouterTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
