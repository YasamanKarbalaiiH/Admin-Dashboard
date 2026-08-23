import { v4 as uuidv4 } from "uuid";
import { Fields } from "./fields";
type Category = "Electronics" | "Books" | "Clothes" | "Food" | "Other";
interface Product {
  id: string;
  category: Category;
  title: string;
  price: number;
}
export const productData: Product[] = [
  {
    id: uuidv4(),
    category: "Electronics",
    title: "ASUS ROG Laptop",
    price: 1500,
  },
  {
    id: uuidv4(),
    category: "Clothes",
    title: "Adidas Men's T-Shirt",
    price: 40,
  },
  {
    id: uuidv4(),
    category: "Books",
    title: "The Art of Clear Thinking",
    price: 18,
  },
  { id: uuidv4(), category: "Food", title: "Family Size Pizza", price: 25 },
  {
    id: uuidv4(),
    category: "Other",
    title: "Handmade Leather Bag",
    price: 85,
  },
  {
    id: uuidv4(),
    category: "Electronics",
    title: "Sony WH-1000XM5 Headphones",
    price: 350,
  },
  {
    id: uuidv4(),
    category: "Clothes",
    title: "Nike Air Max Sneakers",
    price: 160,
  },
  {
    id: uuidv4(),
    category: "Books",
    title: "Tuesdays with Morrie Trilogy",
    price: 22,
  },
  {
    id: uuidv4(),
    category: "Food",
    title: "Premium Sushi Set (20 pcs)",
    price: 38,
  },
  { id: uuidv4(), category: "Other", title: "Ceramic Flower Pot", price: 55 },
  {
    id: uuidv4(),
    category: "Electronics",
    title: "iPhone 15 Pro Max",
    price: 1200,
  },
  {
    id: uuidv4(),
    category: "Clothes",
    title: "Puma Women's Sports Jacket",
    price: 75,
  },
  { id: uuidv4(), category: "Books", title: "Four Agreements", price: 16 },
  {
    id: uuidv4(),
    category: "Food",
    title: "Deluxe Burger with Fries",
    price: 22,
  },
  {
    id: uuidv4(),
    category: "Other",
    title: "Remote Control Robotic Toy",
    price: 65,
  },
  {
    id: uuidv4(),
    category: "Electronics",
    title: "Samsung Galaxy Tab S9",
    price: 800,
  },
  { id: uuidv4(), category: "Clothes", title: "Levi's 501 Jeans", price: 90 },
  {
    id: uuidv4(),
    category: "Books",
    title: "The Psychology of Money",
    price: 20,
  },
  {
    id: uuidv4(),
    category: "Food",
    title: "3-Tier Chocolate Cake",
    price: 45,
  },
  {
    id: uuidv4(),
    category: "Other",
    title: "Casio Classic Wrist Watch",
    price: 120,
  },
  {
    id: uuidv4(),
    category: "Other",
    title: "Casio Classic Wrist Watch",
    price: 340,
  },
  {
    id: uuidv4(),
    category: "Electronics",
    title: "Iphone 17pro",
    price: 1000,
  },
  {
    id: uuidv4(),
    category: "Books",
    title: "The Art of Clear Thinking",
    price: 18,
  },
  {
    id: uuidv4(),
    category: "Electronics",
    title: "Samsung Galaxy Tab S10",
    price: 900,
  },
  {
    id: uuidv4(),
    category: "Electronics",
    title: "Samsung Galaxy Tab S9",
    price: 800,
  },
  {
    id: uuidv4(),
    category: "Books",
    title: "The Art of Clear Thinking",
    price: 18,
  },
];
export const productFields: Fields[] = [
  { name: "category", label: "Category", type: "text" },
  { name: "title", label: "Title", type: "text" },
  { name: "price", label: "Price", type: "number" },
];
