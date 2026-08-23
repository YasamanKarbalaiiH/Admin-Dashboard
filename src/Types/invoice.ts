export enum InvoiceStatus {
  Paid = "Paid",
  Pending = "Pending",
  Cancelled = "overdue",
}
export interface Invoice {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: InvoiceStatus;
  items: number;
}
