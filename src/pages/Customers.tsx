import { useMemo } from "react";
import Modal from "../components/Modal";
import personIcon from "../assets/images/icons8-person-48.png";
import personRed from "../assets/images/icons8-person-64.png";
import vipIcon from "../assets/images/icons8-vip-64.png";
import customersIcon from "../assets/images/icons8-customers-48.png";
import contact from "../assets/images/icons8-new-contact-80.png";
import GrowthChart from "../components/GrowthChart";
import { usePagination } from "../hooks/usePagination";
import { useModal } from "../hooks/useModal";
import { useCrud } from "../hooks/useCrud";
import { useStatistics } from "../hooks/useStatistics";
import { v4 as uuidv4 } from "uuid";
import { Customer } from "../Types/customer";
import { Fields } from "../Types/fields";
export default function Customers() {
  const initialData: Customer[] = [
    {
      id: uuidv4(),
      fullName: "Ali Mohammadi",
      email: "ali.mohammadi@gmail.com",
      phone: "09121234567",
      status: "Active",
      type: "Normal",
      registerDate: "2026-08-15T10:30:00",
    },
    {
      id: uuidv4(),
      fullName: "Sara Ahmadi",
      email: "sara.ahmadi@yahoo.com",
      phone: "09129876543",
      status: "Not Active",
      type: "Normal",
      registerDate: "2025-12-03T14:20:00",
    },
    {
      id: uuidv4(),
      fullName: "Reza Karimi",
      email: "reza.karimi@gmail.com",
      phone: "09131239876",
      status: "Active",
      type: "VIP",
      registerDate: "2026-02-20T09:15:00",
    },
    {
      id: uuidv4(),
      fullName: "Maryam Hosseini",
      email: "maryam.hosseini@hotmail.com",
      phone: "09142345678",
      status: "Active",
      type: "Normal",
      registerDate: "2026-01-28T16:45:00",
    },
    {
      id: uuidv4(),
      fullName: "Mohammad Rezaei",
      email: "mohammad.rezaei@gmail.com",
      phone: "09153456789",
      status: "Active",
      type: "VIP",
      registerDate: "2025-11-10T11:00:00",
    },
    {
      id: uuidv4(),
      fullName: "Zahra Naderi",
      email: "zahra.naderi@yahoo.com",
      phone: "09164567890",
      status: "Not Active",
      type: "Normal",
      registerDate: "2025-12-22T08:30:00",
    },
    {
      id: uuidv4(),
      fullName: "Hossein Askari",
      email: "hossein.askari@gmail.com",
      phone: "09175678901",
      status: "Active",
      type: "Normal",
      registerDate: "2026-02-01T13:20:00",
    },
    {
      id: uuidv4(),
      fullName: "Negar Sadeghi",
      email: "negar.sadeghi@hotmail.com",
      phone: "09186789012",
      status: "Active",
      type: "VIP",
      registerDate: "2026-01-10T10:00:00",
    },
    {
      id: uuidv4(),
      fullName: "Amir Ghasemi",
      email: "amir.ghasemi@gmail.com",
      phone: "09197890123",
      status: "Active",
      type: "Normal",
      registerDate: "2025-10-05T09:30:00",
    },
    {
      id: uuidv4(),
      fullName: "Fatemeh Maleki",
      email: "fatemeh.maleki@yahoo.com",
      phone: "09198901234",
      status: "Not Active",
      type: "Normal",
      registerDate: "2025-12-15T15:10:00",
    },
    {
      id: uuidv4(),
      fullName: "Mahdi Jafari",
      email: "mahdi.jafari@gmail.com",
      phone: "09211234567",
      status: "Active",
      type: "Normal",
      registerDate: "2026-02-14T11:45:00",
    },
    {
      id: uuidv4(),
      fullName: "Elnaz Heydari",
      email: "elnaz.heydari@hotmail.com",
      phone: "09222345678",
      status: "Active",
      type: "Normal",
      registerDate: "2026-01-05T14:00:00",
    },
    {
      id: uuidv4(),
      fullName: "Saeed Mousavi",
      email: "saeed.mousavi@gmail.com",
      phone: "09233456789",
      status: "Active",
      type: "Normal",
      registerDate: "2026-03-01T09:00:00",
    },
    {
      id: uuidv4(),
      fullName: "Parisa Kamali",
      email: "parisa.kamali@yahoo.com",
      phone: "09244567890",
      status: "Active",
      type: "VIP",
      registerDate: "2025-11-25T16:30:00",
    },
    {
      id: uuidv4(),
      fullName: "Hamid Taheri",
      email: "hamid.taheri@gmail.com",
      phone: "09255678901",
      status: "Active",
      type: "Normal",
      registerDate: "2026-02-25T10:15:00",
    },
    {
      id: uuidv4(),
      fullName: "Neda Rahmani",
      email: "neda.rahmani@hotmail.com",
      phone: "09266789012",
      status: "Active",
      type: "Normal",
      registerDate: "2026-01-20T12:30:00",
    },
    {
      id: uuidv4(),
      fullName: "Milad Shahini",
      email: "milad.shahini@gmail.com",
      phone: "09277890123",
      status: "Active",
      type: "Normal",
      registerDate: "2025-09-15T08:45:00",
    },
    {
      id: uuidv4(),
      fullName: "Elahe Moradi",
      email: "elahe.moradi@yahoo.com",
      phone: "09288901234",
      status: "Active",
      type: "Normal",
      registerDate: "2026-02-08T14:50:00",
    },
    {
      id: uuidv4(),
      fullName: "Aref Zamani",
      email: "aref.zamani@gmail.com",
      phone: "09299012345",
      status: "Not Active",
      type: "VIP",
      registerDate: "2025-10-28T17:00:00",
    },
    {
      id: uuidv4(),
      fullName: "Shirin Akbari",
      email: "shirin.akbari@hotmail.com",
      phone: "09311234567",
      status: "Active",
      type: "VIP",
      registerDate: "2026-03-05T13:00:00",
    },
  ];
  const { data, addItem, updateItem, deleteItem } = useCrud(
    initialData,
    (item) => ({
      ...item,
      status: "Active",
      registerDate: new Date().toISOString().slice(0, 19),
    }),
  );
  const { currentItems, currentPage, totalPages, pages, handlePageChange } =
    usePagination(data, 5);
  //Modal
  const customerFields: Fields[] = [
    {
      name: "fullName",
      label: "Name",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
    },
    {
      name: "phone",
      label: "Phone",
      type: "text",
    },
    {
      name: "status",
      label: "Status",
      type: "text",
    },
    {
      name: "type",
      label: "Type",
      type: "text",
    },
  ];

  const {
    formData,
    isModalOpen,
    editingItem: editingCustomer,
    handleChange,
    handleSubmit,
    openModal,
    closeModal,
  } = useModal(customerFields, addItem, updateItem);
  const stats = useStatistics(data, {
    inActive: { field: "status", value: "Not Active" },
    VIPcustomers: { field: "type", value: "VIP" },
  });
  const { inActive, VIPcustomers } = stats;
  const threeNewest = useMemo(() => {
    return [...data]
      .sort(
        (a: Customer, b: Customer) =>
          new Date(b.registerDate).getTime() -
          new Date(a.registerDate).getTime(),
      )
      .slice(0, 3);
  }, [data]);

  const newCustomerNum = useMemo(() => {
    const now = new Date();

    return data.filter((i: Customer) => {
      const registerDate = new Date(i.registerDate);

      return (
        registerDate.getMonth() === now.getMonth() &&
        registerDate.getFullYear() === now.getFullYear()
      );
    }).length;
  }, [data]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 text-sm lg:text-md lg:p-2 pl-4 pr-2 pb-2 pt-2">
        <div className="flex  mt-8  flex-wrap gap-4 justify-center">
          <div className="shadow-2xl p-4 rounded-2xl dark:bg-dark-primary dark:text-black">
            <p className="mb-1 text-light-border dark:text-dark-border ">
              Not Active Customer
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">{inActive}</span>
              <img
                className="mb-1"
                width={30}
                height={20}
                src={personRed}
                alt=""
              />
            </div>
          </div>
          <div className="shadow-2xl p-4 rounded-2xl dark:bg-dark-primary dark:text-black">
            <p className="mb-1 text-light-border dark:text-dark-border ">
              Total Customers
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">{data.length}</span>
              <img width={30} height={20} src={customersIcon} alt="" />
            </div>
          </div>

          <div className="shadow-2xl p-4 rounded-2xl dark:bg-dark-primary dark:text-black">
            <p className="mb-1 text-light-border dark:text-dark-border ">
              VIP Customers
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">{VIPcustomers}</span>
              <img
                className="mt-1"
                width={30}
                height={20}
                src={vipIcon}
                alt=""
              />
            </div>
          </div>
          <div className="shadow-2xl p-4 rounded-2xl dark:bg-dark-primary dark:text-black">
            <p className="mb-1 text-light-border dark:text-dark-border ">
              New this month
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">{newCustomerNum}</span>
              <img width={30} height={20} src={contact} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-end mr-7 mt-8">
          <button
            onClick={() => {
              openModal();
            }}
            className="  outline-none border-2 dark:bg-dark-surface dark:border-dark-primary border-light-primary p-3 rounded-lg hover:bg-light-accent dark:hover:bg-dark-border"
          >
            + Add Customer
          </button>
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            fields={customerFields}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            title={editingCustomer ? "Edit Customer" : "Add Customer"}
            submitText={editingCustomer ? "Update" : "Save"}
          />
        </div>
        <div className="flex flex-col xl:flex-row justify-between xl:items-start">
          <div className="flex flex-col justify-center items-center md:w-full lg:w-auto">
            <div className="mt-2 w-full mr-2  ">
              <table className="hidden md:table lg:ml-57.5 md:w-full lg:w-auto border-collapse dark:bg-dark-primary text-black">
                <thead className="dark:bg-dark-border bg-[rgba(177,176,176,0.3)]">
                  <tr>
                    <th className="border border-gray-400  p-1 lg:p-3">Name</th>
                    <th className="border  border-gray-400  p-1 lg:p-3">
                      Phone
                    </th>
                    <th className="border  border-gray-400 p-1 lg:p-3">
                      Email
                    </th>
                    <th className="border  border-gray-400 p-1 lg:p-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item: Customer) => (
                    <tr key={item.id}>
                      <td className="border border-gray-400  lg:p-3 pt-2 pb-2">
                        <div className="flex items-center justify-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil-square fill-light-border dark:fill-dark-bg  hover:fill-dark-border dark:hover:fill-light-primary"
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
                            className="bi bi-x dark:fill-dark-bg fill-light-border hover:fill-dark-border dark:hover:fill-light-primary"
                            viewBox="0 0 16 16"
                            onClick={() => deleteItem(item.id, "customer")}
                          >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                          </svg>
                          {item.fullName}
                          <img
                            width={20}
                            height={20}
                            src={vipIcon}
                            alt=""
                            className={`ml-2 ${item.type == "VIP" ? "" : "hidden"}`}
                          />
                        </div>
                      </td>
                      <td className="border border-gray-400  lg:p-3 p-1">
                        {item.phone}
                      </td>
                      <td className="border border-gray-400  lg:p-3 p-1">
                        {item.email}
                      </td>
                      <td className="border border-gray-400  p-1 lg:p-3  ">
                        <p
                          className={`w-full  rounded-lg text-center p-1
                        ${
                          item.status === "Active"
                            ? "bg-green-400  "
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

              <div className="md:hidden mr-2 ">
                {currentItems.map((item: Customer) => {
                  return (
                    <div className="shadow-2xl rounded-2xl mb-8 p-6 dark:bg-dark-primary text-black">
                      <p className="mb-3 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil-square fill-dark-bg  hover:fill-dark-border dark:hover:fill-light-primary"
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
                          className="bi bi-x fill-dark-bg  hover:fill-dark-border dark:hover:fill-light-primary"
                          viewBox="0 0 16 16"
                          onClick={() => deleteItem(item.id, "customer")}
                        >
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                        {item.fullName}
                        <img
                          width={20}
                          height={20}
                          src={vipIcon}
                          alt=""
                          className={`ml-2 ${item.type === "VIP" ? "" : "hidden"}`}
                        />
                      </p>
                      <p className="mb-3">Phone : {item.phone}</p>
                      <p className="mb-3">Email : {item.email}</p>
                      <p
                        className={`w-full  rounded-lg text-center p-1 mt-3
                        ${
                          item.status === "Active"
                            ? "bg-green-400  "
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
              <div className="flex  justify-center  mt-5">
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
                        onClick={() => handlePageChange(page)}
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
          </div>
          <div className="flex flex-col justify-center items-center gap-5 mt-9">
            <div className="w-full xl:w-72.75 lg:w-[70%] lg:ml-40 xl:ml-0">
              <GrowthChart data={data} />
            </div>
            <div className="shadow-2xl mt-5 xl:w-70 w-full lg:w-[70%] lg:ml-40 xl:ml-0 rounded-2xl p-5 h-54 mr-2 bg-white dark:bg-dark-primary dark:text-black">
              <p className="font-bold text-xl">Newest Customers</p>
              <div>
                <ul className="mt-2">
                  {threeNewest.map((item) => {
                    return (
                      <li className="mb-3 flex justify-between items-center">
                        <div className="flex items-center justify-start">
                          <img width={30} height={30} src={personIcon} alt="" />
                          <span>{item.fullName}</span>
                          <img
                            width={20}
                            height={20}
                            src={vipIcon}
                            alt=""
                            className={`ml-2 ${item.type === "VIP" ? "" : "hidden"}`}
                          />
                        </div>
                        <span>{item.phone}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
