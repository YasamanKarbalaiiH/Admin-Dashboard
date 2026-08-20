import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
interface RevenueChartData {
  name: string;
  revenue: number;
  expenses: number;
}
const data: RevenueChartData[] = [
  { name: "Jan", revenue: 4000, expenses: 2400 },
  { name: "Feb", revenue: 3000, expenses: 1398 },
  { name: "Mar", revenue: 2000, expenses: 9800 },
  { name: "Apr", revenue: 2780, expenses: 3908 },
  { name: "May", revenue: 1890, expenses: 4800 },
  { name: "Jun", revenue: 2390, expenses: 3800 },
  { name: "Jul", revenue: 3490, expenses: 4300 },
];

export default function RevenueChart() {
  return (
    <div className="bg-light-bg dark:bg-dark-bg p-4 md:p-6 w-full lg:w-[60%]">
      <div className="h-62.5 md:h-75 flex justify-center items-center">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" />
            <XAxis
              dataKey="name"
              stroke="var(--chart-axis)"
              tick={{
                fill: "var(--chart-axis)",
                fontSize: 12,
              }}
              tickMargin={10}
            />
            <YAxis
              stroke="var(--chart-axis)"
              tick={{
                fill: "var(--chart-axis)",
                fontSize: 12,
              }}
              tickMargin={10}
              width={50}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--chart-tooltip-bg)",
                border: "none",
                color: "var(--chart-tooltip-text)",
              }}
            />
            <Legend wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="var(--chart-revenue)"
              strokeWidth={2}
              dot={{
                fill: "var(--chart-revenue)",
                r: 4,
              }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="expenses"
              stroke="var(--chart-expenses)"
              strokeWidth={2}
              dot={{
                fill: "var(--chart-expenses)",
                r: 4,
              }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
