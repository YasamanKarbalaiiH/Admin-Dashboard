type Category = "Electronics" | "Books" | "Clothes" | "Food" | "Other";
export interface Product {
  id: string;
  category: Category;
  title: string;
  price: number;
}
