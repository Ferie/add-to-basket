import { TestBed, inject } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { ProductService } from './product.service';

const products = [
    {
        id: 1,
        name: 'Orange',
        image: 'assets/images/orange.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros nibh. Curabitur rhoncus nulla condimentum, accumsan erat at, semper ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur commodo quam a pharetra auctor. Sed egestas metus vitae vulputate vestibulum. Proin accumsan odio lobortis, pellentesque tellus a, auctor metus. Nunc viverra dui eleifend ligula laoreet sollicitudin. Sed quis luctus mauris. Suspendisse finibus lorem eu nisi egestas, id fermentum ex interdum.',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 0.50,
        url: 'orange'
    },
    {
        id: 2,
        name: 'Apple',
        image: 'assets/images/apple.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros nibh. Curabitur rhoncus nulla condimentum, accumsan erat at, semper ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur commodo quam a pharetra auctor. Sed egestas metus vitae vulputate vestibulum. Proin accumsan odio lobortis, pellentesque tellus a, auctor metus. Nunc viverra dui eleifend ligula laoreet sollicitudin. Sed quis luctus mauris. Suspendisse finibus lorem eu nisi egestas, id fermentum ex interdum.',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 0.75,
        url: 'apple'
    }
];

const product = {
    id: 3,
    name: 'Banana',
    image: 'assets/images/banana.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros nibh. Curabitur rhoncus nulla condimentum, accumsan erat at, semper ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur commodo quam a pharetra auctor. Sed egestas metus vitae vulputate vestibulum. Proin accumsan odio lobortis, pellentesque tellus a, auctor metus. Nunc viverra dui eleifend ligula laoreet sollicitudin. Sed quis luctus mauris. Suspendisse finibus lorem eu nisi egestas, id fermentum ex interdum.',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 1.05,
    url: 'banana'
};

describe('ProductService', () => {
    let httpTestingController: HttpTestingController;
    let service: ProductService;
    const singleProduct = 'banana';
    const productsApiURL = 'assets/data/products.json';
    const productDetailsApiURL = 'assets/data/' + singleProduct + '.json';

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductService],
            imports: [HttpClientTestingModule]
        });
        // Inject the service (which imports the HttpClient) and the Test Controller
        httpTestingController = TestBed.get(HttpTestingController);
        service = TestBed.get(ProductService);
    });

    // Verify that there are no pending HTTP requests after test
    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('expects service to fetch products with `getProducts()`', () => {
        const data = 'data'; // Avoid `no-string-literal` from tslint
        // Call the service method
        service.getProducts().subscribe((res) => {
            // Set some expectations on the response
            expect(res).toBeDefined();
            expect(res).not.toBe(null);
            expect(res[data].length).toBe(2);
        });

        // Set expectation that there is only one endpoint request and that this is a GET
        const req = httpTestingController.expectOne(productsApiURL);
        expect(req.request.method).toEqual('GET');

        // Set the fake response that has to be returned
        req.flush({
            data: products
        });
    });

    it('expects service to fetch single product with `getProductDetails()`', () => {
        const data = 'data'; // Avoid `no-string-literal` from tslint
        // Call the service method
        service.getProductDetails(singleProduct).subscribe((res) => {
            // Set some expectations on the response
            expect(res[data]).toBeDefined();
            expect(res[data]).not.toBe(null);
            expect(res[data].url).toBe(singleProduct);
        });

        // Set expectation that there is only one endpoint request and that this is a GET
        const req = httpTestingController.expectOne(productDetailsApiURL);
        expect(req.request.method).toEqual('GET');

        // Set the fake response that has to be returned
        req.flush({
            data: product
        });
    });

    // it('get the behavior subject', () => {
    //     // Call the service method
    //     service.checkoutTotal$.subscribe((res) => {
    //         fixture.detectChanges();
    //     });
    // });
});
