import PieCharts from "../components/PieCharts";
import RevenueChart from "../components/RevenueChart";
import revenueIcon from "../assets/images/icons8-revenue-48.png";
import productIcon from "../assets/images/icons8-product-64.png";
import customerIcon from "../assets/images/icons8-customers-48.png";
import invoiceIcon from "../assets/images/icons8-invoice-64.png";
export default function Home() {
  const data = {
    revenue: {
      title: "Revenue",
      value: "1234$",
    },
    products: {
      title: "Products",
      value: "980",
    },
    customers: {
      title: "Customers",
      value: "400",
    },
    invoices: {
      title: "Invoices",
      value: "234$",
    },
  };
  return (
    <>
      <div className="text-sm lg:text-md ">
        <div className="pt-10 pb-10 pr-4 md:pr-0 flex flex-wrap justify-center gap-10 items-center dark:bg-dark-bg bg-light-bg ">
          <div className="shadow-xl rounded-lg p-4 flex flex-col justify-center items-start dark:bg-dark-surface ">
            <h2>{data.revenue.title}</h2>
            <div>
              <p className="flex items-center ">
                <span className="text-2xl font-bold">{data.revenue.value}</span>
                <img
                  width={30}
                  height={30}
                  src={revenueIcon}
                  alt=""
                  className="ml-5"
                />
              </p>
            </div>
          </div>
          <div className="shadow-xl rounded-lg p-4 flex-col flex justify-center items-start dark:bg-dark-surface ">
            <h2>{data.products.title}</h2>
            <div>
              <p className="flex items-center ">
                <span className="text-2xl font-bold">
                  {data.products.value}
                </span>
                <img
                  width={30}
                  height={30}
                  src={productIcon}
                  alt=""
                  className="ml-5"
                />
              </p>
            </div>
          </div>
          <div className="shadow-xl rounded-lg p-4 flex-col flex justify-center items-start dark:bg-dark-surface ">
            <h2>{data.customers.title}</h2>
            <div>
              <p className="flex items-center ">
                <span className="text-2xl font-bold">
                  {data.customers.value}
                </span>
                <img
                  width={30}
                  height={30}
                  src={customerIcon}
                  alt=""
                  className="ml-5"
                />
              </p>
            </div>
          </div>
          <div className="shadow-xl rounded-lg p-4 flex flex-col justify-center items-start dark:bg-dark-surface ">
            <h2>{data.invoices.title}</h2>
            <div>
              <p className="flex items-center ">
                <span className="text-2xl font-bold">
                  {data.invoices.value}
                </span>
                <img
                  width={30}
                  height={30}
                  src={invoiceIcon}
                  alt=""
                  className="ml-5"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <RevenueChart />

          <PieCharts />
        </div>
      </div>
    </>
  );
}
