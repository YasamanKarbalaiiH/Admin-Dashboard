import { usePagination } from "../hooks/usePagination";
import { useModal } from "../hooks/useModal";
import { useCrud } from "../hooks/useCrud";
import Modal from "../components/Modal";
import { v4 as uuidv4 } from "uuid";
import { Fields } from "../Types/fields";
interface Invoice {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: string;
  items: number;
}
export default function Invoices() {
  const initialData: Invoice[] = [
    {
      id: uuidv4(),
      customer: "Ali Mohammadi",
      date: "2026-07-01",
      total: 1250000,
      status: "paid",
      items: 3,
    },
    {
      id: uuidv4(),
      customer: "Sara Karimi",
      date: "2026-07-02",
      total: 870000,
      status: "pending",
      items: 2,
    },
    {
      id: uuidv4(),
      customer: "Reza Ahmadi",
      date: "2026-07-03",
      total: 2150000,
      status: "paid",
      items: 5,
    },
    {
      id: uuidv4(),
      customer: "Maryam Hosseini",
      date: "2026-07-04",
      total: 540000,
      status: "overdue",
      items: 1,
    },
    {
      id: uuidv4(),
      customer: "Hossein Noori",
      date: "2026-07-05",
      total: 3200000,
      status: "paid",
      items: 7,
    },
    {
      id: uuidv4(),
      customer: "Zahra Rezaei",
      date: "2026-07-06",
      total: 980000,
      status: "pending",
      items: 4,
    },
    {
      id: uuidv4(),
      customer: "Mohammad Taghavi",
      date: "2026-07-07",
      total: 1500000,
      status: "paid",
      items: 3,
    },
    {
      id: uuidv4(),
      customer: "Fatemeh Mousavi",
      date: "2026-07-08",
      total: 760000,
      status: "overdue",
      items: 2,
    },
    {
      id: uuidv4(),
      customer: "Amir Alipour",
      date: "2026-07-09",
      total: 4100000,
      status: "paid",
      items: 9,
    },
    {
      id: uuidv4(),
      customer: "Narges Safari",
      date: "2026-07-10",
      total: 620000,
      status: "pending",
      items: 2,
    },
    {
      id: uuidv4(),
      customer: "Mehdi Karimian",
      date: "2026-07-11",
      total: 1850000,
      status: "paid",
      items: 4,
    },
    {
      id: uuidv4(),
      customer: "Leila Javanmard",
      date: "2026-07-12",
      total: 930000,
      status: "overdue",
      items: 3,
    },
    {
      id: uuidv4(),
      customer: "Saeed Rahmani",
      date: "2026-07-13",
      total: 2700000,
      status: "pending",
      items: 6,
    },
    {
      id: uuidv4(),
      customer: "Neda Kamali",
      date: "2026-07-14",
      total: 450000,
      status: "paid",
      items: 1,
    },
    {
      id: uuidv4(),
      customer: "Pouya Ehsani",
      date: "2026-07-15",
      total: 3300000,
      status: "paid",
      items: 8,
    },
    {
      id: uuidv4(),
      customer: "Golnaz Bahrami",
      date: "2026-07-16",
      total: 1120000,
      status: "pending",
      items: 3,
    },
    {
      id: uuidv4(),
      customer: "Farhad Soltani",
      date: "2026-07-17",
      total: 680000,
      status: "overdue",
      items: 2,
    },
    {
      id: uuidv4(),
      customer: "Shirin Abbasi",
      date: "2026-07-18",
      total: 2050000,
      status: "paid",
      items: 5,
    },
    {
      id: uuidv4(),
      customer: "Kianoosh Pourreza",
      date: "2026-07-19",
      total: 890000,
      status: "pending",
      items: 2,
    },
    {
      id: uuidv4(),
      customer: "Mina Afshari",
      date: "2026-07-20",
      total: 3750000,
      status: "paid",
      items: 10,
    },
  ];

  const { data, addItem, updateItem, deleteItem } = useCrud(
    initialData,
    (item) => ({
      ...item,
      total: Number(item.total),
      items: Number(item.items),
    }),
  );

  const { currentItems, currentPage, totalPages, pages, handlePageChange } =
    usePagination(data, 5);

  const invoiceFields: Fields[] = [
    { name: "customer", label: "Customer", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "total", label: "Total", type: "number" },
    { name: "status", label: "Status", type: "text" },
    { name: "items", label: "Items", type: "number" },
  ];

  const {
    formData,
    isModalOpen,
    editingItem: editingInvoice,
    handleChange,
    handleSubmit,
    openModal,
    closeModal,
  } = useModal(invoiceFields, addItem, updateItem);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 text-sm lg:text-md lg:p-2 pl-4 pr-2 pb-2 pt-2">
        <div className="flex justify-end mr-7 mt-8">
          <button
            onClick={() => openModal()}
            className=" outline-none border-2 dark:bg-dark-surface dark:border-dark-primary border-light-primary p-3 rounded-lg hover:bg-light-accent dark:hover:bg-dark-border"
          >
            + Create Invoice
          </button>
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
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
            <thead className="bg-[rgba(177,176,176,0.3)] dark:bg-dark-border">
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
                        className="bi bi-pencil-square fill-light-border dark:fill-dark-bg  hover:fill-dark-border dark:hover:fill-light-primary cursor-pointer"
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
                        className="bi bi-x fill-light-border dark:fill-dark-bg hover:fill-dark-border dark:hover:fill-light-primary cursor-pointer"
                        viewBox="0 0 16 16"
                        onClick={() => deleteItem(item.id, "invoice")}
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
                <div
                  key={item.id}
                  className="shadow-2xl rounded-2xl mb-8 p-6 dark:bg-dark-primary text-black"
                >
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
              className={`px-3 py-1 rounded border border-light-border dark:border-white ${
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
                  onClick={() => {
                    if (typeof page === "number") {
                      handlePageChange(page);
                    }
                  }}
                  className={`w-8 px-3 py-1 rounded-lg border border-light-border dark:border-white ${
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
              className={`px-3 py-1 rounded-lg border  border-light-border dark:border-white ${
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
