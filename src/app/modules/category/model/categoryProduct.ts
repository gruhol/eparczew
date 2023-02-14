import { Page } from "src/app/shared/models/page";
import { Product } from "../../product/model/product";
import { Category } from "./category";

export interface CategoryProducts {
    category: Category,
    products: Page<Product>
}