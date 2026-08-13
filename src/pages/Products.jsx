import { useState } from "react";
import { useEffect } from "react";
import Modal from "../components/Modal";
import Swal from "sweetalert2";
import { useSearch } from "../context/SearchContext";
import BarChart from "../components/BarChart";
import elect from "../assets/images/icons8-electronic-64.png";
import sushi from "../assets/images/icons8-sushi-64.png";
import books from "../assets/images/icons8-books-64.png";
import shirt from "../assets/images/icons8-t-shirt-64.png";
import others from "../assets/images/icons8-product-64.png";
export default function Products() {
  const [data, setData] = useState([
    { id: 1, category: "Electronics", title: "ASUS ROG Laptop", price: 1500 },
    { id: 2, category: "Clothes", title: "Adidas Men's T-Shirt", price: 40 },
    { id: 3, category: "Books", title: "The Art of Clear Thinking", price: 18 },
    { id: 4, category: "Food", title: "Family Size Pizza", price: 25 },
    { id: 5, category: "Other", title: "Handmade Leather Bag", price: 85 },
    {
      id: 6,
      category: "Electronics",
      title: "Sony WH-1000XM5 Headphones",
      price: 350,
    },
    { id: 7, category: "Clothes", title: "Nike Air Max Sneakers", price: 160 },
    {
      id: 8,
      category: "Books",
      title: "Tuesdays with Morrie Trilogy",
      price: 22,
    },
    { id: 9, category: "Food", title: "Premium Sushi Set (20 pcs)", price: 38 },
    { id: 10, category: "Other", title: "Ceramic Flower Pot", price: 55 },
    {
      id: 11,
      category: "Electronics",
      title: "iPhone 15 Pro Max",
      price: 1200,
    },
    {
      id: 12,
      category: "Clothes",
      title: "Puma Women's Sports Jacket",
      price: 75,
    },
    { id: 13, category: "Books", title: "Four Agreements", price: 16 },
    { id: 14, category: "Food", title: "Deluxe Burger with Fries", price: 22 },
    {
      id: 15,
      category: "Other",
      title: "Remote Control Robotic Toy",
      price: 65,
    },
    {
      id: 16,
      category: "Electronics",
      title: "Samsung Galaxy Tab S9",
      price: 800,
    },
    { id: 17, category: "Clothes", title: "Levi's 501 Jeans", price: 90 },
    { id: 18, category: "Books", title: "The Psychology of Money", price: 20 },
    { id: 19, category: "Food", title: "3-Tier Chocolate Cake", price: 45 },
    {
      id: 20,
      category: "Other",
      title: "Casio Classic Wrist Watch",
      price: 120,
    },
    {
      id: 21,
      category: "Other",
      title: "Casio Classic Wrist Watch",
      price: 340,
    },
    {
      id: 22,
      category: "Electronics",
      title: "Iphone 17pro",
      price: 1000,
    },
    {
      id: 23,
      category: "Books",
      title: "The Art of Clear Thinking",
      price: 18,
    },
    {
      id: 24,
      category: "Electronics",
      title: "Samsung Galaxy Tab S10",
      price: 900,
    },
    {
      id: 25,
      category: "Electronics",
      title: "Samsung Galaxy Tab S9",
      price: 800,
    },
    {
      id: 26,
      category: "Books",
      title: "The Art of Clear Thinking",
      price: 18,
    },
  ]);
  let elec = 0;
  let food = 0;
  let cloths = 0;
  let book = 0;
  let other = 0;
  data.map((item) => {
    item.category == "Electronics"
      ? elec++
      : item.category == "Books"
        ? book++
        : item.category == "Food"
          ? food++
          : item.category == "Clothes"
            ? cloths++
            : other++;
  });
  //Search
  const { search } = useSearch();
  const filteredData = data.filter((item) =>
    Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase()),
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);
  //Paigination
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const pages =
    totalPages <= 5
      ? Array.from({ length: totalPages }, (_, i) => i + 1)
      : currentPage <= 3
        ? [1, 2, 3, 4, "...", totalPages]
        : currentPage >= totalPages - 2
          ? [
              1,
              "...",
              totalPages - 3,
              totalPages - 2,
              totalPages - 1,
              totalPages,
            ]
          : [
              1,
              "...",
              currentPage - 1,
              currentPage,
              currentPage + 1,
              "...",
              totalPages,
            ];
  //Modal
  const productFields = [
    {
      name: "category",
      label: "Category",
      type: "text",
    },
    {
      name: "title",
      label: "Title",
      type: "text",
    },
    {
      name: "price",
      label: "Price",
      type: "number",
    },
  ];
  const createFormData = (fields) =>
    fields.reduce((obj, field) => {
      obj[field.name] = "";
      return obj;
    }, {});
  const [formData, setFormData] = useState(createFormData(productFields));
  const [editingProduct, setEditingProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  function updateProduct(updatedProduct) {
    setData(
      data.map((item) =>
        item.id === updatedProduct.id
          ? {
              ...updatedProduct,
              price: Number(updatedProduct.price),
            }
          : item,
      ),
    );
  }
  function addProduct(product) {
    setData([
      ...data,
      {
        id: data.length + 1,
        ...product,
        price: Number(product.price),
      },
    ]);
  }
  function deleteBtn(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7a1cac",
      cancelButtonColor: "#ad49e1",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setData(data.filter((item) => item.id !== id));
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
          confirmButtonColor: "#ad49e1",
          confirmButtonText: "OK",
        });
      }
    });
  }
  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
    } else {
      setFormData(createFormData(productFields));
    }
  }, [editingProduct]);
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (editingProduct) {
      updateProduct({
        ...formData,
        id: editingProduct.id,
      });
    } else {
      addProduct(formData);
    }
    setFormData(createFormData(productFields));

    setEditingProduct(null);
    setIsModalOpen(false);
  }
  function editBtn(product) {
    setEditingProduct(product);
    setIsModalOpen(true);
  }
  return (
    <>
      <div className="grid grid-cols-1 gap-4 text-sm lg:text-md lg:p-2 pl-4 pr-2 pb-2 pt-2">
        <div className="flex justify-end mr-7 mt-8">
          <button
            onClick={() => {
              setEditingProduct(null);
              setIsModalOpen(true);
            }}
            className=" outline-none border-2 dark:bg-dark-surface dark:border-dark-primary border-light-primary p-3 rounded-lg hover:bg-light-accent dark:hover:bg-dark-border"
          >
            + Add Product
          </button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setEditingProduct(null);
            }}
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
                  {currentItems.map((item) => (
                    <tr key={item.id}>
                      <td className="border border-gray-400  p-3">
                        <div className="flex items-center justify-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil-square fill-light-border dark:fill-dark-bg hover:fill-dark-border dark:hover:fill-light-primary"
                            viewBox="0 0 16 16"
                            onClick={() => editBtn(item)}
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
                            className="bi bi-x fill-light-border dark:fill-dark-bg  hover:fill-dark-border dark:hover:fill-light-primary"
                            viewBox="0 0 16 16"
                            onClick={() => deleteBtn(item.id)}
                          >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                          </svg>
                          {item.category}
                          <img
                            width={20}
                            height={20}
                            className="ml-1"
                            src={
                              item.category == "Electronics"
                                ? elect
                                : item.category == "Food"
                                  ? sushi
                                  : item.category == "Books"
                                    ? books
                                    : item.category == "Clothes"
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
                {currentItems.map((item) => {
                  return (
                    <div className="shadow-2xl rounded-2xl mb-8 p-6 dark:bg-dark-primary text-black">
                      <p className="mb-3 flex">
                        Category : {item.category}{" "}
                        <img
                          width={20}
                          height={20}
                          className="ml-1"
                          src={
                            item.category == "Electronics"
                              ? elect
                              : item.category == "Food"
                                ? sushi
                                : item.category == "Books"
                                  ? books
                                  : item.category == "Clothes"
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
