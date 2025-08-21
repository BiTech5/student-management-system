import { useMemo } from 'react';
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useContext } from "react";
import { SideBarContext } from "../../Context/SideBarContext";

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

export const CourseChart: React.FC = () => {
    const { isOpen } = useContext(SideBarContext);
  
    // Memoize data to prevent re-computation
    const data = useMemo(
      () => ({
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'Course Distribution',
            data: [300, 50, 100],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
            hoverOffset: 4,
          },
        ],
      }),
      [] // Empty dependency array for static data
    );
  
    // Memoize options to prevent re-computation
    const options = useMemo(
      () => ({
        responsive: true,
        maintainAspectRatio: false, // Allow chart to fill container height
        plugins: {
          legend: {
            position: 'right' as const, // Type-safe
          },
          tooltip: {
            enabled: true, // Ensure tooltips are enabled
          },
        },
      }),
      [] // Empty dependency array for static options
    );
  
    return (
      <div
        className={`shadow-lg rounded-2xl bg-white flex justify-center items-center flex-col h-100 p-10 ${
          isOpen ? 'w-150' : 'w-170'
        } mt-10 duration-500`}
      >
        <h1 className="text-gray-700 text-2xl font-bold">Course Overview</h1>
        <Doughnut key={`chart-${isOpen}`} data={data} options={options} />
      </div>
    );
  };