import { useMemo } from "react";
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

const GrowthChart = ({ data }) => {
  const monthlyData = useMemo(() => {
    const monthly = {};

    data.forEach((item) => {
      const date = new Date(item.registerDate);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      const monthName = date.toLocaleDateString("en-US", {
        month: "short",
      });

      if (!monthly[monthKey]) {
        monthly[monthKey] = {
          month: monthKey,
          monthName: monthName,
          count: 0,
        };
      }

      monthly[monthKey].count++;
    });

    return Object.keys(monthly)
      .sort()
      .map((key) => monthly[key]);
  }, [data]);

  const growthData = useMemo(() => {
    return monthlyData.map((item, index) => {
      if (index === 0) {
        return { ...item, growth: 0 };
      }
      const previous = monthlyData[index - 1].count;
      const current = item.count;
      const growth =
        previous === 0 ? 100 : ((current - previous) / previous) * 100;
      return { ...item, growth: Math.round(growth * 100) / 100 };
    });
  }, [monthlyData]);

  return (
    <div
      style={{
        padding: "20px",
      }}
      className="shadow-2xl h-76 bg-white dark:bg-dark-primary rounded-2xl"
    >
      <h2
        style={{ marginBottom: "30px" }}
        className="text-black  font-bold text-lg"
      >
        Customer Growth Chart
      </h2>

      <div className="h-50 mb-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={growthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" />
            <XAxis
              dataKey="monthName"
              stroke="var(--chart-axis)"
              tick={{
                fill: "var(--chart-axis)",
                fontSize: 12,
              }}
            />
            <YAxis
              stroke="var(--chart-axis)"
              tick={{
                fill: "var(--chart-axis)",
                fontSize: 12,
              }}
            />
            <Tooltip
              formatter={(value, name) => {
                const labels = {
                  count: "Total Customers",
                  growth: "Growth %",
                };
                return [value, labels[name] || name];
              }}
              contentStyle={{
                backgroundColor: "var(--tooltip-bg)",
                border: "var(--tooltip-border)",
                borderRadius: "8px",
                color: "var(--tooltip-text)",
              }}
              labelStyle={{
                color: "var(--tooltip-text)",
              }}
            />
            <Legend
              wrapperStyle={{
                color: "var(--legend-color)",
                fontSize: 12,
                paddingTop: 10,
              }}
            />
            <Line
              type="monotone"
              dataKey="count"
              stroke="var(--chart-line)"
              strokeWidth={3}
              name="Total Customers"
              dot={{
                r: 6,
                fill: "none",
                stroke: "var(--chart-line)",
              }}
              activeDot={{
                r: 8,
                fill: "none",
                stroke: "var(--chart-line)",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GrowthChart;
