// types.d.ts

declare module "my-types" { 
  export interface Category { 
    id: number; 
    name: string; 
  } 

  export interface Product { 
  "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": string,
    "image": string,
    "rating": {
      "rate": number,
      "count": number,
  } }

  export interface NewProductInput {
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    categoryId: number;
  }
} 




