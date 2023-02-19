import { Review } from "./review";

export interface ProductDetails {
    idProduct: number,
    productName: string,
    idBrand: number,
    image: string,
    slug: string,
    reviews: Array<Review>
}