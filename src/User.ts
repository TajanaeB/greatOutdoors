import { ProductData } from "./ProductData";

export class User{
    user_id: number = 0;
    userName: string = "";
    email: string = "";
    password: string = "";
    address: string = "";
    role: string = "";
    products: ProductData[] = [];
    wishList: ProductData[] = [];
}