import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { INVESTMENT_CATEGORY_TO_COLOR_MAP } from "../constants/categories";
import { formatRupees } from "../utils/numberFormatter";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    console.log(payload);
    return (
      <div className="pie-chart-custom-tooltip">
        <p className="label">{`${payload[0].name} : ${formatRupees(
          payload[0].value
        )}`}</p>
      </div>
    );
  }
  return null
};

const InvestmentSummary = () => {
  //get data from local storage
  const investments = JSON.parse(localStorage.getItem("investments"));
  //Group data by type
  const groupedData = investments.reduce((acc, curr) => {
    if (!acc[curr.investment_type]) {
      acc[curr.investment_type] = {
        name: curr.investment_type,
        value: curr.investment_amount,
      };
    } else {
      acc[curr.investment_type].value += curr.investment_amount;
    }
    return acc;
  }, {});
  console.log(groupedData);
  //Create data array
  const data = Object.keys(groupedData).map((key) => {
    return { name: key, value: parseInt(groupedData[key].value) };
  });
  console.log(data);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <PieChart
        width={600}
        height={600}
        className="investment-summary-pie-chart"
      >
        <Pie
          data={data}
          cx={300}
          cy={300}
          labelLine={false}
          // label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => {
            return (
              <Cell
                key={`cell-${index}`}
                fill={INVESTMENT_CATEGORY_TO_COLOR_MAP[entry.name]}
              />
            );
          })}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
      {/* </ResponsiveContainer> */}
    </>
  );
};

export default InvestmentSummary;
