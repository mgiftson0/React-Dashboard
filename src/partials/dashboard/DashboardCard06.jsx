import React from "react";
import DoughnutChart from "../../charts/DoughnutChart";
import { tailwindConfig } from "../../utils/Utils";

function DashboardCard06() {
  // Dummy data for demonstration
  const actionCounts = {
    'Action1': 10,
    'Action2': 15,
    'Action3': 8,
    'Action4': 12,
    'Action5': 20
  };

  const chartData = {
    labels: Object.keys(actionCounts),
    datasets: [
      {
        label: "Last 30 days Actions",
        data: Object.values(actionCounts),
        backgroundColor: [
          tailwindConfig().theme.colors.indigo[500],
          tailwindConfig().theme.colors.blue[400],
          tailwindConfig().theme.colors.indigo[800],
          tailwindConfig().theme.colors.green[500],
          tailwindConfig().theme.colors.red[400],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.indigo[600],
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.indigo[900],
          tailwindConfig().theme.colors.green[600],
          tailwindConfig().theme.colors.red[500],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Dashboard 6
        </h2>
      </header>

      <DoughnutChart
        data={chartData}
        width={370}
        height={250}
      />
    </div>
  );
}

export default DashboardCard06;
