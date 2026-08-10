import { useEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";
import Swal from "sweetalert2";
import Modal from "../components/Modal";

export default function Invoices() {
  const [data, setData] = useState([
    {
      id: 1,
      customer: "Ali Mohammadi",
      date: "2026-07-01",
      total: 1250000,
      status: "paid",
      items: 3,
    },
    {
      id: 2,
      customer: "Sara Karimi",
      date: "2026-07-02",
      total: 870000,
      status: "pending",
      items: 2,
    },
    {
      id: 3,
      customer: "Reza Ahmadi",
      date: "2026-07-03",
      total: 2150000,
      status: "paid",
      items: 5,
    },
    {
      id: 4,
      customer: "Maryam Hosseini",
      date: "2026-07-04",
      total: 540000,
      status: "overdue",
      items: 1,
    },
    {
      id: 5,
      customer: "Hossein Noori",
      date: "2026-07-05",
      total: 3200000,
      status: "paid",
      items: 7,
    },
    {
      id: 6,
      customer: "Zahra Rezaei",
      date: "2026-07-06",
      total: 980000,
      status: "pending",
      items: 4,
    },
    {
      id: 7,
      customer: "Mohammad Taghavi",
      date: "2026-07-07",
      total: 1500000,
      status: "paid",
      items: 3,
    },
    {
      id: 8,
      customer: "Fatemeh Mousavi",
      date: "2026-07-08",
      total: 760000,
      status: "overdue",
      items: 2,
    },
    {
      id: 9,
      customer: "Amir Alipour",
      date: "2026-07-09",
      total: 4100000,
      status: "paid",
      items: 9,
    },
    {
      id: 10,
      customer: "Narges Safari",
      date: "2026-07-10",
      total: 620000,
      status: "pending",
      items: 2,
    },
    {
      id: 11,
      customer: "Mehdi Karimian",
      date: "2026-07-11",
      total: 1850000,
      status: "paid",
      items: 4,
    },
    {
      id: 12,
      customer: "Leila Javanmard",
      date: "2026-07-12",
      total: 930000,
      status: "overdue",
      items: 3,
    },
    {
      id: 13,
      customer: "Saeed Rahmani",
      date: "2026-07-13",
      total: 2700000,
      status: "pending",
      items: 6,
    },
    {
      id: 14,
      customer: "Neda Kamali",
      date: "2026-07-14",
      total: 450000,
      status: "paid",
      items: 1,
    },
    {
      id: 15,
      customer: "Pouya Ehsani",
      date: "2026-07-15",
      total: 3300000,
      status: "paid",
      items: 8,
    },
    {
      id: 16,
      customer: "Golnaz Bahrami",
      date: "2026-07-16",
      total: 1120000,
      status: "pending",
      items: 3,
    },
    {
      id: 17,
      customer: "Farhad Soltani",
      date: "2026-07-17",
      total: 680000,
      status: "overdue",
      items: 2,
    },
    {
      id: 18,
      customer: "Shirin Abbasi",
      date: "2026-07-18",
      total: 2050000,
      status: "paid",
      items: 5,
    },
    {
      id: 19,
      customer: "Kianoosh Pourreza",
      date: "2026-07-19",
      total: 890000,
      status: "pending",
      items: 2,
    },
    {
      id: 20,
      customer: "Mina Afshari",
      date: "2026-07-20",
      total: 3750000,
      status: "paid",
      items: 10,
    },
  ]);
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
  const invoiceFields = [
    {
      name: "customer",
      label: "Customer",
      type: "text",
    },
    {
      name: "date",
      label: "Date",
      type: "date",
    },
    {
      name: "total",
      label: "Total",
      type: "number",
    },
    {
      name: "status",
      label: "Status",
      type: "text",
    },
    {
      name: "items",
      label: "Items",
      type: "number",
    },
  ];
  const createFormData = (fields) =>
    fields.reduce((obj, field) => {
      obj[field.name] = "";
      return obj;
    }, {});
  const [formData, setFormData] = useState(createFormData(invoiceFields));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingInvoice, setEditingInvoice] = useState(null);
  function updateInvoice(updated) {
    setData(
      data.map((item) =>
        item.id === updated.id
          ? {
              ...updated,
              total: Number(updated.total),
              ...updated,
              items: Number(updated.items),
            }
          : item,
      ),
    );
  }
  function addInvoice(invoice) {
    setData([
      ...data,
      {
        id: data.length + 1,
        ...invoice,
        total: Number(invoice.total),
        ...invoice,
        items: Number(invoice.items),
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
          text: "Your invoice has been deleted.",
          icon: "success",
          confirmButtonColor: "#ad49e1",
          confirmButtonText: "OK",
        });
      }
    });
  }
  useEffect(() => {
    if (editingInvoice) {
      setFormData(editingInvoice);
    } else {
      setFormData(createFormData(invoiceFields));
    }
  }, [editingInvoice]);
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (editingInvoice) {
      updateInvoice({
        ...formData,
        id: editingInvoice.id,
      });
    } else {
      addInvoice(formData);
    }
    setFormData(createFormData(invoiceFields));

    setEditingInvoice(null);
    setIsModalOpen(false);
  }
  function editBtn(customer) {
    setEditingInvoice(customer);
    setIsModalOpen(true);
  }
  return (
    <>
      <div className="grid grid-cols-1 gap-4 text-sm lg:text-md p-2">
        <div className="flex justify-end mr-7 mt-8">
          <button
            onClick={() => {
              setEditingInvoice(null);
              setIsModalOpen(true);
            }}
            className=" outline-none border-2 dark:bg-dark-surface dark:border-dark-primary border-light-primary p-3 rounded-lg hover:bg-light-accent dark:hover:bg-dark-border"
          >
            + Create Invoice
          </button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setEditingInvoice(null);
            }}
            fields={invoiceFields}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            title={editingInvoice ? "Edit Invoice" : "Add Invoice"}
            submitText={editingInvoice ? "Update" : "Save"}
          />
        </div>
        <div className="mt-2 w-full">
          <table className="md:table hidden lg:ml-57.5  lg:w-[80%] h-62.5 lg:h-auto  border-collapse  dark:bg-dark-primary dark:text-black ">
            <thead className="bg-[rgba(177,176,176,0.3)] dark:bg-light-primary">
              <tr>
                <th className="border  border-gray-400  p-1 lg:p-3">
                  Customer
                </th>
                <th className="border  border-gray-400  p-1 lg:p-3">Date</th>
                <th className="border  border-gray-400 p-1 lg:p-3">Total</th>
                <th className="border  border-gray-400 p-1 lg:p-3">Items</th>
                <th className="border  border-gray-400 p-1 lg:p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr key={item.id}>
                  <td className="border border-gray-400 p-1 lg:p-3">
                    <div className="flex items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil-square fill-dark-bg  hover:fill-dark-border dark:hover:fill-light-primary"
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
                        className="bi bi-x fill-dark-bg hover:fill-dark-border dark:hover:fill-light-primary"
                        viewBox="0 0 16 16"
                        onClick={() => deleteBtn(item.id)}
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                      </svg>
                      {item.customer}
                    </div>
                  </td>
                  <td className="border border-gray-400  p-1 lg:p-3">
                    {item.date}
                  </td>
                  <td className="border border-gray-400  p-1 lg:p-3">
                    {item.total}
                  </td>
                  <td className="border border-gray-400  p-1 lg:p-3">
                    {item.items}
                  </td>
                  <td className="border border-gray-400  p-1 lg:p-3 ">
                    <p
                      className={` w-full rounded-lg text-center p-1
                        ${
                          item.status === "paid"
                            ? "bg-green-400 "
                            : item.status === "pending"
                              ? "bg-yellow-300  "
                              : "bg-red-400 "
                        }
                      `}
                    >
                      {item.status}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="md:hidden mr-2">
            {currentItems.map((item) => {
              return (
                <div className="shadow-2xl rounded-2xl mb-8 p-6 dark:bg-dark-primary text-black">
                  <p className="mb-3">{item.customer}</p>
                  <p className="mb-3">Date : {item.date}</p>
                  <p className="mb-3">Total : {item.total}</p>
                  <p className="mb-3">Items : {item.items}</p>
                  <p
                    className={`w-full  rounded-lg text-center p-1 mt-3
                        ${
                          item.status === "paid"
                            ? "bg-green-400 "
                            : item.status === "pending"
                              ? "bg-yellow-300  "
                              : "bg-red-400 "
                        }
                      `}
                  >
                    {item.status}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center ml-4  ">
          <nav className="flex items-center flex-wrap justify-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded border border-dark-bg dark:border-light-bg ${
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
                  className={`w-8 px-3 py-1 rounded-lg border border-dark-bg dark:border-light-bg ${
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
              className={`px-3 py-1 rounded-lg border  border-dark-bg dark:border-light-bg ${
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
    </>
  );
}
