import { usePagination } from "../hooks/usePagination";
import { useModal } from "../hooks/useModal";
import { useCrud } from "../hooks/useCrud";
import { useStatistics } from "../hooks/useStatistics";
import Modal from "../components/Modal";
import BarChart from "../components/BarChart";
import elect from "../assets/images/icons8-electronic-64.png";
import sushi from "../assets/images/icons8-sushi-64.png";
import books from "../assets/images/icons8-books-64.png";
import shirt from "../assets/images/icons8-t-shirt-64.png";
import others from "../assets/images/icons8-product-64.png";
import { Product } from "../Types/product";
import { Fields } from "../Types/fields";
import { v4 as uuidv4 } from "uuid";
export default function Products() {
  const initialData: Product[] = [
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

  const { data, addItem, updateItem, deleteItem } = useCrud(
    initialData,
    (item) => ({
      ...item,
      price: Number(item.price),
    }),
  );

  const { currentItems, currentPage, totalPages, pages, handlePageChange } =
    usePagination(data, 5);

  const productFields: Fields[] = [
    { name: "category", label: "Category", type: "text" },
    { name: "title", label: "Title", type: "text" },
    { name: "price", label: "Price", type: "number" },
  ];
  const {
    formData,
    isModalOpen,
    editingItem: editingProduct,
    handleChange,
    handleSubmit,
    openModal,
    closeModal,
  } = useModal(productFields, addItem, updateItem);

  const stats = useStatistics(data, {
    elec: { field: "category", value: "Electronics" },
    book: { field: "category", value: "Books" },
    food: { field: "category", value: "Food" },
    cloths: { field: "category", value: "Clothes" },
    other: { field: "category", value: "Other" },
  });
  const { elec, book, food, cloths, other } = stats;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 text-sm lg:text-md lg:p-2 pl-4 pr-2 pb-2 pt-2">
        <div className="flex justify-end mr-7 mt-8">
          <button
            onClick={() => openModal()}
            className=" outline-none border-2 dark:bg-dark-surface dark:border-dark-primary border-light-primary p-3 rounded-lg hover:bg-light-accent dark:hover:bg-dark-border"
          >
            + Add Product
          </button>
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            fields={productFields}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            title={editingProduct ? "Edit Product" : "Add Product"}
            submitText={editingProduct ? "Update" : "Save"}
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col justify-center items-center">
            <div className="mt-2 w-full ">
              <table className="md:table hidden lg:w-[87%] w-full h-62.5 lg:h-auto lg:ml-57.5  border-collapse dark:bg-dark-primary text-black ">
                <thead className="dark:bg-dark-border bg-[rgba(177,176,176,0.3)]">
                  <tr>
                    <th className="border border-gray-400  p-1 lg:p-3">
                      Category
                    </th>
                    <th className="border  border-gray-400  p-1 lg:p-3">
                      Title
                    </th>
                    <th className="border  border-gray-400  p-1 lg:p-3">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item: Product) => (
                    <tr key={item.id}>
                      <td className="border border-gray-400  p-3">
                        <div className="flex items-center justify-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil-square fill-light-border dark:fill-dark-bg hover:fill-dark-border dark:hover:fill-light-primary cursor-pointer"
                            viewBox="0 0 16 16"
                            onClick={() => openModal(item)}
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fillRule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-x fill-light-border dark:fill-dark-bg  hover:fill-dark-border dark:hover:fill-light-primary cursor-pointer"
                            viewBox="0 0 16 16"
                            onClick={() => deleteItem(item.id, "product")}
                          >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                          </svg>
                          {item.category}
                          <img
                            width={20}
                            height={20}
                            className="ml-1"
                            src={
                              item.category === "Electronics"
                                ? elect
                                : item.category === "Food"
                                  ? sushi
                                  : item.category === "Books"
                                    ? books
                                    : item.category === "Clothes"
                                      ? shirt
                                      : others
                            }
                          />
                        </div>
                      </td>
                      <td className="border border-gray-400 p-3">
                        {item.title}
                      </td>
                      <td className="border border-gray-400 d-bg p-3">
                        ${item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="md:hidden mr-2">
                {currentItems.map((item: Product) => {
                  return (
                    <div
                      key={item.id}
                      className="shadow-2xl rounded-2xl mb-8 p-6 dark:bg-dark-primary text-black"
                    >
                      <p className="mb-3 flex">
                        Category : {item.category}{" "}
                        <img
                          width={20}
                          height={20}
                          className="ml-1"
                          src={
                            item.category === "Electronics"
                              ? elect
                              : item.category === "Food"
                                ? sushi
                                : item.category === "Books"
                                  ? books
                                  : item.category === "Clothes"
                                    ? shirt
                                    : others
                          }
                        />
                      </p>
                      <p className="mb-3">Title : {item.title}</p>
                      <p className="mb-3">Price : {item.price}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center  lg:ml-100 mt-5 mb-2">
              <nav className="flex flex-wrap justify-center items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded border border-light-border dark:border-light-bg ${
                    currentPage === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-light-primary dark:hover:bg-dark-primary dark:hover:text-black "
                  }`}
                >
                  Prev
                </button>

                {pages.map((page, index) =>
                  page === "..." ? (
                    <span key={index} className="px-2 text-lg font-bold">
                      ...
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-8 px-3 py-1 rounded-lg border border-light-border dark:border-light-bg ${
                        currentPage === page
                          ? "bg-light-primary dark:bg-dark-primary text-black"
                          : "hover:bg-light-primary dark:hover:bg-dark-primary dark:hover:text-black"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 rounded-lg border border-light-border dark:border-light-bg ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-light-primary dark:hover:bg-dark-primary dark:hover:text-black"
                  }`}
                >
                  Next
                </button>
              </nav>
            </div>
          </div>
          <div className="lg:w-70 w-full shadow-2xl p-3 rounded-2xl dark:bg-dark-primary mt-4 mr-2  lg:mt-0">
            <p className="font-bold text-xl text-black">Current Stock</p>
            <div className="flex justify-center items-center h-full">
              <BarChart
                elec={elec}
                cloths={cloths}
                food={food}
                book={book}
                other={other}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
