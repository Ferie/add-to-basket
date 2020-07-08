export interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
    excerpt: string;
    price: number;
    outOfStock?: boolean;
    quantity?: number;
    url: string;
}
