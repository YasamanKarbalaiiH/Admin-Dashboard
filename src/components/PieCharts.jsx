import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Electronics", value: 35 },
  { name: "Books", value: 25 },
  { name: "Clothes", value: 20 },
  { name: "Food", value: 10 },
  { name: "Other", value: 10 },
];

const COLORS = ["#4a1a6b", "#7b3a9e", "#a46bc1", "#c895d8", "#e5b8eb"];

export default function PieCharts() {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center p-4 md:p-6">
      <div className="w-full md:w-1/2 h-64 lg:ml-39">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
              label={true}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke="#fff"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => `${((value / total) * 100).toFixed(0)}%`}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #7a1cac",
                borderRadius: "8px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center p-4  mt-4 md:mt-0">
        <h3 className="font-bold text-lg mb-4 dark:text-white text-black">
          Category Distribution
        </h3>

        {data.map((item, index) => {
          const percentage = ((item.value / total) * 100).toFixed(0);
          return (
            <div
              key={index}
              className=" flex items-center justify-between mb-2 w-full md:w-48 text-sm"
            >
              <div className=" flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></span>

                <span className="dark:text-white text-black">{item.name}</span>
              </div>

              <span className="font-semibold dark:text-white text-black">
                {percentage}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
