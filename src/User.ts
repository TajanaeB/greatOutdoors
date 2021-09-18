import { ProductData } from "./ProductData";

export class User{
    userName: string = "";
    email: string = "";
    password: string = "";
    address: string = "";
    role: string = "";
    products: ProductData[] = [];
}