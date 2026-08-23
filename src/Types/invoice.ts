import { v4 as uuidv4 } from "uuid";
import { Fields } from "./fields";
type InvoiceStatus = "Paid" | "Pending" | "Cancelled";

interface Invoice {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: InvoiceStatus;
  items: number;
}
export const invoiceData: Invoice[] = [
  {
    id: uuidv4(),
    customer: "Ali Mohammadi",
    date: "2026-07-01",
    total: 1250000,
    status: "Paid",
    items: 3,
  },
  {
    id: uuidv4(),
    customer: "Sara Karimi",
    date: "2026-07-02",
    total: 870000,
    status: "Pending",
    items: 2,
  },
  {
    id: uuidv4(),
    customer: "Reza Ahmadi",
    date: "2026-07-03",
    total: 2150000,
    status: "Paid",
    items: 5,
  },
  {
    id: uuidv4(),
    customer: "Maryam Hosseini",
    date: "2026-07-04",
    total: 540000,
    status: "Cancelled",
    items: 1,
  },
  {
    id: uuidv4(),
    customer: "Hossein Noori",
    date: "2026-07-05",
    total: 3200000,
    status: "Paid",
    items: 7,
  },
  {
    id: uuidv4(),
    customer: "Zahra Rezaei",
    date: "2026-07-06",
    total: 980000,
    status: "Pending",
    items: 4,
  },
  {
    id: uuidv4(),
    customer: "Mohammad Taghavi",
    date: "2026-07-07",
    total: 1500000,
    status: "Paid",
    items: 3,
  },
  {
    id: uuidv4(),
    customer: "Fatemeh Mousavi",
    date: "2026-07-08",
    total: 760000,
    status: "Cancelled",
    items: 2,
  },
  {
    id: uuidv4(),
    customer: "Amir Alipour",
    date: "2026-07-09",
    total: 4100000,
    status: "Paid",
    items: 9,
  },
  {
    id: uuidv4(),
    customer: "Narges Safari",
    date: "2026-07-10",
    total: 620000,
    status: "Pending",
    items: 2,
  },
  {
    id: uuidv4(),
    customer: "Mehdi Karimian",
    date: "2026-07-11",
    total: 1850000,
    status: "Paid",
    items: 4,
  },
  {
    id: uuidv4(),
    customer: "Leila Javanmard",
    date: "2026-07-12",
    total: 930000,
    status: "Cancelled",
    items: 3,
  },
  {
    id: uuidv4(),
    customer: "Saeed Rahmani",
    date: "2026-07-13",
    total: 2700000,
    status: "Pending",
    items: 6,
  },
  {
    id: uuidv4(),
    customer: "Neda Kamali",
    date: "2026-07-14",
    total: 450000,
    status: "Paid",
    items: 1,
  },
  {
    id: uuidv4(),
    customer: "Pouya Ehsani",
    date: "2026-07-15",
    total: 3300000,
    status: "Paid",
    items: 8,
  },
  {
    id: uuidv4(),
    customer: "Golnaz Bahrami",
    date: "2026-07-16",
    total: 1120000,
    status: "Pending",
    items: 3,
  },
  {
    id: uuidv4(),
    customer: "Farhad Soltani",
    date: "2026-07-17",
    total: 680000,
    status: "Cancelled",
    items: 2,
  },
  {
    id: uuidv4(),
    customer: "Shirin Abbasi",
    date: "2026-07-18",
    total: 2050000,
    status: "Paid",
    items: 5,
  },
  {
    id: uuidv4(),
    customer: "Kianoosh Pourreza",
    date: "2026-07-19",
    total: 890000,
    status: "Pending",
    items: 2,
  },
  {
    id: uuidv4(),
    customer: "Mina Afshari",
    date: "2026-07-20",
    total: 3750000,
    status: "Paid",
    items: 10,
  },
];
export const invoiceFields: Fields[] = [
  { name: "customer", label: "Customer", type: "text" },
  { name: "date", label: "Date", type: "date" },
  { name: "total", label: "Total", type: "number" },
  { name: "status", label: "Status", type: "text" },
  { name: "items", label: "Items", type: "number" },
];
