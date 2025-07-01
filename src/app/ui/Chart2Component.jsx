"use client";
import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts'; // Import ApexCharts

function Chart2Component() {
  const options = {
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -26
      },
    },
    series: [
      {
        name: "Developer Edition",
        data: [1500, 1418, 1456, 1526, 1356, 1256],
        color: "#14213d",
      },
      {
        name: "Designer Edition",
        data: [643, 413, 765, 412, 1423, 1731],
        color: "#fca311",
      },
      {
        name: "Mathematics Edition",
        data: [500, 600, 400, 700, 300, 500],
        color: "red",
      },
      {
        name: "Web Development Edition",
        data: [100, 200, 300, 250, 400, 1331],
        color: "Green",
      }
    ],
    chart: {
      height: "100%",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    legend: {
      show: true
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    xaxis: {
      categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        formatter: function (value) {
          return '$' + value;
        }
      }
    },
  };

  useEffect(() => {
    // Vérification si le window existe avant de charger ApexCharts
    if (typeof window !== 'undefined') {
      const chart = new ApexCharts(document.getElementById("grid-chart"), options);
      chart.render();

      // Nettoyer le graphique lors du démontage du composant
      return () => {
        chart.destroy();
      };
    }
  }, []);  // Dépendance vide, ce code s'exécute uniquement lors du montage

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-sm light:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between mb-5">
        <div>
          <h5 className="leading-none text-3xl font-bold text-gray-900 light:text-white pb-2">$12,423</h5>
          <p className="text-base font-normal text-gray-500 light:text-gray-400">Sales this week</p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 light:text-green-500 text-center">
          23%
          <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
          </svg>
        </div>
      </div>
      <div id="grid-chart"></div>
      <div className="grid grid-cols-1 items-center border-gray-200 border-t light:border-gray-700 justify-between mt-5">
        <div className="flex justify-between items-center pt-5">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="lastDaysdropdown"
            data-dropdown-placement="bottom"
            className="text-sm font-medium text-gray-500 light:text-gray-400 hover:text-gray-900 text-center inline-flex items-center light:hover:text-white"
            type="button">
            Last 7 days
            <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 light:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 light:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 light:hover:bg-gray-600 light:hover:text-white">Yesterday</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 light:hover:bg-gray-600 light:hover:text-white">Today</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 light:hover:bg-gray-600 light:hover:text-white">Last 7 days</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 light:hover:bg-gray-600 light:hover:text-white">Last 30 days</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 light:hover:bg-gray-600 light:hover:text-white">Last 90 days</a></li>
            </ul>
          </div>
          <a href="#"
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 light:hover:text-blue-500  hover:bg-gray-100 light:hover:bg-gray-700 light:focus:ring-gray-700 light:border-gray-700 px-3 py-2">
            Sales Report
            <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Chart2Component;
